import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { seed } from '@ngneat/falso';
import './main.scss';

import App from './app';

const app = createApp(App);

app.use(createPinia());

seed('Some random seed');

app.mount('#app');
