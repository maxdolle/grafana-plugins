type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
  text: string;
  subtractMean: boolean;
  seriesCountSize: SeriesSize;
}
