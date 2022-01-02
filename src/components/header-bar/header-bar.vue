<script lang="ts" setup>

</script>

<template>
  <div class="header-bar">
    <flex-box space-between center-v>
      <flex-box class="left" center-h-v>
        <img class="icon" src="../../assets/add.png" />
      </flex-box>
      <flex-box class="center" center-h-v>
        <div class="title">宝安区</div>
      </flex-box>
      <flex-box class="right" center-h-v>
        <img class="icon" src="../../assets/more.png" />
      </flex-box>
    </flex-box>

    <div class="center">
      <img src="../../assets/navigate.png" class="navigate-icon">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-bar {
  padding: 20px;
  padding-top: 40px;

  .icon {
    width: 28px;
    height: 28px;
  }

  .left {

  }

  .center {
    line-height: 1;
    .title {
      font-size: 20px;
      font-weight: bold;
    }

    .navigate-icon {
      width: 10px;
      height: 10px;
    }
  }


}
</style>
