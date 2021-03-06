<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { transformCamelToDash } from '../../utils';

interface FlexBoxProps {
  height?: string | number;
  width?: string | number;
  centerH?: boolean;
  centerV?: boolean;
  centerHV?: boolean;
  spaceBetween?: boolean;
  between?: boolean; // the alias of spaceBetween
  spaceAround?: boolean;
  around?: boolean; // the alias of spaceAround
  spaceEvenly?: boolean;
  evenly?: boolean; // the alias of spaceEvenly
  directionRow?: boolean;
  directionR?: boolean; // the alias of directionRow
  horizontal?: boolean; // the alias of directionRow
  directionColumn?: boolean;
  directionC?: boolean; // the alias of directionColumn
  vertical?: boolean; // the alias of directionColumn
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  itemAlignStart?: boolean;
  itemAlignEnd?: boolean;
  flexNum?: number;
  wrap?: boolean;
}

const props = defineProps<FlexBoxProps>();

const handleAliasProps = (alias: string) => {
  let className = alias;
  switch (className) {
    case 'wrap':
      className = 'flex-wrap';
      break;
    case 'direction-r':
    case 'horizontal':
      className = 'direction-row';
      break;
    case 'direction-c':
    case 'vertical':
      className = 'direction-column';
      break;
  }
  if (['between', 'around', 'evenly'].includes(className)) {
    className = `space-${className}`;
  }
  return className;
};
const className = ref('flex-box');
const copyProps = JSON.parse(JSON.stringify(props));
for (let key in copyProps) {
  if (copyProps[key]) {
    key = handleAliasProps(key);
    className.value += ' ' + transformCamelToDash(key);
  }
}

const { height, width, direction, flexNum } = toRefs(props);

const style = ref('');
style.value = `
width: ${width ? width + 'px' : ''}; 
height: ${height ? height + 'px' : ''}; 
${flexNum ? 'flex: ' + flexNum + ';' : ''}
${direction ? 'flex-direction: ' + direction + ';' : ''}
`;
</script>

<template>
  <div :class="className" :style="style">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.flex-box {
  display: flex;
}
.center-v {
  display: flex;
  align-items: center;
}

.center-h {
  display: flex;
  justify-content: center;
}

.center-h-v {
  display: flex;
  align-items: center;
  justify-content: center;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.space-evenly {
  justify-content: space-evenly;
}

.direction-column {
  flex-direction: column;
}

.direction-column-reverse {
  flex-direction: column-reverse;
}

.direction-row {
  flex-direction: row;
}

.direction-row-reverse {
  flex-direction: row-reverse;
}

.item-align-start {
  align-items: flex-start;
}

.item-align-end {
  align-items: flex-end;
}

.flex-wrap {
  flex-wrap: wrap;
}
</style>
