<script lang="ts" setup>
import { reactive } from "vue";
import { HoursWeatherInfoItem } from "..";

export interface HoursWeatherData {
  time: string;
  temperature: string;
  icon: string;
  windyPower: string;
  airQuality: string;
}

let list = reactive<Array<HoursWeatherData>>([]);

for (let i = 0; i < 24; i++) {
  list.push({
    time: `${i < 10 ? "0" + i : i}:00`,
    temperature: "21°",
    icon: "",
    windyPower: "2级",
    airQuality: "良",
  });
}

const onTouchMove = (e: any) => {
  e.stopPropagation();
};
</script>

<template>
  <div @touchmove="onTouchMove">
    <flex-box class="hours-weather-info">
      <HoursWeatherInfoItem v-for="item in list" :key="item.time" :data="item" />
    </flex-box>
  </div>
</template>

<style lang="scss" scoped>
.hours-weather-info {
  margin: 40px 0 30px 30px;
  overflow: scroll;
  scrollbar-width: 0;

  .hours-weather-info-item:first-child {
    margin-left: -10px;
  }

  .hours-weather-info-item:last-child {
    margin-right: 20px;
  }
}
</style>
