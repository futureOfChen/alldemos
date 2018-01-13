// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'


axios.interceptors.request.use(
  config => {
    if(store.getters.getToken){
      config.headers.Authorrization = `token ${store.getters.getToken}`
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if(err.response) {
      switch(err.response.status){
        case 401:
        store.commit('logout');
        router.replace({
          path:'login',
          query:{redirect:router.currentRoute.fullPath}
        })
      }
    }
    return Promise.reject(err.response.data);
  }
)

router.beforeEach( (to , from , next) => {
  if( to.meta.requireAuth ){
    if(store.getters.getToken){
      next();
    }else {
      next({
        path:'/login',
        query: {redirect:to.fullPath}
      })
    }
  }else {
    next()
  }
} )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
