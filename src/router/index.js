import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import VueScrollTo from 'vue-scrollto'
import Index from '@/components/Index'

// projects

import certace from '@/components/projects/certace'
import polanddeals from '@/components/projects/polanddeals'
import dgtmarket from '@/components/projects/dgtmarket'
import gotar from '@/components/projects/gotar'
import article from '@/components/projects/article'
import trug from '@/components/projects/trug'
import ragnarson from '@/components/projects/ragnarson'
import ragnarsonbrand from '@/components/projects/ragnarsonbrand'
import branding from '@/components/projects/branding'

Vue.use(VueHead)
Vue.use(Router)
Vue.use(VueScrollTo)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/polanddeals',
      name: 'polanddeals',
      component: polanddeals
    },
    {
      path: '/dgtmarket',
      name: 'dgtmarket',
      component: dgtmarket
    },
    {
      path: '/certace',
      name: 'certace',
      component: certace
    },
    {
      path: '/gotar',
      name: 'gotar',
      component: gotar
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/trug',
      name: 'trug',
      component: trug
    },
    {
      path: '/10ragnarson',
      name: 'ragnarson',
      component: ragnarson
    },
    {
      path: '/ragnarsonbrand',
      name: 'ragnarsonbrand',
      component: ragnarsonbrand
    },
    {
      path: '/branding',
      name: 'branding',
      component: branding
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
