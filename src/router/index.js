import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/frame/index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/pages/Home.vue'),
          beforeEnter(to, from, next) {
            next()
          }
        }
      ]
    }
  ]
})
