<script setup lang="ts">
import { getAnalytics } from '@/entities/analytics/lib';

import SideMenu from './ui/SideMenu.vue';
import DashboardContent from './ui/DashboardContent/DashboardContent.vue';
import { useAnalyticsStore } from './model/store';

const store = useAnalyticsStore();

// Populating with data
getAnalytics().then((data) => {
  console.log(data);
  store.setRecords(data);
});
</script>

<template>
  <div class="AnalyticsDashboard">
    <SideMenu />
    <DashboardContent />
  </div>
</template>

<style scoped lang="scss">
.AnalyticsDashboard {
  background: #e2f0f0;
  height: 100%;
  display: flex;
}
</style>
