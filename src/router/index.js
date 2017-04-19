import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Index from '@/components/Index'

Vue.use(VueHead)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
