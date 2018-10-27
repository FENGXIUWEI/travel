import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import '@/assets/reset.css'
import '@/assets/border.css'
import '@/assets/iconfont/iconfont.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
