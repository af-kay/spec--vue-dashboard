<script setup lang="ts">
import { useAnalyticsStore } from '../model/store';

const store = useAnalyticsStore();
</script>

<template>
  <div class="SideMenu">
    <div class="CreateNew">Create new</div>
    <div class="Filters">
      <div
        :class="`Filter ${store.filters.rowParity === 'EVEN' ? 'active' : ''}`"
        @click="() => store.updateRowParityFilter('EVEN')"
      >
        <!-- Icon -->
        <div class="Info">
          <div class="Title">Even rows of data</div>
          <div class="Desc">Display rows 2,4,6 etc</div>
        </div>
      </div>
      <div
        :class="`Filter ${store.filters.rowParity === 'ODD' ? 'active' : ''}`"
        @click="() => store.updateRowParityFilter('ODD')"
      >
        <!-- Icon -->
        <div class="Info">
          <div class="Title">Even odd of data</div>
          <div class="Desc">Display rows 1,3,5 etc</div>
        </div>
      </div>
      <div
        :class="`Filter ${!store.filters.rowParity ? 'active' : ''}`"
        @click="() => store.updateRowParityFilter(undefined)"
      >
        <!-- Icon -->
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
    background: #fff;
    padding: 16px;
    text-align: center;
    color: $c-primary;
    box-shadow: $shadow-primary;
    border-radius: 99px;
    font-size: 16px;
    font-weight: 500;
  }
  .Filters {
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    .Filter {
      cursor: pointer;

      &.active {
        background: #e6efff;
        .Icon {
          color: $c-primary;
        }
      }

      .Icon {
      }

      .Info {
        .Title {
          font-size: 0.9rem;
        }
        .Desc {
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>
