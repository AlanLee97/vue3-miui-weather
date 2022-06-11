<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import {
  HeaderBar,
  CityFragment
} from '../../components';
import { useWeatherAppStore } from '../../store';

const store = useWeatherAppStore();

let appScrollTop = ref(0);

const appScroll = (e: any) => {
  console.log(e.target?.scrollTop);
  appScrollTop.value = e.target?.scrollTop;
  store.$patch({
    appScrollTop: e.target?.scrollTop,
  });
};

let currentCityIndex = ref(0);

let startScreenX = 0;
const onTouchStart = (e: any) => {
  console.log('onTouchStart', e.changedTouches[0]);
  startScreenX = e.changedTouches[0].screenX;
};
let moveDistance = 0;
const onTouchMove = (e: any) => {
  moveDistance = e.changedTouches[0].screenX - startScreenX;
  console.log('onTouchMove moveDistance', moveDistance);
  store.$patch({
    rotateDeg: moveDistance < 45 ? (moveDistance > -45 ? moveDistance : -45) : 45,
  });

};
const onTouchEnd = (e: any) => {
  console.log('onTouchEnd', e.changedTouches[0]);
  store.$patch({
    rotateDeg: 0,
  });
  if (moveDistance < -150) {
    currentCityIndex.value = currentCityIndex.value + 1;
    if (currentCityIndex.value >= store.$state.cityList.length) {
      currentCityIndex.value = store.$state.cityList.length;
    }
  }
  if (moveDistance > 150) {
    currentCityIndex.value = currentCityIndex.value - 1;
    if (currentCityIndex.value <= 0) {
      currentCityIndex.value = 0;
    }
  }
};

</script>

<template>
  <div class="weather-app" id="weather-app" @scroll="appScroll" @touchstart="onTouchStart" @touchmove="onTouchMove"
    @touchend="onTouchEnd">
    <HeaderBar :city="store.$state.cityList[currentCityIndex]" />

    <CityFragment />
  </div>
</template>

<style lang="scss" scoped>
.weather-app {
  width: 100vw;
  height: 100vh;
  line-height: 2;
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
}
</style>
