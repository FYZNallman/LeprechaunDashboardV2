import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Dashboard from '@/views/index.vue';
import Login from '@/views/Login.vue';
import TelegramCallback from '@/views/TelegramCallback.vue';

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
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

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user'); // Check if the user is logged in
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
