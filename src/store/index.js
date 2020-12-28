import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: '',
    shoppingGoods: []
  },
  mutations: {
    loginUsers (state, username) {
      state.loginUser = username
    },
    logoutUsers (state) {
      state.loginUser = ''
    },
    submitGoods (state, goods) {
      state.shoppingGoods.push(goods)
    },
    deleteGoods (state) {
      state.shoppingGoods = []
    },
    submitGoodss (state, list) {
      state.shoppingGoods = list
    }
  },
  actions: {

  }
})
