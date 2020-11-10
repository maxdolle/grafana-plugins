import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import WebGLGraph from './WebGLGraph';

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  myCanvasRef: React.RefObject<HTMLCanvasElement>;
  webGLGraph?: WebGLGraph;

  constructor(props: Props) {
    super(props);
    this.myCanvasRef = React.createRef<HTMLCanvasElement>();
  }

  componentDidMount() {
    const canvas = this.myCanvasRef.current as HTMLCanvasElement;
    const { data } = this.props;

    this.webGLGraph = new WebGLGraph(canvas, data);
  }

  onCanvasScroll(event: React.UIEvent<HTMLCanvasElement, UIEvent>) {
    console.log(event);
    this.webGLGraph?.setScaling((this.webGLGraph!.scaling || 1) * 1.2);
  }

  render() {
    const styles = getStyles();

    const { options, width, height, data } = this.props;

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
          {options.showSeriesCount && <div>Number of series: {data.series.length}</div>}
          <div>Text option value: {options.text}</div>
        </div>
      </div>
    );
  }
}

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
    `,
  };
});
