import { createWebHistory, createRouter } from 'vue-router';
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
  next();
});

export default router;
