<script lang="ts" setup>
import { toRefs } from "vue";


export interface TipBoxItemData {
  icon: string,
  text: string
}
const props = defineProps<{
  data: TipBoxItemData
}>();

let {
  icon = '../../assets/clothing.png',
  text = '文本'
} = toRefs(props.data);

</script>

<template>
  <flex-box class="tip-box-item" direction-column center-h-v>
    <img src="../../assets/clothing.png" alt="" class="icon">
    <div class="text">{{text}}</div>
  </flex-box>
</template>

<style lang="scss" scoped>
.tip-box-item {
  .icon {
    width: 40px;
    height: 40px;
  }
  .text {
    font-size: 12px;
    color: #FFF;
    margin-top: 16px;
  }
}
</style>
