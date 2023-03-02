<script setup lang="ts">
import type { PropType } from 'vue';
import { summariesPerRecord } from '../config';
import type { AnalyticsRecord } from '../model';

const props = defineProps({
  rows: {
    type: Array as PropType<AnalyticsRecord[]>,
    required: true,
  },
  nameSearch: {
    type: String,
    required: false,
  },
  onNameSearchChange: {
    type: Function as PropType<(name: string) => void>,
    required: true,
  },
  summarySearches: {
    type: Array as PropType<Array<undefined | number>>,
    required: true,
  },
  onSummarySearchChange: {
    type: Function as PropType<
      (summary: undefined | number, index: number) => void
    >,
    required: true,
  },
  ordering: {
    type: String as PropType<'ASC' | 'DESC'>,
    required: false,
  },
});

const updateNameSearch = (e: Event) => {
  // @ts-ignore
  props.onNameSearchChange(e.target.value ?? '');
};

const updateSummarySearch = (e: Event, index: number) => {
  // @ts-ignore
  const { value } = e.target;

  const numberValue = Number(value);

  if (value.length > 0 && !isNaN(numberValue)) {
    props.onSummarySearchChange(numberValue, index);
  } else {
    props.onSummarySearchChange(undefined, index);
  }
};
</script>

<template>
  <div class="AnalyticsTableContainer">
    <table class="AnalyticsTable">
      <thead class="HeaderRow">
        <th class="Header DataHeader">Data</th>
        <th
          class="Header SummaryHeader"
          v-for="(_, index) in Array.from({ length: summariesPerRecord })"
        >
          Summary{{ index + 1 }}
        </th>
      </thead>
      <tbody>
        <tr class="Row DataRow" v-for="row in rows">
          <td class="Cell DataCell">{{ row.dataName }}</td>
          <td
            class="Cell SummaryCell"
            v-for="(_, index) in Array.from({ length: summariesPerRecord })"
          >
            {{ row.summaries[index] }}
          </td>
        </tr>
        <tr class="Row InputsRow">
          <td class="Cell DataSearchCell">
            <input
              type="text"
              placeholder="Search"
              :value="props.nameSearch"
              @input="updateNameSearch"
            />
          </td>
          <td
            class="Cell SummarySearchCell"
            v-for="(_, index) in Array.from({ length: summariesPerRecord })"
          >
            <input
              type="number"
              :value="props.summarySearches[index]"
              @input="(e) => updateSummarySearch(e, index)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@import '@fontsource/quicksand';
@import '@fontsource/roboto';
@import '@/shared/styles';

.AnalyticsTableContainer {
  .AnalyticsTable {
    width: 100%;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    table-layout: fixed;

    .DataHeader,
    .DataCell {
      text-align: left;
      width: 25%;
    }
    .SummaryHeader,
    .SummaryCell {
      text-align: right;
      width: 15%;
    }

    .DataRow .Cell {
      border-bottom: 1px solid #e3e5e5;
    }

    .Cell {
      font-family: 'Roboto', sans-serif;
      height: 64px;
      padding: 16px 0;
      font-size: 20px;
    }
    .SummaryCell {
      color: #5e6366;
    }

    .Header {
      border-bottom: 2px solid #e3e5e5;
      color: #919699;
      padding: 8px 0;
    }

    .InputsRow {
      .Cell input {
        position: relative;
        background: transparent;
        border: 1px solid #c6cacc;
        height: 32px;
        border-radius: $border-radius-default;
        max-width: 100%;
        padding: 10px;

        &::placeholder {
          color: black;
          line-height: 32px;
          left: 6px;
        }
      }
      .SummarySearchCell {
        padding-left: 16px;
      }
    }
  }
}
</style>
