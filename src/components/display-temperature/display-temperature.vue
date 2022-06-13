<script lang="ts" setup>
import { computed } from "vue";
import { useWeatherAppStore } from "../../store";

const store = useWeatherAppStore();

// 旋转角度
let rotateDeg = computed(() => {
  let threshold = 30;
  let res = store.$state.rotateDeg;
  if ((res < 0 && res > -threshold) || (res > 0 && res < threshold)) {
    res = 0;
  }
  return res;
});
</script>

<template>
  <flex-box class="display-temperature" center-h item-align-start>
    <span class="temperature-num" :style="{ transform: `rotateY(${rotateDeg}deg)` }">
      {{ store.$state.currentWeatherInfo.temperature }}
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
    width: fit-content;
    height: fit-content;
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
