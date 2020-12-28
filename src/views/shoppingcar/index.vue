<template>
  <div>
      <div class="top">
          <Top></Top>
      </div>
      <Title></Title>
      <NullGoods v-show="!haveGoods"></NullGoods>
      <ShoppingCar :shoppingcarList="shoppingCarList" v-show="haveGoods"
      @submit-goods="submitGoods" @clear-shoppingcar="clearShoppingCar" @delete-goods="deleteGoods"></ShoppingCar>
  </div>
</template>

<script>
import NullGoods from './components/NullGoods'
import Title from '../../components/Title'
import Top from '../../components/Top'
import Axios from 'axios'
import ShoppingCar from './components/ShoppingCar.vue'

export default {
  components: {
    NullGoods,
    Top,
    Title,
    ShoppingCar
  },
  data () {
    return {
      haveGoods: false,
      shoppingCarList: [],
      loginUser: {},
      loginUserName: ''
    }
  },
  created () {
    this.getParams()
  },
  methods: {
    getParams () {
      this.loginUserName = this.$route.params.username
      Axios.get('http://localhost:3000/user', {
        params: {
          username: this.loginUserName
        }
      }).then(res => {
        this.loginUser = res.data[0]
        if (this.loginUser.shoppingcar.length > 0) {
          this.haveGoods = true
          this.shoppingCarList = this.loginUser.shoppingcar
        }
      })
    },
    submitGoods (list) {
      this.$store.commit('submitGoodss', list)
      for (var i = 0; i < list.length; i++) {
        var index = this.loginUser.shoppingcar.indexOf(list[i])
        this.loginUser.shoppingcar.splice(index, 1)
      }
      Axios.put('http://localhost:3000/user/' + this.loginUser.id, this.loginUser)
      this.$router.push('/submitorder')
    },
    clearShoppingCar (list) {
      this.loginUser.shoppingcar = list
      Axios.put('http://localhost:3000/user/' + this.loginUser.id, this.loginUser)
      this.shoppingCarList = list
      this.$router.push({name: 'shoppingcar', params: {username: this.loginUserName}})
    },
    deleteGoods (index) {
      this.shoppingCarList.splice(index, 1)
      this.loginUser.shoppingcar = this.shoppingCarList
      Axios.put('http://localhost:3000/user/' + this.loginUser.id, this.loginUser)
      if (this.shoppingCarList.length === 0) {
        this.$router.push({name: 'shoppingcar', params: {username: this.loginUserName}})
      }
    }
  },
  destroyed () {
    Axios.put('http://localhost:3000/user/' + this.loginUser.id, this.loginUser)
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  background-color: #f5f5f5;
}
</style>
