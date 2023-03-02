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
  </div>
</template>

<style scoped lang="scss">
@import '@fontsource/quicksand';
@import '@/shared/styles';

* {
  font-family: 'Quicksand', sans-serif;
}

.DashboardContent {
  border: 1px dashed maroon;
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
}
</style>
