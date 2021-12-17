import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Works from '@/views/Works.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
