import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  websocketHost?: string;
  series?: string;
  aggregation: string;
}

export const defaultQuery: Partial<MyQuery> = {
  websocketHost: 'localhost:5678',
  aggregation: 'mean',
};

/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  path?: string;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface MySecureJsonData {
  apiKey?: string;
}
