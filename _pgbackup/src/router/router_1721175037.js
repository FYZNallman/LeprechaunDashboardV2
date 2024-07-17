import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import Dashboard from './views/index.vue';
import TelegramCallback from './views/TelegramCallback.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/auth/telegram/callback',
    name: 'TelegramCallback',
    component: TelegramCallback,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
