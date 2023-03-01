import { defineStore } from 'pinia';

import { summariesPerRecord } from '@/entities/analytics/config';
import {
  createFilterByName,
  createFilterByParity,
  createFilterBySummaries,
  createSorterByName,
} from '../lib/filters';
import type { AnalyticsState } from './types';

export const useAnalyticsStore = defineStore<string, AnalyticsState>(
  'analytics',
  {
    state: () => {
      return {
        allRecords: [],
        filters: {
          // TODO: make cleaner and more declarative
          summary: [undefined, undefined, undefined, undefined, undefined],
        },
      };
    },
    actions: {
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
      updateNameOrdering(nameOrdering?: AnalyticsState['orderingByName']) {
        this.orderingByName = nameOrdering;
      },
    },
    getters: {
      filteredRecords: ({ allRecords, filters, orderingByName }) => {
        const nameFilter = createFilterByName(filters.name);
        const summariesFilter = createFilterBySummaries(filters.summary);
        const parityFilter = createFilterByParity(filters.rowParity);
        const sorterByName = createSorterByName(orderingByName);

        return allRecords
          .filter(nameFilter)
          .filter(summariesFilter)
          .filter(parityFilter)
          .sort(sorterByName);
      },
    },
  }
);
