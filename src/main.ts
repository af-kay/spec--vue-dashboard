import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './main.scss';

import App from './app';

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
