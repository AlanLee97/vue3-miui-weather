<script lang="ts" setup>
</script>

<template>
  <flex-box class="forecast" center-h-v>
    <!-- 天气预报 -->
    <img src="../../assets/forecast_poster.webp" class="poster" />
  </flex-box>
</template>

<style lang="scss" scoped>
.forecast {
  height: 160px;
  border-radius: 20px;
  margin: 20px;
  background-color: rgba($color: #fff, $alpha: .3);
  position: relative;

  .poster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
