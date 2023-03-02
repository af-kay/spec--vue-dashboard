<script setup lang="ts">
import SideMenu from './ui/SideMenu.vue';
import DashboardContent from './ui/DashboardContent.vue';
</script>

<template>
  <div class="AnalyticsDashboard">
    <SideMenu />
    <DashboardContent />
  </div>
</template>

<style scoped lang="scss">
.AnalyticsDashboard {
  border: 1px dashed pink;
  background: #e2f0f0;
  height: 100%;
  display: flex;
}
</style>
