import { randUuid, randNumber } from '@ngneat/falso';
import {
  summariesPerRecord,
  analyticsRecordsCount,
  summaryNumberOptions,
} from './config';
import type { AnalyticsRecord } from './model';

function getRandomSummaryValue() {
  return randNumber(summaryNumberOptions);
}

export async function getAnalytics(): Promise<AnalyticsRecord[]> {
  return Array.from({ length: analyticsRecordsCount }).map((_, index) => ({
    id: randUuid(),
    dataName: `Data${index + 1}`,
    summaries: Array.from({ length: summariesPerRecord }).map(
      getRandomSummaryValue
    ),
  }));
}
