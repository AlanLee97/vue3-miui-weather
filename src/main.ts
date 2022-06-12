import { Swipe, SwipeItem } from 'vant';
import { createApp } from 'vue';
import App from './App.vue';
import { FlexBox } from './components';
import vFlex from './directives/v-flex';
import { store } from './store';
// import AFlexBox from '@alanlee97/vue3-flex-box'; // 上传到npm的flex-box包
// import '@alanlee97/vue3-flex-box/dist/style.css';

const app = createApp(App);
app.use(store);
app.component('flex-box', FlexBox);
app.directive('flex', vFlex);
// app.component('a-flex-box', AFlexBox);
app.mount('#app');
app.use(Swipe);
app.use(SwipeItem);
