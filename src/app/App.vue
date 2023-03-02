<script setup lang="ts">
import AnalyticsDashboard from '@/features/analytics/AnalyticsDashboard.vue';
import AppHeader from './AppHeader.vue';
import AppLayout from './AppLayout.vue';
</script>

<template>
  <AppLayout>
    <template #header>
      <AppHeader />
    </template>
    <template #main>
      <AnalyticsDashboard />
    </template>
  </AppLayout>
</template>
