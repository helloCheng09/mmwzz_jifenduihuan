import Vue from 'vue'
import Router from 'vue-router'
import Couponlist from './views/Couponlist.vue'
import Coupondet from './views/Coupondet.vue'
import Couponcenter from './views/Couponcenter.vue'
import Couponcenterdet from './views/Couponcenterdet.vue'
import Used from './components/usercenter/Used.vue'
import Notuse from './components/usercenter/Notuse.vue'
import Past from './components/usercenter/Past.vue'


Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/couponlist/:id',
      name: 'couponlist',
      component: Couponlist,
      meta: {
        title:'妈妈我在这-优惠券',
        navShow: true
      }
    }, 
    {
      path: '/coupondet/:id/:student_id',
      name: 'coupondet',
      component: Coupondet,
      meta: {
        title:'妈妈我在这-优惠券详情',
        navShow: false
      },
    },
    {
      path: '/couponcenter/:id',
      // name: 'couponcenter',
      component: Couponcenter,
      meta: {
        title:'妈妈我在这-我的优惠券',
        navShow: true
      },
      children: [{
          path:'/',
          component: Notuse,
        },{
          path:'used/',
          component: Used,
        },{
          path:'past/',
          component: Past,
      }]
    },
    {
      path: '/couponcenterdet/:id',
      name: 'couponcenterdet',
      component: Couponcenterdet,
      meta: {
        title:'妈妈我在这-优惠券详情',
        navShow: false
    },
    },
  ]

})
router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  next()//执行进入路由，如果不写就不会进入目标页
})

 


export default router

