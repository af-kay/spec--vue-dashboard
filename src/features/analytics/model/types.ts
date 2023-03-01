import type { AnalyticsRecord } from '@/entities/analytics/model';

export type AnalyticsState = {
  allRecords: AnalyticsRecord[];
  filters: {
    name?: string;
    summary: (undefined | number)[];
    rowParity?: 'ODD' | 'EVEN';
  };
  orderingByName?: 'ASC' | 'DESC';
};