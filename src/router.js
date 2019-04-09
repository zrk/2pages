import Vue from 'vue';
import Router from 'vue-router';
import LoginView from './views/LoginView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/data',
      name: 'data',
      component: () => import(/* webpackChunkName: "data" */ './views/DataView.vue'),
    },
  ],
});
