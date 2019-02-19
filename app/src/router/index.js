import Vue from 'vue';
import Router from 'vue-router';

const home = (resolve) => { require(["../views/home.vue"], resolve) };

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [{
        path: '/home',
        component: home
    }]
});

export function createRouter() {
    return router;
}