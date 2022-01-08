<script lang="ts" setup>
import { SunData } from "../summary-weather-info/summary-weather-info.vue";

const props = defineProps<{
  data: SunData;
}>();

const {icon, desc, time} = props.data;
</script>

<template>
  <flex-box class="sun-info" center-v>
    <img v-if="desc === '日出'" src="../../assets/sun-arise.png" alt="" class="icon">
    <img v-else src="../../assets/sun-fall.png" alt="" class="icon">
    <div class="desc">{{desc}}</div>
    <div class="time">{{time}}</div>
  </flex-box>
</template>

<style lang="scss" scoped>
.sun-info {
  font-size: 12px;
  .icon {
    width: 14px;
    height: 14px;
  }
  .desc {
    margin: 0 6px;
  }

  .time {
    margin-right: 6px;
  }
}
</style>
