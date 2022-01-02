import { createApp } from 'vue'
import App from './App.vue'
import {FlexBox} from './components';
import AFlexBox from '@alanlee97/vue3-flex-box'; // 上传到npm的flex-box包
import '@alanlee97/vue3-flex-box/dist/style.css';

const app = createApp(App);
app.component('flex-box', FlexBox);
app.component('a-flex-box', AFlexBox);
app.mount('#app')
