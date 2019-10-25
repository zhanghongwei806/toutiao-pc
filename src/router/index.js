import VueRouter from 'vue-router'
import Vue from 'vue'
// login
import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login'
    // },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
