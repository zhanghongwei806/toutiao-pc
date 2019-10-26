import Vue from 'vue'
import App from './App.vue'
// 样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 路由
import router from '@/router'

import axios from '@/api'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
