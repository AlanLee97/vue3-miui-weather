import { createPinia, defineStore } from 'pinia';

export const store = createPinia();

export const useWeatherAppStore = defineStore('weatherApp', {
  state: () => {
    return {
      appScrollTop: 0,
      opacity: 0.8,
    };
  },
});
