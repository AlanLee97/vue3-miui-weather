<script lang="ts" setup>
import { toRefs } from "vue";
import { SunData } from "../summary-weather-info/summary-weather-info.vue";

const props = defineProps<{
  data: SunData;
}>();

const {icon, desc, time} = toRefs(props.data);
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
  font-size: 16px;
  .icon {
    width: 14px;
    height: 14px;
  }
  .desc {
    margin: 0 6px;
    transform: scale(0.6875);
  }

  .time {
    margin-right: 6px;
    transform: scale(0.6875);
  }
}
</style>
