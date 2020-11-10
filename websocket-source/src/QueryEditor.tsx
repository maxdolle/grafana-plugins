import defaults from 'lodash/defaults';

import React, { ChangeEvent, PureComponent } from 'react';
import { InlineField, InlineFieldRow, Input, Select } from '@grafana/ui';
import { QueryEditorProps, SelectableValue } from '@grafana/data';
import { DataSource } from './DataSource';
import { defaultQuery, MyDataSourceOptions, MyQuery } from './types';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export class QueryEditor extends PureComponent<Props> {
  onWebsocketHostChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, websocketHost: event.target.value });
    // executes the query
    onRunQuery();
  };

  onSeriesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, series: event.target.value });

    onRunQuery();
  };

  onAggregationChange = (selected: SelectableValue<string>) => {
    if (selected.value) {
      const { onChange, query, onRunQuery } = this.props;
      onChange({ ...query, aggregation: selected.value });
      onRunQuery();
    }
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);

    const aggOptions: Array<SelectableValue<string>> = [
      { label: 'mean', value: 'mean' },
      { label: 'sum', value: 'sum' },
      { label: 'min', value: 'min' },
      { label: 'max', value: 'max' },
      { label: 'first', value: 'first' },
      { label: 'last', value: 'last' },
    ];
    return (
      <>
        <InlineFieldRow>
          <InlineField label="Websocket Host">
            <Input
              width={32}
              id={`webSocket-${query.refId}`}
              name={'webSocketInput'}
              value={query.websocketHost}
              onChange={this.onWebsocketHostChange}
              placeholder={'10s'}
              css={''}
            />
          </InlineField>
        </InlineFieldRow>

        <InlineFieldRow>
          <InlineField label="Series">
            <Input
              width={32}
              id={`series-${query.refId}`}
              name={'seriesInput'}
              value={query.series}
              onChange={this.onSeriesChange}
              css={''}
            />
          </InlineField>
        </InlineFieldRow>

        <InlineFieldRow>
          <InlineField label="Aggregation">
            <Select
              width={32}
              value={aggOptions.find(s => s.value === query.aggregation)}
              options={aggOptions}
              onChange={this.onAggregationChange}
            />
          </InlineField>
        </InlineFieldRow>
      </>
    );
  }
}
