<script lang="ts" setup>
import { reactive } from 'vue';
import { HoursWeatherInfoItem } from '..';

export interface HoursWeatherData {
  time: string;
  temperature: string;
  icon: string;
  windyPower: string;
  airQuality: string
}

let list = reactive<Array<HoursWeatherData>>([]);

for(let i = 0; i < 24; i++) {
  list.push({
    time: `${i < 10 ? '0' + i : i}:00`,
    temperature: "21°",
    icon: "",
    windyPower: "2级",
    airQuality: "良"
  })
}
</script>

<template>
  <flex-box class="hours-weather-info">
    <HoursWeatherInfoItem v-for="item in list" :key="item.time" :data="item" />
  </flex-box>
</template>

<style lang="scss" scoped>
.hours-weather-info {
  margin: 40px 20px;
  overflow: scroll;
  scrollbar-width: 0;

  .hours-weather-info-item:first-child {
    margin-left: -10px;
  }
}
</style>
