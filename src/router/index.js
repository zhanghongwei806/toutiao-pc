import VueRouter from 'vue-router'
import Vue from 'vue'
// login
import Login from '@/views/login'
// 首页
import Home from '@/views/home'
import Welcome from '@/views/welcome'
// 404
import NotFound from '@/views/404'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: Welcome
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    { path: '*', component: NotFound }
  ]
})

export default router
