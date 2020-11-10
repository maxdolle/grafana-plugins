export interface NMConfiguration {
  type: string;
  chNames: string[];
  sfreq: number;
  ylim?: number[];
}

export interface NMConfigurations {
  [key: string]: NMConfiguration;
}

export interface NMRow {
  vals: number[];
  timestamp: number;
  sample: number;
}

export interface NMBuffer {
  [key: string]: NMRow[];
}

export class WebSocketReader {
  host: string;
  port: number | string;
  series: string;
  interval: number;
  aggregation: string;

  onNewData: (type: string, data: any[]) => void;
  onNewConfiguration: (config: NMConfiguration) => void;

  buffers: NMBuffer;
  configurations: NMConfigurations;

  socket?: WebSocket;

  constructor(
    host: string,
    port: number | string,
    series: string,
    interval: number,
    aggregation: string,
    onNewData: (type: string, data: any[]) => void,
    onNewConfiguration: (config: NMConfiguration) => void
  ) {
    this.host = host;
    this.port = port;
    this.series = series;
    this.interval = interval;
    this.onNewData = onNewData;
    this.onNewConfiguration = onNewConfiguration;

    this.aggregation = aggregation;

    this.buffers = {};
    this.configurations = {};
  }

  start() {
    return new Promise((resolve, reject) => {
      const url = `ws://${this.host}:${this.port}/${this.series}`;
      this.socket = new WebSocket(url);

      const self = this;

      this.socket.addEventListener('message', event => {
        self.handleMessage(event.data);
      });

      this.socket.addEventListener('open', () => {
        return resolve;
      });
      this.socket.addEventListener('error', () => reject(new Error(`Could not connect to ${url}`)));
    });
  }

  handleMessage(content: string) {
    const msg = JSON.parse(
      content
        .replace(/NaN/g, 'null')
        .replace(/-Infinity/g, 'null')
        .replace(/\+?Infinity/g, 'null')
    );

    if (msg.ch_names !== undefined) {
      this.configurations[msg.type] = {
        type: msg.type,
        chNames: msg.ch_names,
        sfreq: msg.sfreq,
        ylim: msg.ylim,
      };
      this.buffers[msg.type] = [];
      this.onNewConfiguration(this.configurations[msg.type]);
    }

    if (msg.data !== undefined && msg.data.length > 0 && this.configurations[msg.type] !== undefined) {
      const rows: NMRow[] = msg.data.map((values: number[], i: number) => {
        return {
          vals: values,
          timestamp: msg.timestamps[i],
          sample: msg.samples[i],
        };
      });

      const data = this.pushRows(msg.type, rows);

      if (data.length > 0) {
        this.onNewData(msg.type, data);
      }
    }
  }

  pushRows(type: string, newRows: NMRow[]): any {
    this.buffers[type].push(...newRows);

    const rows = this.buffers[type];
    const outRows = [];

    let curGroup: NMRow[] = [];
    let curTimestamp = roundTo(rows[0].timestamp, this.interval);

    for (let i = 0; i < rows.length; i += 1) {
      // If current time interval is not filled yet,
      if (rows[i].timestamp >= curTimestamp + this.interval) {
        if (curGroup.length > 0) {
          outRows.push(reduceRows(curGroup, this.aggregation));
        }
        curTimestamp = roundTo(rows[i].timestamp, this.interval);
        curGroup = [];
      }
      curGroup.push(rows[i]);
    }

    this.buffers[type] = curGroup;

    // Reformat data to be absorbed by Grafana DataFrame
    const config = this.configurations[type];
    return outRows.map(row => {
      const timestampMs = roundTo(row.timestamp, this.interval) * 1000;
      const data: { [k: string]: any } = { timestamp: new Date(timestampMs) };
      config.chNames.forEach((name, i) => {
        data[name] = row.vals[i];
      });
      return data;
    });
  }
}

function roundTo(n: number, precision: number) {
  return Math.floor(n / precision) * precision;
}

function reduceRows(rows: NMRow[], method: string | ((x: number, y: number) => number)): NMRow {
  if (method === 'sum') {
    return reduceRows(rows, (x, y) => x + y);
  }

  if (method === 'mean') {
    const row = reduceRows(rows, 'sum');
    row.vals = row.vals.map(x => x / rows.length);
    return row;
  }

  if (method === 'max') {
    return reduceRows(rows, (x, y) => (x > y ? x : y));
  }
  if (method === 'min') {
    return reduceRows(rows, (x, y) => (x < y ? x : y));
  }

  if (method === 'last') {
    return rows[rows.length - 1];
  }
  if (method === 'first') {
    return rows[0];
  }

  if (typeof method === 'string') {
    throw Error(`Unknown method {method}`);
  }

  return rows.reduce((x, y) => {
    return {
      timestamp: Math.min(...[x.timestamp, y.timestamp]),
      sample: Math.min(...[x.timestamp, y.timestamp]),
      vals: x.vals.map((_, i) => method(x.vals[i], y.vals[i])),
    };
  });
}
