import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import VueScrollTo from 'vue-scrollto'
import Index from '@/components/Index'

Vue.use(VueHead)
Vue.use(Router)
Vue.use(VueScrollTo)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
