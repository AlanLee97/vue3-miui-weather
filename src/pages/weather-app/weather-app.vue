<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import {
  HeaderBar,
  CityFragment,
  TemperatureTextBox
} from '../../components';
import CityManage from '../city-manage/city-manage.vue';

import { useWeatherAppStore } from '../../store';
import type { SwipeInstance } from 'vant';

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
const swiperRef = ref<SwipeInstance>();
let shouldChangeSwipe = true;

let startScreenX = 0;
const onTouchStart = (e: any) => {
  console.log('onTouchStart', e.changedTouches[0]);
  startScreenX = e.changedTouches[0].screenX;
  shouldChangeSwipe = true;

};
let moveDistance = 0;
const onTouchMove = (e: any) => {
  moveDistance = e.changedTouches[0].screenX - startScreenX;
  // console.log('onTouchMove moveDistance', moveDistance);
  store.$patch({
    rotateDeg: moveDistance < 45 ? (moveDistance > -45 ? moveDistance : -45) : 45,
  });

};
const onTouchEnd = (e: any) => {
  console.log('onTouchEnd', e.changedTouches[0]);
  store.$patch({
    rotateDeg: 0,
  });
  let threshold = 60;
  if (moveDistance < -threshold) {
    currentCityIndex.value = currentCityIndex.value + 1;
    if (currentCityIndex.value >= store.$state.cityList.length - 1) {
      currentCityIndex.value = store.$state.cityList.length - 1;
    }
  }
  if (moveDistance > threshold) {
    currentCityIndex.value = currentCityIndex.value - 1;
    if (currentCityIndex.value <= 0) {
      currentCityIndex.value = 0;
    }
  }
  store.$patch({
    currentCityIndex: currentCityIndex.value
  });
  store.updateCurrentWeatherInfo();
  if (shouldChangeSwipe) {
    (swiperRef.value as SwipeInstance).swipeTo(currentCityIndex.value);
    shouldChangeSwipe = true;
  }
};

const onSwiperChange = (index: any) => {
  shouldChangeSwipe = false;
  console.log('onSwiperChange', index);
  store.$patch({
    currentCityIndex: index
  });
};

const onAddCity = (val: any) => {
  console.log('城市管理');
  showCityManagePage.value = true;
};

const hideCityManagePage = () => {
  showCityManagePage.value = false;
};

const showCityManagePage = ref(false);

</script>

<template>
  <div >
    <CityManage v-if="showCityManagePage" @close="hideCityManagePage" />
    <div v-else class="weather-app" id="weather-app" @scroll="appScroll" @touchstart="onTouchStart" @touchmove="onTouchMove"
    @touchend="onTouchEnd">
      <HeaderBar :city="store.$state.cityList[store.$state.currentCityIndex]" @addCity="onAddCity" />
      
      <WeatherBg />

      <TemperatureTextBox />
      <van-swipe ref="swiperRef" class="my-swipe" @change="onSwiperChange" :stop-propagation="false" :loop="false">
        <van-swipe-item>
          <CityFragment />
        </van-swipe-item>
        <van-swipe-item>
          <CityFragment />
        </van-swipe-item>
        <van-swipe-item>
          <CityFragment />
        </van-swipe-item>
        <van-swipe-item>
          <CityFragment />
        </van-swipe-item>
      </van-swipe>
    </div>


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

.my-swipe {
  width: 100vw;
}
</style>
