<script lang="ts" setup>
import { 
  HeaderBar, 
  DisplayTemperature,
  TemperatureTextBox,
  RecentWeatherInfo,
} 
from '..';
</script>

<template>
    <div class="weather-app">
      <HeaderBar />
      <TemperatureTextBox />
      <RecentWeatherInfo />
      <flex-box class="btn" center-h-v>查看近15日天气</flex-box>
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
}
.btn {
  background-color: rgba($color: #fff, $alpha: .3);
  padding-top: 6px;
  padding-bottom: 6px;
  margin: 0 20px;
  margin-top: 20px;
  width: calc(100% - 40px);
  height: 44px;
  border-radius: 38px;
}
</style>
