<script lang="ts" setup>
import { toRefs } from "vue";
import { HoursWeatherData } from "../hours-weather-info/hours-weather-info.vue";

const props = defineProps<{
  data: HoursWeatherData;
}>();
const { time, temperature, icon, windyPower, airQuality } = toRefs(props.data);
</script>

<template>
  <div class="hours-weather-info-item">
    <flex-box direction-column class="item" center-h-v>
      <div class="time">{{ time }}</div>
      <div class="temperature">{{ temperature }}</div>
      <img src="../../assets/icon_cloudy.webp" alt="" class="icon" />
      <flex-box class="windy-power" center-v>
        <img
          src="../../assets/wind_northeast.webp"
          alt=""
          class="icon-wind-power"
        />
        {{ windyPower }}
      </flex-box>
      <div class="air-quality">
        <span class="text">{{ airQuality }}</span>
      </div>
    </flex-box>
  </div>
</template>

<style lang="scss" scoped>
.hours-weather-info-item {
  .item {
    width: 60px;
    line-height: 3;
    overflow: hidden;
    padding: 20px 0;
    .time {
      font-size: 13px;
      color: rgba($color: #fff, $alpha: 0.6);
      line-height: 1.5;
    }
    .temperature {
      font-size: 17px;
    }
    .windy-power {
      font-size: 12px;
      .icon-wind-power {
        width: 12px;
        height: 12px;
        margin-right: 4px;
      }
    }
    .air-quality {
      background-color: rgba($color: #fff, $alpha: 0.3);
      padding: 0 10px;
      height: 20px;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        transform: scale(0.6);
      }
    }
  }
  .icon {
    width: 20px;
    height: 20px;
  }
}
</style>
