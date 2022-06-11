<script lang="ts" setup>
import { toRefs } from 'vue';
import { SummaryData } from '../summary-weather-info/summary-weather-info.vue';

const props = defineProps<{
  data: SummaryData
}>();

const {data, desc} = toRefs(props.data);
</script>

<template>
  <flex-box class="summary-weather-info-item" direction-column item-align-start>
    <div class="data">{{data}}</div>
    <div class="desc">{{desc}}</div>
  </flex-box>
</template>

<style lang="scss" scoped>
.summary-weather-info-item {
  line-height: 1.5;
  .data {
    font-size: 18px;
    font-weight: 600;
  }

  .desc {
    font-size: 14px;
    color: rgba($color: #fff, $alpha: .5);
  }
}
</style>
