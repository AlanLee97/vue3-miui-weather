<script lang="ts" setup>
  import { reactive } from 'vue';
  import { RecentWeatherInfoItem } from '..';


  export interface RecenterWeatherData {
      icon?: string,
      time?: string,
      weatherStatus?: string,
      quality?: string,
      maxTemperature?: string,
      minTemperature?: string,
      rainRate?: string,
      airStatus?: string,
      airQuality?: string,
  }

  const summaryData = {
    icon: '',
    time: "",
    weatherStatus: "",
    quality: "",
    maxTemperature: "",
    minTemperature: "",
    rainRate: "2小时降水概率",
    airStatus: "空气良",
    airQuality: "79",
  }

  const list = reactive<Array<RecenterWeatherData>>([
    {
      icon: '',
      time: "今天",
      weatherStatus: "晴转多云",
      quality: "良",
      maxTemperature: "21",
      minTemperature: "14",
    },
    {
      icon: '',
      time: "今天",
      weatherStatus: "晴转多云",
      quality: "良",
      maxTemperature: "21",
      minTemperature: "14",
    },
    {
      icon: '',
      time: "今天",
      weatherStatus: "晴转多云",
      quality: "良",
      maxTemperature: "21",
      minTemperature: "14",
    },
  ])
</script>

<template>
  <div class="recent-weather-info">
    <recent-weather-info-item :data="summaryData" />
    <recent-weather-info-item v-for="item in list" :key="'rwii_' + item" :data="item" />
  </div>
</template>

<style lang="scss" scoped>
.recent-weather-info {

}
</style>
