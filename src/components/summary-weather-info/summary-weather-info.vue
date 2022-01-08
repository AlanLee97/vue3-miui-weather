<script lang="ts" setup>
import { reactive } from 'vue';
import { SummaryWeatherInfoItem, SunInfo } from '..';

export interface SunData {
  icon: string;
  desc: string;
  time: string;
}

export interface SummaryData {
  data: string;
  desc: string;
}

const sunData = reactive<SunData[]>([
  {
    icon: 'src/assets/icon_cloudy.webp',
    desc: '日出',
    time: '07:04'
  },
  {
    icon: 'src/assets/icon_cloudy.webp',
    desc: '日落',
    time: '17:51'
  }
]);

const summaryData = reactive<SummaryData[]>([
  {
    data: '1级',
    desc: '北风'
  },
  {
    data: '51%',
    desc: '湿度'
  },
  {
    data: '21°',
    desc: '体感'
  },
  {
    data: '1012hPa',
    desc: '气压'
  },
]);
</script>

<template>
  <div class="summary-weather-info">
    <flex-box class="sun-info-wrapper">
      <SunInfo v-for="item in sunData" :data="item" :key="item.desc" />
    </flex-box>
    <flex-box space-between>
      <SummaryWeatherInfoItem v-for="item in summaryData" :data="item" :key="item.data" />
    </flex-box>
  </div>
</template>

<style lang="scss" scoped>
.summary-weather-info {
  padding: 20px 30px;

  .sun-info-wrapper div{
    margin-bottom: 12px;
    &:first-child {
      margin-right: 30px;
    }
  }

}
</style>
