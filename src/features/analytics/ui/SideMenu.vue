<script setup lang="ts">
import { useAnalyticsStore } from '../model/store';

const store = useAnalyticsStore();
</script>

<template>
  <div class="SideMenu">
    <div class="CreateNew">
      <span class="Icon material-icons-round">add_circle</span>
      <span class="Text">
        <span>Create new</span>
      </span>
    </div>
    <div class="Filters">
      <div
        :class="`Filter ${store.filters.rowParity === 'EVEN' ? 'active' : ''}`"
        @click="() => store.updateRowParityFilter('EVEN')"
      >
        <div class="Icon">
          <span class="material-icons-round">data_usage</span>
        </div>
        <div class="Info">
          <div class="Title">Even rows of data</div>
          <div class="Desc">Display rows 2,4,6 etc</div>
        </div>
      </div>
      <div
        :class="`Filter ${store.filters.rowParity === 'ODD' ? 'active' : ''}`"
        @click="() => store.updateRowParityFilter('ODD')"
      >
        <div class="Icon">
          <span class="material-icons-outlined">done_outline</span>
        </div>
        <div class="Info">
          <div class="Title">Odd rows of data</div>
          <div class="Desc">Display rows 1,3,5 etc</div>
        </div>
      </div>
      <div
        :class="`Filter ${!store.filters.rowParity ? 'active' : ''}`"
        @click="() => store.updateRowParityFilter(undefined)"
      >
        <div class="Icon">
          <span class="material-icons-round">print</span>
        </div>
        <div class="Info">
          <div class="Title">All data</div>
          <div class="Desc">Display all data</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@fontsource/quicksand';
@import '@/shared/styles';

.SideMenu {
  height: 100%;
  width: $w-side-menu;
  display: flex;
  flex-direction: column;
  padding: 32px 64px;
  row-gap: 24px;
  font-family: 'Quicksand', sans-serif;

  .CreateNew {
    cursor: pointer;
    display: flex;
    column-gap: 16px;
    background: #fff;
    padding: 16px;
    text-align: center;
    color: $c-primary;
    box-shadow: $shadow-primary;
    border-radius: 99px;
    font-size: 16px;
    align-items: center;
    font-weight: 500;

    .Icon {
      padding-left: 8px;
      font-size: 20px;
    }

    .Text {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .Filters {
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    .Filter {
      cursor: pointer;
      display: flex;
      padding: 8px;
      column-gap: 16px;

      &.active {
        background: #e6efff;
        border-radius: $border-radius-default;
        .Icon {
          color: $c-primary;
        }
      }

      .Icon {
        color: #78909c;
      }

      .Info {
        .Title {
          font-size: 0.9rem;
        }
        .Desc {
          font-size: 0.7rem;
          color: #5e6366;
        }
      }
    }
  }
}
</style>
