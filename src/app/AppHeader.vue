<template>
  <div class="AppHeader">
    <div class="Header">
      <div class="Brand">
        <div class="Logo">D</div>
        <span class="Title">Dashboard</span>
      </div>
      <div class="Interactions">
        <div class="Help">
          <input type="text" disabled placeholder="Help" />
          <span class="material-icons-round">help</span>
        </div>
        <div class="Upgrade">
          <button>Upgrade</button>
        </div>
        <div class="ProfilePic">
          <img
            src="https://via.placeholder.com/40/40/FAFAFA/?text="
            width="40"
          />
        </div>
      </div>
    </div>
    <div class="Tabs">
      <div class="Tab active">Analyze</div>
      <div class="Tab disabled">My campaigns</div>
      <div class="Tab disabled">Configure</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@fontsource/racing-sans-one';
@import '@/shared/styles';

$header-h: 64px;
$header-p: 12px;
$img-h: 40px;

.AppHeader {
  .Header {
    height: $header-h;
    padding: $header-p;
    display: flex;
    align-items: inherit;
    justify-content: space-between;

    .Brand {
      display: flex;
      column-gap: $header-p;
      font-family: 'Racing Sans One', sans-serif;
      font-size: 24px;
      line-height: 14px * 2;

      .Logo {
        color: $c-primary;
        box-shadow: $shadow-default;
        text-align: center;
        vertical-align: middle;
        align-self: center;
        width: $img-h;
        height: $img-h;
        line-height: $img-h;
        border-radius: $border-radius-default;
      }
      .Title {
        color: $c-default;
        line-height: $img-h;
      }
    }
    .Interactions {
      display: flex;
      column-gap: $header-p;

      .Help {
        position: relative;

        input {
          border: none;
          font-size: 16px;
          height: 100%;
          height: 40px;
          padding: $p-default;
          border-radius: $border-radius-default;
          &::placeholder {
            color: #5E6366;
          }
        }

        span {
          position: absolute;
          color: #C6CACC;
          font-size: 26px;
          top: 7px;
          right: 4px;
          right: $header-p;
        }
      }
      .Upgrade button {
        background: transparent;
        border: none;
        height: 100%;
        color: $c-primary;
        padding: $p-default calc($p-default * 1.5);
        box-shadow: $shadow-primary;
        border-radius: $border-radius-default;
        letter-spacing: 0.75px;
        text-transform: uppercase;
        font-weight: 500;
      }
      .ProfilePic img {
        border-radius: 50%;
        width: $img-h;
      }
    }
  }
  .Tabs {
    display: flex;
    $dash: 1px dashed #cecece;

    &::before {
      width: $w-side-menu;
      content: ' ';
      border-bottom: $dash;
    }
    &::after {
      flex: 1;
      content: ' ';
      border-bottom: $dash;
    }

    .Tab {
      border-bottom: $dash;
      cursor: pointer;

      padding: calc($p-default * 2);
      &.active {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border: 1px solid #cecece;
        border-bottom: none;
      }
      &.disabled {
        cursor: not-allowed;
      }
    }
  }
}
</style>
