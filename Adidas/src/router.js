import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Details from './views/adidas/Details.vue'
import Buy from './views/adidas/Buy'
import Index from './views/adidas/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Details',
      name: 'details',
      component: Details
    },
    {
      path: '/Buy',
      name: 'buy',
      component: Buy
    },
    {
      path:'Index',
      name:'index',
      component:'Index'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
    
  ]
})
