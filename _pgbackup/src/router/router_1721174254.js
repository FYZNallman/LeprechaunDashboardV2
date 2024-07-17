import { createRouter, createWebHistory } from 'vue-router';

export default [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/pages/dashboard/index.vue')
  },
  {
    path: '/livechart',
    name: 'LiveChart',
    component: () => import('../views/pages/dashboard/LiveChart.vue')
  },
  {
    path: '/swap',
    name: 'Swap',
    component: () => import('../views/pages/dashboard/swap.vue')
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('../views/pages/dashboard/wallet.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/pages/dashboard/news.vue')
  },
  // Add more routes as necessary
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
