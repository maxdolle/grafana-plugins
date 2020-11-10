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

  constructor(canvas: HTMLCanvasElement, data: PanelData) {
    this.webGLPlot = new WebGLPlot(canvas);
    this.data = data;

    this.lines = [];
    this.scaling = undefined;

    this.nLines = 0;
    this.nPoints = 1;

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

    if (request.maxDataPoints !== undefined) {
      nPoints = Math.min(...[nPoints, request.maxDataPoints]);
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

  update() {
    const dataPoints: number[][] = this.getData();

    if (this.nPoints !== this.determineNPoints() || this.nLines !== dataPoints.length) {
      this.reconfigure();
    }

    this.setScaling(this.getAutoScaling(dataPoints));

    const scaling = this.scaling !== undefined ? this.scaling : this.getAutoScaling(dataPoints);
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

        let offset = -dataPoints[lineId].reduce((x, y) => x + y, 0) / dataPoints[lineId].length;
        offset /= scaling * this.nLines * 1.1;
        const lineOffset = 1 - ((0.5 + lineId) * 2) / this.nLines;

        this.lines[lineId].setOffset(offset + lineOffset);
      } else {
        this.lines[lineId].setScaling(1e9);
        this.lines[lineId].setOffset(-100000);
      }
    }
    return true;
  }

  setScaling(scaling: number) {
    this.scaling = scaling;
  }

  getAutoScaling(dataPoints: number[][]) {
    // Set scaling as the maximum absolute value over the last second
    let scaling = Math.max(...dataPoints.map(values => Math.max(...values.map(Math.abs))));
    scaling = scaling > 0 ? scaling : 1;

    return scaling;
  }
}
