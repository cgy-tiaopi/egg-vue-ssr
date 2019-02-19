import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router/index.js';

export function createApp() {

    // 创建router实例
    const router = createRouter()

    // 创建vue对象实例
    const app = new Vue({
        render: h => h(App),
        router
    });

    return { app, router };
}