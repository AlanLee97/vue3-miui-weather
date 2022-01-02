import { createApp } from 'vue'
import App from './App.vue'
import {FlexBox} from './components';


const app = createApp(App);
app.component('flex-box', FlexBox);
app.mount('#app')
