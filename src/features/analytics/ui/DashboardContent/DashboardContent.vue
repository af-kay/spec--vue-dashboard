<script setup lang="ts">
import DashboardTable from './DashboardTable.vue';
</script>

<template>
  <div class="DashboardContent">
    <div class="TitleRow">
      <h4>Dashboard</h4>
      <div class="Interactions">
        <div class="DateRange">
          <input type="text" disabled placeholder="DD/MM/YYYY" />
        </div>
        <button>print</button>
        <button>download</button>
      </div>
    </div>
    <div class="TableRow">
      <DashboardTable />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@fontsource/quicksand';
@import '@/shared/styles';

* {
  font-family: 'Quicksand', sans-serif;
}

.DashboardContent {
  flex: 1;
  padding: 12px;

  .TitleRow {
    display: flex;
    justify-content: space-between;

    .Interactions {
      display: flex;
      column-gap: 4px;
    }
  }
  .TableRow {
    display: block;
  }
}
</style>
