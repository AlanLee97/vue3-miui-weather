<script lang="ts" setup>
import { useWeatherAppStore } from "../../store";

const store = useWeatherAppStore();
</script>

<template>
  <flex-box class="display-temperature" center-h item-align-start>
    <span class="temperature-num" :style="{ transform: `rotateY(${store.$state.rotateDeg}deg)` }">
      17
      <span class="temperature-unit">℃</span>
    </span>
  </flex-box>
</template>

<style lang="scss" scoped>
.display-temperature {
  line-height: 1;
  padding: 0;

  .temperature-num {
    font-size: 130px;
    font-family: Helvetica;
    position: relative;
    transition: transform 200ms;
  }

  .temperature-unit {
    font-size: 24px;
    margin-top: 16px;
    margin-left: 10px;
    font-weight: 600;
    font-family: Helvetica;
    position: absolute;
  }

}
</style>
