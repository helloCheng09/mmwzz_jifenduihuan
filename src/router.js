import Vue from 'vue'
import Router from 'vue-router'
import Couponlist from './views/Couponlist.vue'
import Coupondet from './views/Coupondet.vue'
import Couponcenter from './views/Couponcenter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'couponlist',
      component: Couponlist
    }, 
    {
      path: '/coupondet',
      name: 'coupondet',
      // component: Coupondet
      component: () => import(/* webpackChunkName: "about" */ './views/Coupondet.vue')
    },
    {
      path: '/couponcenter',
      name: 'couponcenter',
      // component: Couponcenter
      component: () => import(/* webpackChunkName: "about" */ './views/Couponcenter.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
