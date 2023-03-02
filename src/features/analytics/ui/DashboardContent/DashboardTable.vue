<script setup lang="ts">
import AnalyticsTable from '@/entities/analytics/ui/AnalyticsTable.vue';
import { useAnalyticsStore } from '../../model/store';

const store = useAnalyticsStore();
</script>

<template>
  <AnalyticsTable
    :rows="store.filteredRecords"
    :nameSearch="store.filters.name"
    :onNameSearchChange="store.updateNameFilter"
    :summarySearches="store.filters.summary"
    :onSummarySearchChange="store.updateSummaryFilter"
    :ordering="store.orderingByName"
    :onOrderingToggle="store.toggleOrdering"
  />
</template>

<style lang="scss"></style>
