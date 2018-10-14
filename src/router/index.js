import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '../components/Login.vue'
// import Register from '../components/Register.vue'
import Index from '../components/Index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Index
    }
    // {
    //   path: '/login',
    //   component: Login
    // },
    // {
    //   path:'/register',
    //   component:Register
    // }
  ]
})
