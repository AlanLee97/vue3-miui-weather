<script lang="ts" setup>
import { toRefs } from 'vue-demi';
import { useWeatherAppStore } from '../../store';
const store = useWeatherAppStore();

interface CityData {
  city: string;
  distrist: string;
}

const props = defineProps<{
  city: CityData
}>();

const { city } = toRefs(props);

</script>

<template>
  <div class="header-bar">
    <div class="header-bar-bg" :style="{ opacity: 1 - store.$state.opacity - 0.3 }"></div>
    <div>
      <div style="height: 40px"></div>
      <flex-box space-between center-v>
        <flex-box class="left" center-h-v>
          <img class="icon" src="../../assets/add.png" />
        </flex-box>
        <flex-box class="center" center-h-v>
          <div class="title">{{ city.distrist }}</div>
        </flex-box>
        <flex-box class="right" center-h-v>
          <img class="icon" src="../../assets/more.png" />
        </flex-box>
      </flex-box>

      <flex-box class="center" center-h-v>
        <img src="../../assets/navigate.png" class="navigate-icon" />
        <div v-for="item in store.$state.cityList" :key="item.city"
          :class="['dot', `${item.city === city.city ? 'active-dot' : ''}`]"></div>
      </flex-box>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-bar {
  padding: 20px;
  padding-bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  height: fit-content;

  .header-bar-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 104px;
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
    background-size: 100% 100vh;
    z-index: -1;
  }

  .icon {
    width: 28px;
    height: 28px;
  }

  .left {
    opacity: 1;
  }

  .center {
    line-height: 1;
    opacity: 1;

    .title {
      font-size: 20px;
      font-weight: bold;
      opacity: 1 !important;
    }

    .navigate-icon {
      opacity: 1;

      width: 14px;
      height: 14px;
      margin-right: 6px;

    }
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
    display: inline-block;
    margin-right: 6px;
    opacity: 0.5;
  }

  .active-dot {
    opacity: 1;
  }
}
</style>
