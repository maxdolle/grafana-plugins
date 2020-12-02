import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import WebGLGraph from './WebGLGraph';

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  myCanvasRef: React.RefObject<HTMLCanvasElement>;
  myDivRef: React.RefObject<HTMLDivElement>;
  webGLGraph?: WebGLGraph;
  lastWheelTime: Date;

  constructor(props: Props) {
    super(props);
    this.myCanvasRef = React.createRef<HTMLCanvasElement>();
    this.myDivRef = React.createRef<HTMLDivElement>();
    this.lastWheelTime = new Date();
  }

  componentDidMount() {
    const canvas = this.myCanvasRef.current as HTMLCanvasElement;
    const { data, options } = this.props;

    this.webGLGraph = new WebGLGraph(canvas, data, options.subtractMean);
  }

  onCanvasScroll(event: React.WheelEvent<HTMLCanvasElement>) {
    const webGLGraph: WebGLGraph = this.webGLGraph!;

    if (new Date().getTime() - this.lastWheelTime.getTime() > 100) {
      const val = event.deltaY > 0 ? 1 : -1;
      if (webGLGraph.scaling === undefined) {
        webGLGraph.scaling = webGLGraph.getAutoScaling(webGLGraph.getData());
      }

      this.webGLGraph!.setScaling(webGLGraph.scaling * (1 + 3 / 10) ** val);

      const div = this.myDivRef.current as HTMLDivElement;
      div.innerText = `scaling: ${webGLGraph.scaling.toPrecision(4)}`;

      this.lastWheelTime = new Date();
    }
    event.preventDefault();
  }
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean {
    const { width, height } = this.props;

    return nextProps.width !== width || nextProps.height !== height;
  }

  render() {
    const styles = getStyles();

    const { width, height } = this.props;
    const canvas = this.myCanvasRef.current as HTMLCanvasElement;

    // If graph size changed, adapt webgl viewport
    if (this.webGLGraph !== undefined && (canvas.width !== width || canvas.height !== height)) {
      const webGLGraph: WebGLGraph = this.webGLGraph!;
      webGLGraph.webGLPlot.viewport(0, 0, width, height);
    }

    return (
      <div
        className={cx(
          styles.wrapper,
          css`
            width: ${width}px;
            height: ${height}px;
          `
        )}
      >
        <canvas ref={this.myCanvasRef} width={width} height={height} onWheel={ev => this.onCanvasScroll(ev)} />

        <div className={styles.textBox}>
          <div ref={this.myDivRef}>Scaling: ?</div>
        </div>
      </div>
    );
  }
}

//          {options.showSeriesCount && <div>Number of series: {data.series.length}</div>}

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.4);
    `,
  };
});
