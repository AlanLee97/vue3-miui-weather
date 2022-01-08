<script lang="ts" setup>
import { 
  HeaderBar, 
  DisplayTemperature,
  TemperatureTextBox,
  RecentWeatherInfo,
  RecentWeatherBtn,
  HoursWeatherInfo,
  SummaryWeatherInfo,
  Forecast,
  TipBox,
  Footer
} 
from '../../components';
</script>

<template>
    <div class="weather-app">
      <!-- <div v-flex.space-between>
        <div>1</div>
        <div>2</div>
      </div> -->
      <flex-box wrap center-h space-between horizontal>
        <div>1</div>
        <div>2</div>
      </flex-box>

      <HeaderBar />
      <TemperatureTextBox />
      <RecentWeatherInfo />
      <RecentWeatherBtn />
      <HoursWeatherInfo />
      <SummaryWeatherInfo />
      <Forecast />
      <TipBox />
      <Footer />
      
    </div>
</template>

<style lang="scss" scoped>
.weather-app {
  width: 100vw;
  height: 100vh;
  line-height: 2;
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
}

</style>
