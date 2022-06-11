import { createPinia, defineStore } from 'pinia';

export const store = createPinia();

export const useWeatherAppStore = defineStore('weatherApp', {
  state: () => {
    return {
      appScrollTop: 0,
      opacity: 0.8,
      rotateDeg: 0,
      cityList: [
        {
          name: '深圳',
          distrist: '宝安区',
        },
        {
          name: '广州',
          distrist: '天河区',
        },
        {
          name: '上海',
          distrist: '宝山区',
        },
        {
          name: '北京',
          distrist: '海淀区',
        },
      ],
    };
  },
});
