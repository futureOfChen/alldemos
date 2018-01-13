import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index'
import Store from '../view/store'
import Login from '../view/login'

Vue.use(Router)




export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path:'/store',
      component:Store,
      meta:{
        requireAuth:true
      }
    },{
      path:'/login',
      component:Login
    }
  ]
})
