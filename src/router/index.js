import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    component: () => import('@/views/tabbar-layout'),
    children: [{
      // home作为tabbar-layout的默认子路由
      name: 'home',
      path: '',
      component: () => import('@/views/home')
    }]
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')
  }
  ]
})

export default router
