import defaults from 'lodash/defaults';

import { Observable, merge } from '@grafana/data/node_modules/rxjs';

import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  CircularDataFrame,
  FieldType,
} from '@grafana/data';

import { MyQuery, MyDataSourceOptions, defaultQuery } from './types';

import { WebSocketReader, NMConfiguration } from './WebsocketReader';
import { getTemplateSrv } from '@grafana/runtime';

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
    super(instanceSettings);
  }

  query(options: DataQueryRequest<MyQuery>): Observable<DataQueryResponse> {
    const streams = options.targets.map(target => {
      const query = defaults(target, defaultQuery);

      let host = query.websocketHost === undefined ? defaultQuery.websocketHost : query.websocketHost;
      host = getTemplateSrv().replace(host, options.scopedVars);
      const hostname = host.split(':')[0];
      const port = host.split(':')[1];

      let nPoints = options.range.to.diff(options.range.from) / options.intervalMs;

      if (options.maxDataPoints !== undefined) {
        nPoints = Math.min(...[options.maxDataPoints, nPoints]);
      }

      return new Observable<DataQueryResponse>(subscriber => {
        const frame = new CircularDataFrame({
          append: 'tail',
          capacity: nPoints,
        });

        frame.refId = query.refId;
        frame.addField({ name: 'timestamp', type: FieldType.time });

        function onNewData(type: string, rows: any[]): void {
          if (type === query.series) {
            rows.forEach((row: any) => {
              frame.add(row);
            });

            subscriber.next({
              data: [frame],
              key: query.refId,
            });
          }
        }

        function onNewConfiguration(config: NMConfiguration): void {
          if (config.type === query.series) {
            config.chNames.forEach(name => {
              frame.addField({ name: name, type: FieldType.number });
            });
          }
        }

        if (query.series === undefined || hostname === undefined || port === undefined) {
          return;
        }

        const reader = new WebSocketReader(
          hostname,
          port,
          query.series,
          options.intervalMs / 1000,
          query.aggregation,
          onNewData,
          onNewConfiguration
        );
        reader.start();
      });
    });

    return merge(...streams);
  }

  async testDatasource() {
    // Implement a health check for your data source.
    return {
      status: 'success',
      message: 'Success',
    };
  }
}
