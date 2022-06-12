<script lang="ts" setup>
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
</script>

<template>
  <div class="city-fragment">

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
</style>
