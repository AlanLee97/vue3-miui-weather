<template>
  <div class="weather-bg scale-bg" id="weather-bg" :style="computedStyle">
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

    const { appScrollTop, currentCityIndex } = storeToRefs(store);
    watch(() => currentCityIndex.value, (newVal) => {
      let el = document.getElementById('weather-bg');
      let className = el?.className || '';
      let hasScaleClass = className.includes('scale-bg') || className.includes('scaleBgReverse');
      if (hasScaleClass) {
        className = className.replace('scale-bg', '').trim();
        className = className.replace('scaleBgReverse', '').trim();
        el?.setAttribute('class', className);
      }

      let newClassName = 'scale-bg';
      if (newVal % 2 === 0) {
        newClassName = 'scaleBgReverse';
      }
      setTimeout(() => {
        el?.setAttribute('class', className + ' ' + newClassName);
      }, 10);
    });

    watch(
      () => appScrollTop.value,
      (newVal) => {
        let computedOpacity = 1 - newVal * 0.004;
        let computedBgScale = 1 + newVal * 0.002;
        computedStyle.opacity = computedOpacity;
        computedStyle.transform = `scale(${computedBgScale < 1.3 ? computedBgScale : 1.3
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
  // animation: scaleBg 1s 1;

  .cloud {
    animation: cloudMove 100s infinite;
    opacity: 0.8;
  }

}

.scale-bg {
  animation: scaleBg 1s 1;
}

.scaleBgReverse {
  animation: scaleBgReverse 1s 1;
}

@keyframes cloudMove {
  0% {
    transform: translate(-60%, 40px);
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

@keyframes scaleBg {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes scaleBgReverse {
  0% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
