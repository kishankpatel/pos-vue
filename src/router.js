import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/Home')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/pages/Auth/Login')
    },
    {
      name: 'sign_up',
      path: '/sign_up',
      component: () => import('@/pages/Auth/Register')
    },
    {
      name: 'bills',
      path: '/bills',
      component: () => import('@/pages/Bills/BillListing')
    },
    {
      name: 'items',
      path: '/items',
      component: () => import('@/pages/Items/ItemListing')
    },
    {
      name: 'page-not-found',
      path: '/page-not-found',
      component: () => import('@/404')
    },
    {
      path: '*',
      component: () => import('@/404'),
      meta: {
        title: 'POS System - 404: Page not found',
        metaTags: [
          {
            name: 'robots',
            content: 'noindex'
          }
        ]
      }
    }
  ]
})

export default router;
