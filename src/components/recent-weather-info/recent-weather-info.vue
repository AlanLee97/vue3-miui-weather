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
      maxTemperature: "23",
      minTemperature: "12",
    },
    {
      icon: '',
      time: "明天",
      weatherStatus: "多云",
      quality: "良",
      maxTemperature: "22",
      minTemperature: "14",
    },
    {
      icon: '',
      time: "周一",
      weatherStatus: "晴",
      quality: "良",
      maxTemperature: "23",
      minTemperature: "15",
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
  padding: 0 10px;
}
</style>
