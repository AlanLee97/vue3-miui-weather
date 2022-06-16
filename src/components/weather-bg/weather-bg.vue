<template>
  <div :class="`bg-${store.$state.currentWeatherBg} weather-bg`">
    <img id="cloud" class="cloud scale-bg" :style="computedStyle" src="./yun2.webp" />
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
      opacity: store.$state.currentWeatherBg === 'rainy' ? 0.3 : 0.8, // 背景透明度
      transform: `scale(1)`, // 背景缩放
    });

    const { appScrollTop, currentCityIndex } = storeToRefs(store);
    watch(() => currentCityIndex.value, (newVal) => {
      console.log('切换城市，改变背景动画效果');
      
      let el = document.getElementById('cloud');
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
        let rainy = store.$state.currentWeatherBg === 'rainy';
        let computedOpacity = rainy ? 0.3 - newVal * 0.001 : 1 - newVal * 0.004;
        let computedOpacity2 = 1 - newVal * 0.004;
        let computedBgScale = 1 + newVal * 0.002;
        computedStyle.opacity = computedOpacity;
        computedStyle.transform = `scale(${computedBgScale < 1.3 ? computedBgScale : 1.3
          })`;

        store.$patch({
          opacity: computedOpacity,
          opacity2: computedOpacity2,
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
  width: 100vw;
  height: 100vh;
  transition: transform 600ms; // 动画过渡

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

<style lang="scss">
.bg-sunny {
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
}

.bg-cloudy {
  background-image: linear-gradient(to top, #e2ebf0 0%, #cfd9df 100%);
}

.bg-rainy {
  background-image: linear-gradient(to right, #596164 0%, #868f96 100%);
}
</style>
