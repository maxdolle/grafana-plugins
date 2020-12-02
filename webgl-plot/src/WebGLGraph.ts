import WebGLPlot from 'webgl-plot';
import { PanelData } from '@grafana/data';

import Line from './Line';
import createPalette from './Colors';

export default class WebGLGraph {
  data: PanelData;
  lines: Line[];
  webGLPlot: WebGLPlot;
  scaling?: number;
  nPoints: number;
  nLines: number;
  subtractMean: boolean;
  lastProcessedTimestamp: number;

  constructor(canvas: HTMLCanvasElement, data: PanelData, subtractMean: boolean) {
    this.webGLPlot = new WebGLPlot(canvas);
    this.data = data;
    this.subtractMean = subtractMean;

    this.lines = [];
    this.scaling = undefined;
    this.nLines = 0;
    this.nPoints = 1;
    this.lastProcessedTimestamp = 0;

    this.reconfigure();

    const newFrame = () => {
      if (this.update()) {
        this.webGLPlot.update();
      }
      requestAnimationFrame(newFrame);
    };
    requestAnimationFrame(newFrame);
  }

  determineNPoints() {
    if (this.data.request === undefined) {
      return 1;
    }
    const request = this.data.request;
    let nPoints = request.range.to.diff(request.range.from) / request.intervalMs;
    nPoints = Math.ceil(nPoints);

    if (request.maxDataPoints !== undefined) {
      nPoints = Math.min(nPoints, request.maxDataPoints);
    }

    return nPoints;
  }

  reconfigure() {
    // Delete existing lines
    this.webGLPlot.removeAllLines();

    this.nLines = this.getData().length;
    this.nPoints = this.data.request!.maxDataPoints!;

    this.nPoints = this.determineNPoints();

    // Setup as many color as there are lines
    const colors = createPalette(this.nLines);

    // Instantiate each line
    this.lines = [];
    for (let i = 0; i < this.nLines; i += 1) {
      this.lines[i] = new Line(this.nPoints, colors[i], this.webGLPlot);
    }
  }

  getData(): number[][] {
    return this.data.series
      .map(series => series.fields.filter(field => field.type === 'number').map(field => field.values.toArray())!)
      .reduce((x, y) => x.concat(y, []));
  }

  /*
   * Get last timestamp from any available time field, otherwise return 0
   * */
  getLastTimestamp(): number {
    const lastTimestamps = this.data.series.map(series => {
      const timeFields = series.fields.filter(field => field.type === 'time');
      if (timeFields.length > 0) {
        return timeFields[0].values.toArray()[timeFields[0].values.length - 1];
      }
      return 0;
    });

    return Math.max(...lastTimestamps);
  }

  update() {
    // Be lazy and do not update if there is no new data
    const lastTimestamp = this.getLastTimestamp();
    if (lastTimestamp !== 0 && lastTimestamp === this.lastProcessedTimestamp) {
      return false;
    }

    const dataPoints: number[][] = this.getData();

    if (this.nPoints !== this.determineNPoints() || this.nLines !== dataPoints.length) {
      this.reconfigure();
    }

    const scaling = this.scaling || this.getAutoScaling(dataPoints);
    /*
    // If scaling is not set, compute the max value on the current chunk of data
    if (this.scaling === undefined) {
      // Set scaling as the maximum absolute value
      let scaling = Math.max(...data.map(
        (values) => Math.max(...values.map((x) => Math.abs(x))),
      ));
      scaling = scaling > 0 ? scaling : 1;
      this.setScaling(scaling);
    }*/

    for (let lineId = 0; lineId < this.nLines; lineId += 1) {
      const line = this.lines[lineId];
      // Feed buffers with new data
      line.setData(dataPoints[lineId]);

      if (line.enabled) {
        line.setScaling(scaling * this.nLines * 1.1);

        let offset = 0;

        if (this.subtractMean) {
          offset -= mean(dataPoints[lineId]);
        }

        offset /= scaling * this.nLines * 1.1;
        const lineOffset = 1 - ((0.5 + lineId) * 2) / this.nLines;

        this.lines[lineId].setOffset(offset + lineOffset);
      } else {
        this.lines[lineId].setScaling(1e9);
        this.lines[lineId].setOffset(-100000);
      }
    }

    this.lastProcessedTimestamp = lastTimestamp;

    return true;
  }

  setScaling(scaling: number) {
    this.scaling = scaling;
  }

  getAutoScaling(dataPoints: number[][]) {
    // Set scaling as the maximum absolute value over the last second
    let scaling = Math.max(
      ...dataPoints.map(values => {
        // Subtract mean value to each value of necessary
        const meanVal = this.subtractMean ? mean(values) : 0;
        return Math.max(...values.map(x => Math.abs(x - meanVal)));
      })
    );

    scaling = scaling > 0 ? scaling : 1;

    return scaling;
  }
}

function mean(arr: number[]): number {
  return arr.reduce((x, y) => x + y, 0) / arr.length;
}
