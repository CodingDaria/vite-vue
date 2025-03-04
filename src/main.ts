import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

import './assets/main.css';

import router from './router';
import App from './App.vue';

createApp(App).use(router).use(VueQueryPlugin).mount('#app');
