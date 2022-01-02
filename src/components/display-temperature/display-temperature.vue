<script lang="ts" setup>

</script>

<template>
  <flex-box class="display-temperature" center-h item-align-start>
    <span class="temperature-num">17</span>
    <span class="temperature-unit">℃</span>
  </flex-box>
</template>

<style lang="scss" scoped>
.display-temperature {
  line-height: 1;
  padding: 0;
  .temperature-num {
    font-size: 120px;
    font-family: Helvetica;
  }

  .temperature-unit {
    font-size: 20px;
    margin-top: 13px;
    font-family: Helvetica;
  }

}
</style>
