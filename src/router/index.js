import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/index.vue'
import Shoppingcar from '../views/shoppingcar/temp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/index.vue')
    },
    {
      path: '/',
      name: 'homes',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/goodsdetail/:goodsid/:goodstypes',
      name: 'goodsdetail',
      component: () => import('../views/goodsdetail/temp.vue')
    },
    {
      path: '/goodsdetails/:goodsid/:goodstypes',
      name: 'goodsdetails',
      component: () => import('../views/goodsdetail/index.vue')
    },
    {
      path: '/submitorder',
      name: 'submitorder',
      component: () => import('../views/postorder/index.vue')
    },
    {
      path: '/shoppingcar/:username',
      name: 'shoppingcar',
      component: Shoppingcar
    },
    {
      path: '/shoppingcars/:username',
      name: 'shoppingcars',
      component: () => import('../views/shoppingcar/index.vue')
    },
    {
      path: '/searchgoods/:key',
      name: 'searchgoods',
      component: () => import('../views/searchgoods/temp.vue')
    },
    {
      path: '/searchtogoods/:key',
      name: 'searchtogoods',
      component: () => import('../views/searchgoods/index.vue')
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
