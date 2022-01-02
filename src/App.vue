<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { 
  WeatherApp
} 
from './components';

</script>

<template>
  <!-- test flex-box -->
<!--   <FlexBox height="100" width="100" class="box" space-around direction-row>
    <div>1</div>
    <div>2</div>
  </FlexBox> -->
  <WeatherApp />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box {
  border: 1px solid red;
}
</style>
