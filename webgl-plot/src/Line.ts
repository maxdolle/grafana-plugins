import WebGLPlot, { ColorRGBA, WebglLine } from 'webgl-plot';
import RollingBuffer from './RollingBuffer';

class Line {
  nPoints: number;
  scaling: number;
  offset: number;
  glLine: WebglLine;
  buffer: RollingBuffer;
  enabled: boolean;

  constructor(nPoints: number, color: ColorRGBA, webGLPlot: WebGLPlot) {
    this.nPoints = nPoints;

    this.glLine = new WebglLine(color, this.nPoints);
    this.glLine.lineSpaceX(-1, 2 / nPoints);
    webGLPlot.addLine(this.glLine);

    this.scaling = 1;
    this.offset = 0;
    this.enabled = true;
    this.buffer = new RollingBuffer(nPoints);
  }

  setScaling(scaling: number) {
    this.scaling = scaling;
  }

  setOffset(offset: number) {
    this.offset = offset;
  }

  setData(data: number[]) {
    for (let i = 0; i < this.nPoints; i += 1) {
      this.glLine.setY(i, data[i] / this.scaling + this.offset);
    }
  }

  push(data: number[]) {
    this.buffer.push(data);
  }
}

export default Line;
