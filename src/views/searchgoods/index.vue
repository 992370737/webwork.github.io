<template>
  <div>
    <div class="top">
      <Top></Top>
    </div>
    <Title></Title>
    <div class="main-body-null" v-show="nullGoods">
      <h1>暂无商品信息</h1>
    </div>
    <div class="main-body" v-show="!nullGoods">
      <ul class="goods-menu-list">
        <li v-for="(item, index) in searchGoods" :key="index" class="goods-menu">
          <div>
            <el-card >
              <img :src="item.mainImg[0]" class="image">
              <div class="text-area">
                <div class="zyIcon">自营</div>
                <router-link :to="{ name: 'goodsdetail', params: { goodsid: item.id, goodstypes: item.types } }">{{ item.name }}</router-link>
              </div>
              <div class="price-area">
                <div class="price">
                  <i>¥</i>
                  <span>{{ item.price }}</span>
                </div>
              </div>
            </el-card>
          </div>
        </li>
      </ul>
    </div>
    <div class="clear"></div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Axios from 'axios'
import Top from '../../components/Top'
import Title from '../../components/Title'
import Bottom from '../../components/Bottom'

export default {
  components: {
    Top,
    Title,
    Bottom
  },
  data () {
    return {
      keys: '',
      goodsList: [],
      searchGoods: [],
      nullGoods: true
    }
  },
  created () {
    this.getGoods()
  },
  methods: {
    getGoods () {
      this.keys = this.$route.params.key
      Axios.get('http://localhost:3000/Refrigerators').then(res => {
        this.goodsList = this.goodsList.concat(res.data)
        Axios.get('http://localhost:3000/computers').then(res => {
          this.goodsList = this.goodsList.concat(res.data)
          Axios.get('http://localhost:3000/televisions').then(res => {
            this.goodsList = this.goodsList.concat(res.data)
            Axios.get('http://localhost:3000/airConditioners').then(res => {
              this.goodsList = this.goodsList.concat(res.data)
              Axios.get('http://localhost:3000/washingMachines').then(res => {
                this.goodsList = this.goodsList.concat(res.data)
                for (var i = 0; i < this.goodsList.length; i++) {
                  if (this.goodsList[i].name.indexOf(this.keys) !== -1) {
                    this.searchGoods.push(this.goodsList[i])
                  }
                }
                if (this.searchGoods.length === 0) {
                  this.nullGoods = true
                } else {
                  this.nullGoods = false
                }
              })
            })
          })
        })
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clear {
  clear: both;
}
.top {
  width: 100%;
  background: #f5f5f5;
}
.main-body-null {
  height: 600px;
  border: 1px solid #999;
  text-align: center;
  padding-top: 100px;
  color: #ff8000;
}
.main-body,.main-body-null {
  width: 1190px;
  margin: auto;
}
.goods-menu-list {
  list-style: none;
  width: 800px;
}
.goods-menu {
  margin-right: 12.5px;
  float: left;
  width: 200px;
  height: 330px;
  cursor: default;
}
.goods-menu img {
  height: 190px;
}
.text-area {
  overflow: hidden;
  width: 190px;
  height: 40px;
}
.zyIcon {
  width: 35px;
  height: 18px;
  background-color: #ff8000;
  border-radius: 2px;
  text-align: center;
  color: white;
  font-size: 13px;
  float: left;
}
.price-area {
  width: 190px;
  height: 28px;
  left: 20px
}
.price {
  line-height: 28px;
  color: #F30;
  font-size: 20px;
  font-weight: bold;
  float: left;
}
</style>
