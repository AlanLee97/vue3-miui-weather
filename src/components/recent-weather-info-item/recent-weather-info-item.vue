<script lang="ts" setup>
import { RecenterWeatherData } from '../recent-weather-info/recent-weather-info.vue';

defineProps<{
  data: RecenterWeatherData
}>();
</script>

<template>
  <div class="recent-weather-info-item">
    <flex-box space-between center-h-v>
      <flex-box class="left" center-h-v>
        <img class="icon" src="../../assets/icon_cloudy.webp" alt="" v-if="data.maxTemperature || data.minTemperature">
        <flex-box v-else class="icon-wrapper" center-h-v>
          <img class="icon" src="../../assets/realtime_aqi_leaf.webp" alt="">
        </flex-box>
        <template v-if="data.airStatus">
          <span class="desc-text">{{data.airStatus + ' '}}</span>
          <span>{{data.airQuality}}</span>
        </template>
        <template v-else>
          <div class="desc-text">{{data.time}} · {{data.weatherStatus}}</div>
          <flex-box class="quality" center-h-v><div class="quality-text">{{data.quality}}</div></flex-box>
        </template>
      </flex-box>
      <flex-box class="right" center-h-v v-if="data.maxTemperature || data.minTemperature">
        {{data.maxTemperature}}° / {{data.minTemperature}}°
      </flex-box>
      <flex-box v-else class="rain-rate" center-v>
        <flex-box class="icon-wrapper" center-h-v><img src="../../assets/rain-drop.png" alt="" class="icon"></flex-box>
        <span class="rain-rate-text">{{data.rainRate}}</span>
      </flex-box>
    </flex-box>
  </div>
</template>

<style lang="scss" scoped>
.recent-weather-info-item {
  padding: 0 20px;
  line-height: 3.2;
  .left {
    .icon {
      width: 24px;
      height: 24px;
    }

    .desc-text {
      margin: 0 10px;
    }

    .quality {
      border-radius: 16px;
      background-color: rgba($color: #fff, $alpha: .3);
      height: 18px;
      padding: 0 10px;
      .quality-text {
        font-size: 16px;
        transform: scale(0.5);
      }
    }
  }

  .right {

  }

  .icon-wrapper {
    background: rgba($color: #fff, $alpha: .3);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    .icon {
      width: 12px;
      height: 12px;
    }
  }

  .rain-rate {
    font-size: 14px;
    .icon {
      width: 12px;
      height: 12px;
    }
    .rain-rate-text {
      margin-left: 10px;
    }
  }
}
</style>
