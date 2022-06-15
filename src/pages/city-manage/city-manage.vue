<script lang="ts" setup>
import { defineComponent, defineEmits } from 'vue';
import { useWeatherAppStore } from '../../store';
import { storeToRefs } from 'pinia';
const store = useWeatherAppStore();
const { cityList } = storeToRefs(store);

const emit = defineEmits<{
  (event: 'close'): void;
}>();
const closePage = () => {
  emit('close');
};
const toIndex = (data: any) => {
  console.log('toIndex', data);
  
  store.$patch({
    currentCityIndex: data.index
  });
  store.updateCurrentWeatherInfo();
  console.log(store);
  emit('close');
  
};
</script>

<template>
  <div class="city-manage">
    <flex-box class="nav-bar">
      <img class="back-icon" src="./arrow.svg" @click="closePage" />
    </flex-box>
    <h2 class="title">城市管理</h2>

    <div v-for="(item, index) in cityList" :key="item.city" @click="toIndex({item, index})">
      <flex-box center-v class="city-box-item">
        <img class="cloud" src="../../assets/yun2.webp" />
        <flex-box class="box-content" center-v between>
          <div class="left-box">
            <div class="city-name">{{ item.city }}</div> 
            <div class="">空气优 <span>30° / 26°</span></div> 
          </div>
          <div class="temperature">{{ item.temperature }}°</div>
        </flex-box>
      </flex-box>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.city-manage {
  padding: 20px;
  .nav-bar {
    padding: 20px 0;
    .back-icon {
      width: 22px;
      height: 22px;
      transform: rotate(270deg);
    }
  }

  .title {
    text-align: left;
  }

  .city-box-item {
    color: #fff;
    height: 100px;
    margin: 20px 0px;
    padding: 20px;
    border-radius: 20px;
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
    position: relative;
    overflow: hidden;

    .box-content {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      padding: 20px;
      background-color: rgba($color: #000000, $alpha: 0.08);

      .city-name {
        font-size: 22px;
        text-align: left;
      }

      .temperature {
        font-size: 40px;
      }
    }
  }
  .cloud {
    animation: cloudMove 100s infinite;
    opacity: 0.8;
  }

  @keyframes cloudMove {
  0% {
    transform: translate(-60%, 40px);
  }

  25% {
    transform: translate(-40%, 0px);
  }

  50% {
    transform: translate(0%, 40px);
  }

  75% {
    transform: translate(-40%, 0px);
  }

  100% {
    transform: translate(-100%, 40px);
  }
}
}
</style>
