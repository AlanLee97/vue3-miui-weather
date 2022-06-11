<template>
  <div class="weather-bg" :style="computedStyle">
    <img class="cloud" src="./yun2.webp" />
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import {
  defineComponent,
  onMounted,
  computed,
  reactive,
  ref,
  watch,
} from 'vue';
import { useWeatherAppStore } from '../../store';

export default defineComponent({
  name: 'WeatherBg',
  setup(props) {
    const store = useWeatherAppStore();

    let computedStyle = reactive({
      opacity: 0.8, // 背景透明度
      transform: `scale(1)`, // 背景缩放
    });

    const { appScrollTop } = storeToRefs(store);

    watch(
      () => appScrollTop.value,
      (newVal) => {
        let computedOpacity = 1 - newVal * 0.004;
        let computedBgScale = 1 + newVal * 0.002;
        computedStyle.opacity = computedOpacity;
        computedStyle.transform = `scale(${
          computedBgScale < 1.3 ? computedBgScale : 1.3
        })`;

        store.$patch({
          opacity: computedOpacity,
        });
      }
    );

    return {
      computedStyle,
      store,
    };
  },
});
</script>

<style scoped lang="scss">
.weather-bg {
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 600ms; // 动画过渡

  .cloud {
    animation: cloudMove 100s infinite;
    opacity: 0.8;
  }
}

@keyframes cloudMove {
  0% {
    transform: translate(-100%, 40px);
  }
  25% {
    transform: translate(-40%, 0px);
  }
  50% {
    transform: translate(0%, 40px);
  }
  75% {
    transform: translate(-40%, 0px);
  }
  100% {
    transform: translate(-100%, 40px);
  }
}
</style>
