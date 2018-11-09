import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('./views/Personal.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('./views/ProductDetail.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('./views/MyOrder.vue')
    },
    {

      path: '/shop',
      name: 'shop',
      component: () => import('./views/Shop.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/AddressShow.vue')
    },
    {
      path: '/address/edit',
      name: 'address-edit',
      component: () => import('./views/AddressEdit.vue')
    },
    {
      path: '/bankcard',
      name: 'bankcard',
      component: () => import('./views/BankCard.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('./views/Withdraw.vue')
    },
    {
      path: '/404',
      name: 'notfound',
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '*',
      redirect: '404',
    }
  ]
})
