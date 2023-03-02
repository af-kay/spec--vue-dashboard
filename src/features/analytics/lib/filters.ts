import isUndefined from '@/shared/lib/isUndefined';
import type { AnalyticsRecord } from '@/entities/analytics/model';
import type { AnalyticsState } from '../model/types';

const PASSTHROUGH = () => true;

export const createFilterByName = (name?: string) => {
  if (!name) {
    return PASSTHROUGH;
  }
  return (r: AnalyticsRecord) =>
    r.dataName.toLowerCase().includes(name.toLowerCase());
};

export const createFilterBySummaries = (
  summaries: Array<undefined | number>
) => {
  if (summaries.every(isUndefined)) {
    return PASSTHROUGH;
  }

  return (r: AnalyticsRecord) => {
    return r.summaries.some((rowSummary, index) => {
      return rowSummary === summaries[index];
    });
  };
};

export const createFilterByParity = (
  parity?: AnalyticsState['filters']['rowParity']
) => {
  if (!parity) {
    return PASSTHROUGH;
  }

  const expectedRemainer = parity === 'ODD' ? 1 : 0;

  return (_: unknown, index: number) => {
    const rowNumber = index + 1;

    return rowNumber % 2 === expectedRemainer;
  };
};

export const createSorterByName = (
  orderingByName?: AnalyticsState['orderingByName']
) => {
  if (!orderingByName) {
    return () => 0;
  }

  return (a: AnalyticsRecord, b: AnalyticsRecord) => {
    const comparisonResult = a.dataName.localeCompare(b.dataName);

    switch (orderingByName) {
      case 'ASC':
        return comparisonResult;
      case 'DESC':
        return comparisonResult * -1;
      default:
        return 0;
    }
  };
};
