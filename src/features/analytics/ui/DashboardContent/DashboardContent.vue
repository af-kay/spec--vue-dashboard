<script setup lang="ts">
import DashboardTable from './DashboardTable.vue';
</script>

<template>
  <div class="DashboardContent">
    <div class="TitleRow">
      <h4>Dashboard</h4>
      <div class="Interactions">
        <div class="DateRange">
          <input
            type="text"
            disabled
            placeholder="Aug 21, 2021 · Sep 21 2021"
          />
        </div>
        <button class="IconButton ButtonPrint">
          <span class="material-icons-round">print</span>
        </button>
        <button class="IconButton ButtonDownload">
          <span class="material-icons-round">download</span>
        </button>
      </div>
    </div>
    <div class="TableRow">
      <DashboardTable />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@fontsource/quicksand';
@import '@fontsource/roboto';
@import '@/shared/styles';

*:not(.material-icons-round) {
  font-family: 'Quicksand', sans-serif;
}

.DashboardContent {
  flex: 1;
  padding: 12px;

  .TitleRow {
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;

    h4 {
      font-size: 34px;
    }

    .Interactions {
      display: flex;
      column-gap: 8px;

      .DateRange {
        position: relative;
        input {
          width: 200px;
          background: transparent;
          border: 1px solid #c6cacc;
          height: 32px;
          border-radius: $border-radius-default;
          padding: 6px;

          &::placeholder {
            color: black;
          }
        }
      }
      .IconButton {
        width: 32px;
        height: 32px;
        display: flex;
        background: #f7f9fa;
        border: none;
        border-radius: 4px;
        color: #78909c;
        span {
          font-size: 14px;
          margin: auto;
          width: 100%;
        }
      }
    }
  }
  .TableRow {
    margin-top: 32px;
    display: block;
  }
}
</style>
