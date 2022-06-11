<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import {
  HeaderBar,
  DisplayTemperature,
  TemperatureTextBox,
  RecentWeatherInfo,
  RecentWeatherBtn,
  HoursWeatherInfo,
  SummaryWeatherInfo,
  VideoForecast,
  TipBox,
  CopyrightFooter,
  WeatherBg,
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
</script>

<template>
  <div class="weather-app" id="weather-app" @scroll="appScroll">
    <WeatherBg />
    <HeaderBar />
    <TemperatureTextBox />
    <RecentWeatherInfo />
    <RecentWeatherBtn />
    <HoursWeatherInfo />
    <SummaryWeatherInfo />
    <VideoForecast />
    <TipBox />
    <CopyrightFooter />
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
