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
  border-radius: 20px;
  margin: 20px;
  margin-bottom: 10px;

  .poster {
    width: 100%;
    height: 100%;
  }
}
</style>
