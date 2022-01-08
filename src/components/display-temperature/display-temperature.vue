<script lang="ts" setup>

</script>

<template>
  <flex-box class="display-temperature" center-h item-align-start>
    <span class="temperature-num">
      17
      <span class="temperature-unit">℃</span>
    </span>
  </flex-box>
</template>

<style lang="scss" scoped>
.display-temperature {
  line-height: 1;
  padding: 0;
  .temperature-num {
    font-size: 130px;
    font-family: Helvetica;
    position: relative;
  }

  .temperature-unit {
    font-size: 24px;
    margin-top: 13px;
    margin-left: 10px;
    font-family: Helvetica;
    position: absolute;
  }

}
</style>
