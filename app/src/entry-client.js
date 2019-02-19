import { createApp } from './app';

// const { createApp } = require('./app');

const { app, router } = createApp();

router.onReady(() => {
    app.$mount('#app', true);
});