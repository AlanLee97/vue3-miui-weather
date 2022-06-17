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
    <span id="temperature-num" class="temperature-num" :style="{ transform: `rotateY(${rotateDeg}deg)` }">
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
    transition: transform 1000ms;
    width: fit-content;
    height: fit-content;
  }

  .rotate-el {
    animation: rotateEl;
    animation-timing-function: cubic-bezier(0, 1, 0, 1);
    animation-duration: 1500ms;
  }

  .temperature-unit {
    font-size: 24px;
    margin-top: 16px;
    margin-left: 10px;
    font-weight: 600;
    font-family: Helvetica;
    position: absolute;
  }
  // 旋转元素
  @keyframes rotateEl {
    0% {
      transform: rotateY(0deg) scale(0%);
    }
    100% {
      transform: rotateY(360deg) scale(100%);
    }
  }
}
</style>
