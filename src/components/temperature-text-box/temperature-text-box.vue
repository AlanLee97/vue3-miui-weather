<script lang="ts" setup>
  import { DisplayTemperature } from '..';
</script>

<template>
  <div class="temperature-text-box">
    <DisplayTemperature />
    <flex-box center-h-v>
      <span>晴</span>
      <flex-box class="icon-wrapper" center-h-v>
        <img class="icon" src="../../assets/edit.png" alt="">
      </flex-box>
    </flex-box>
  </div>
</template>

<style lang="scss" scoped>
.temperature-text-box {
  padding: 100px 0;
  font-size: 22px;
  height: 52vh;

  .icon-wrapper {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgba($color: #fff, $alpha: .3);
    margin-left: 8px;

    .icon {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
