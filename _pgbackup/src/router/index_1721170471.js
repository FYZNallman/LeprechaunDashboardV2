import Vue from 'vue';
import Router from 'vue-router';
import store from '@/state/store';
import Dashboard from '@/views/pages/dashboard/index.vue';
import LiveChart from '@/views/pages/dashboard/LiveChart.vue';
import Swap from '@/views/pages/dashboard/swap.vue';
import Wallet from '@/views/pages/dashboard/wallet.vue';
import News from '@/views/pages/dashboard/news.vue';
import Login from '@/views/pages/account/login.vue';
import Register from '@/views/pages/account/register.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    meta: { authRequired: true },
    component: Dashboard,
  },
  {
    path: '/livechart',
    name: 'LiveChart',
    meta: { authRequired: true },
    component: LiveChart,
  },
  {
    path: '/swap',
    name: 'Swap',
    meta: { authRequired: true },
    component: Swap,
  },
  {
    path: '/wallet',
    name: 'Wallet',
    meta: { authRequired: true },
    component: Wallet,
  },
  {
    path: '/news',
    name: 'News',
    meta: { authRequired: true },
    component: News,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters['auth/loggedIn']) {
          next({ name: 'Dashboard' });
        } else {
          next();
        }
      },
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters['auth/loggedIn']) {
          next({ name: 'Dashboard' });
        } else {
          next();
        }
      },
    },
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.getters['auth/loggedIn']) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
