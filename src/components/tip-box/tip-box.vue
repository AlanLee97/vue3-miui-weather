<script lang="ts" setup>
import { reactive } from '@vue/reactivity';
import { TipBoxItem } from '..';
import { TipBoxItemData } from '../tip-box-item/tip-box-item.vue';

let tipBoxData1: Array<TipBoxItemData> = reactive([
  {
    icon: '',
    text: '适宜薄外套',
  },
  {
    icon: '',
    text: '紫外线较弱',
  },
  {
    icon: '',
    text: '宜户外运动',
  }
])

let tipBoxData2: Array<TipBoxItemData> = reactive([
  {
    icon: '',
    text: '适宜薄洗车',
  },
  {
    icon: '',
    text: '不用带伞',
  },
  {
    icon: '',
    text: '较易感冒',
  }
])
</script>

<template>
  <flex-box class="tip-box" space-between style="flex-wrap: wrap;">
    <template v-for="item in tipBoxData1" :key="item.text">
      <tip-box-item :data="item" class="item-wrapper" />
    </template>
    <div class="divide"></div>
    <template v-for="item in tipBoxData2" :key="item.text">
      <tip-box-item :data="item" class="item-wrapper" />
    </template>
  </flex-box>
</template>

<style lang="scss" scoped>
.tip-box {
  padding: 30px 20px;
  margin: 20px;
  background-color: rgba($color: #FFF, $alpha: .3);
  border-radius: 20px;

  .item-wrapper {
    width: 28%;
  }

  .divide {
    width: 100%; 
    height: 30px;
  }
}
</style>
