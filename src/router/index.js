import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/error404',
    name: 'Error404',
    component: () => import('@/views/errorPage/Error404')
  },
  {
    path: '*',
    redirect: '/error404'
  },
  {
    path: '/',
    component: () => import('@/views/frame/index.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/pages/Home.vue'),
      beforeEnter(to, from, next) {
        next()
      }
    }]
  }
  ]
})
