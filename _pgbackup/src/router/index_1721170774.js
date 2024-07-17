import { createWebHistory, createRouter } from 'vue-router';
import store from '@/state/store';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.name ? `${to.name} | Leprechaun Dashboard` : 'Leprechaun Dashboard';
  
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.getters['auth/loggedIn']) {
      next({
        path: '/login',
        query: { redirectFrom: to.fullPath },
      });
    } else {
      store.dispatch('auth/validate').then((validUser) => {
        validUser ? next() : next({ name: 'Login' });
      });
    }
  } else {
    next();
  }
});

export default router;
