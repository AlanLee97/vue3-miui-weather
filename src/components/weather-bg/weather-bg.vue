<template>
  <div class="weather-bg" :style="computedStyle">
    <img class="cloud" src="./yun2.webp" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  computed,
  reactive,
  ref,
  watch,
} from 'vue';

export default defineComponent({
  name: 'WeatherBg',
  props: {
    appScrollTop: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    console.log('weatherBg props', props);

    let computedStyle = reactive({
      opacity: 0.8, // 背景透明度
      transform: `scale(1)`, // 背景缩放
    });

    watch(
      () => props.appScrollTop,
      (newVal) => {
        let computedOpacity = 1 - newVal * 0.002;
        let computedBgScale = 1 + newVal * 0.002;
        computedStyle.opacity = computedOpacity;
        computedStyle.transform = `scale(${
          computedBgScale < 1.3 ? computedBgScale : 1.3
        })`;
      }
    );

    return {
      computedStyle,
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
