<template>
  <div>
    <div class="top">
      <Top></Top>
    </div>
    <Title></Title>
    <MainPart :mainImg="displayImg" :goodsTypeList="goods.type" :mainImgList="goods.mainImg" :goodname="goods.name" :goodprice="goods.price"
    @select-img="selectImg" @buy-now="buyNow" @add-shoppingcart="addToShoppingCart"></MainPart>
    <DetailPart :canshuUrl="goods.moreAbout" :detailImgList="goods.detailImg"></DetailPart>
    <Bottom></Bottom>
  </div>
</template>

<script>
import axios from 'axios'
import MainPart from './components/MainPart'
import Title from '../../components/Title'
import DetailPart from './components/DetailPart'
import Bottom from '../../components/Bottom'
import Top from '../../components/Top'

export default {
  components: {
    MainPart,
    Title,
    DetailPart,
    Bottom,
    Top
  },
  data () {
    return {
      goods: {
        id: 0,
        name: '',
        price: 0,
        type: [],
        types: 'R',
        mainImg: [],
        detailImg: [],
        moreAbout: '',
        buyCount: 0
      },
      displayImg: '',
      displayImgs: [],
      goodsid: '',
      goodstypes: '',
      reviews: [],
      loginUser: '',
      userInfo: {
        username: '',
        password: '',
        phone: '',
        email: '',
        shoppingcar: []
      }
    }
  },
  created () {
    this.getParams()
    if (this.goodstypes === 'R') {
      this.getRefrigerator()
    } else if (this.goodstypes === 'C') {
      this.getComputer()
    } else if (this.goodstypes === 'T') {
      this.getTelevision()
    } else if (this.goodstypes === 'A') {
      this.getAirConditioner()
    } else if (this.goodstypes === 'W') {
      this.getWashingMachine()
    }
  },
  methods: {
    getRefrigerator () {
      axios.get('http://localhost:3000/Refrigerators').then(res => {
        this.goods.id = res.data[this.goodsid - 1].id
        this.goods.name = res.data[this.goodsid - 1].name
        this.goods.price = res.data[this.goodsid - 1].price
        this.goods.type = res.data[this.goodsid - 1].type
        this.goods.types = res.data[this.goodsid - 1].types
        this.goods.mainImg = res.data[this.goodsid - 1].mainImg
        this.goods.detailImg = res.data[this.goodsid - 1].detailImg
        this.goods.moreAbout = res.data[this.goodsid - 1].moreAbout
        this.displayImg = this.goods.mainImg[0]
      })
    },
    getComputer () {
      axios.get('http://localhost:3000/computers').then(res => {
        this.goods.id = res.data[this.goodsid - 1].id
        this.goods.name = res.data[this.goodsid - 1].name
        this.goods.price = res.data[this.goodsid - 1].price
        this.goods.type = res.data[this.goodsid - 1].type
        this.goods.types = res.data[this.goodsid - 1].types
        this.goods.mainImg = res.data[this.goodsid - 1].mainImg
        this.goods.detailImg = res.data[this.goodsid - 1].detailImg
        this.goods.moreAbout = res.data[this.goodsid - 1].moreAbout
        this.displayImg = this.goods.mainImg[0]
      })
    },
    getTelevision () {
      axios.get('http://localhost:3000/televisions').then(res => {
        this.goods.id = res.data[this.goodsid - 1].id
        this.goods.name = res.data[this.goodsid - 1].name
        this.goods.price = res.data[this.goodsid - 1].price
        this.goods.type = res.data[this.goodsid - 1].type
        this.goods.types = res.data[this.goodsid - 1].types
        this.goods.mainImg = res.data[this.goodsid - 1].mainImg
        this.goods.detailImg = res.data[this.goodsid - 1].detailImg
        this.goods.moreAbout = res.data[this.goodsid - 1].moreAbout
        this.displayImg = this.goods.mainImg[0]
      })
    },
    getAirConditioner () {
      axios.get('http://localhost:3000/airConditioners').then(res => {
        this.goods.id = res.data[this.goodsid - 1].id
        this.goods.name = res.data[this.goodsid - 1].name
        this.goods.price = res.data[this.goodsid - 1].price
        this.goods.type = res.data[this.goodsid - 1].type
        this.goods.types = res.data[this.goodsid - 1].types
        this.goods.mainImg = res.data[this.goodsid - 1].mainImg
        this.goods.detailImg = res.data[this.goodsid - 1].detailImg
        this.goods.moreAbout = res.data[this.goodsid - 1].moreAbout
        this.displayImg = this.goods.mainImg[0]
      })
    },
    getWashingMachine () {
      axios.get('http://localhost:3000/washingMachines').then(res => {
        this.goods.id = res.data[this.goodsid - 1].id
        this.goods.name = res.data[this.goodsid - 1].name
        this.goods.price = res.data[this.goodsid - 1].price
        this.goods.type = res.data[this.goodsid - 1].type
        this.goods.types = res.data[this.goodsid - 1].types
        this.goods.mainImg = res.data[this.goodsid - 1].mainImg
        this.goods.detailImg = res.data[this.goodsid - 1].detailImg
        this.goods.moreAbout = res.data[this.goodsid - 1].moreAbout
        this.displayImg = this.goods.mainImg[0]
      })
    },
    getParams () {
      this.goodsid = this.$route.params.goodsid
      this.goodstypes = this.$route.params.goodstypes
    },
    selectImg (index) {
      this.displayImg = this.goods.mainImg[index]
    },
    buyNow (count) {
      const username = this.$store.state.loginUser
      if (username === '') {
        this.$message.error('请先登录')
        this.$router.push('/login')
      } else {
        this.goods.buyCount = count
        this.$store.commit('submitGoods', this.goods)
        this.$router.push('/submitorder')
      }
    },
    addToShoppingCart (count) {
      const username = this.$store.state.loginUser
      if (username === '') {
        this.$message.error('请先登录')
        this.$router.push('/login')
      } else {
        this.goods.buyCount = count
        axios.get('http://localhost:3000/user', {
          params: {
            username: this.$store.state.loginUser
          }
        }).then(res => {
          var changeFlag = 0
          this.userInfo = res.data[0]
          for (var i = 0; i < this.userInfo.shoppingcar.length; i++) {
            if (this.userInfo.shoppingcar[i].name === this.goods.name) {
              changeFlag = 1
              this.userInfo.shoppingcar[i].buyCount += count
            }
          }
          if (changeFlag !== 1) {
            this.userInfo.shoppingcar.push(this.goods)
          }
          axios.put('http://localhost:3000/user/' + this.userInfo.id, this.userInfo)
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.$router.push({name: 'goodsdetail', params: {goodsid: this.goodsid, goodstypes: this.goodstypes}})
        })
      }
    }
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  background-color: #f5f5f5;
}
</style>
