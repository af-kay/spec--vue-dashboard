import { defineStore } from 'pinia';

import { summariesPerRecord } from '@/entities/analytics/config';
import {
  createFilterByName,
  createFilterByParity,
  createFilterBySummaries,
  createSorterByName,
  initializeEmptyState,
} from '../lib';
import type { AnalyticsState } from './types';
import type { AnalyticsRecord } from '@/entities/analytics/model';

export const useAnalyticsStore = defineStore('analytics', {
  state: initializeEmptyState,
  actions: {
    setRecords(records: AnalyticsRecord[]) {
      this.allRecords = records;
    },
    updateNameFilter(nameFilter: string) {
      this.filters.name = nameFilter;
    },
    updateSummaryFilter(summaryFilter: undefined | number, index: number) {
      if (index >= summariesPerRecord) {
        throw new Error('Invalid summary index!');
      }

      this.filters.summary[index] = summaryFilter;
    },
    updateRowParityFilter(
      rowParityFilter?: AnalyticsState['filters']['rowParity']
    ) {
      this.filters.rowParity = rowParityFilter;
    },
    toggleOrdering() {
      const nextOrdering = (() => {
        switch (this.orderingByName) {
          case 'ASC':
            return 'DESC';
          case 'DESC':
            return undefined;
          case undefined:
          default:
            return 'ASC';
        }
      })();

      this.orderingByName = nextOrdering;
    },
  },
  getters: {
    filteredRecords: (s) => {
      const nameFilter = createFilterByName(s.filters.name);
      const summariesFilter = createFilterBySummaries(s.filters.summary);
      const parityFilter = createFilterByParity(s.filters.rowParity);
      const sorterByName = createSorterByName(s.orderingByName);

      return s.allRecords
        .filter(nameFilter)
        .filter(summariesFilter)
        .filter(parityFilter)
        .sort(sorterByName);
    },
  },
});
