import { summariesPerRecord } from '@/entities/analytics/config';
import type { AnalyticsState } from '../model/types';

export function initializeEmptyState(): AnalyticsState {
  return {
    allRecords: [],
    filters: {
      summary: Array.from({ length: summariesPerRecord }).map(() => undefined),
    },
  };
}
