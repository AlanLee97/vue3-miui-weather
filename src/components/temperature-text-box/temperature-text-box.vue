<script lang="ts" setup>
import { DisplayTemperature } from '..';
import { useWeatherAppStore } from '../../store';
const store = useWeatherAppStore();
</script>

<template>
  <div :style="{ opacity: store.$state.opacity }">
    <flex-box class="temperature-text-box" center-h-v direction-column>
      <DisplayTemperature />
      <flex-box center-h-v>
        <span>晴</span>
        <flex-box class="icon-wrapper" center-h-v>
          <img class="icon" src="../../assets/edit.png" alt="" />
        </flex-box>
      </flex-box>
    </flex-box>
  </div>
</template>

<style lang="scss" scoped>
.temperature-text-box {
  padding: 100px 0;
  font-size: 22px;
  height: 65vh;
  padding-top: 200px;

  .icon-wrapper {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgba($color: #fff, $alpha: 0.3);
    margin-left: 8px;

    .icon {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
