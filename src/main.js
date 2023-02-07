import { createApp } from 'vue'
import './style.css'
import './Local.css'
import router from './router'
import store from './store'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import Icon from '@ant-design/icons';

createApp(App).use(router)
    .use(store)
    .use(Antd)
    .use(Icon)
    .mount('#app')
