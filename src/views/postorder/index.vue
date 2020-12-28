<template>
  <div>
    <div class="top">
      <Top></Top>
    </div>
    <Title></Title>
    <div class="goods-list">
        <div class="address">
          <div class="addr-item" v-for="(item, index) in address" :key="index" :class="{'active': index === selected}" @click="selected=index">
              <div class="name">
                <span>{{ item.name }}收</span>
              </div>
              <div class="addr-phone">
                <span>{{ item.addres }}</span>
                <span>{{ item.phone }}</span>
              </div>
              <div class="gou" v-show="index === selected"></div>
          </div>
        </div>
        <div class="comfirm-title">
          <div class="text">
            <h2>确认订单信息</h2>
          </div>
          <div class="goods-info-title">
            <div>订购商品</div>
            <div>商品类型</div>
            <div>单价</div>
            <div>数量</div>
            <div>小计</div>
          </div>
        </div>
        <div class="goods-list-submit">
          <div class="good-info" v-for="(item, index) in goodss" :key="index">
            <div class="img">
              <img :src="item.mainImg[0]">
            </div>
            <div class="goods-info">
              <div class="goods-name">{{ item.name }}</div>
              <div class="goods-type">{{ item.type[0] }}</div>
              <div class="goods-price">{{ item.price }}.00</div>
              <div class="goods-buCount">{{ item.buyCount }}</div>
              <div class="goods-all-price">{{ item.buyCount*item.price }}.00</div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="all-price">
          <span class="price-text">合计:</span>
          <span class="all-price-goods">{{ allPrice }}</span>
        </div>
        <div class="submit-this-order">
          <div class="box">
            <div class="price">
              <span class="realpay-title">实付款:</span>
              <span class="realpay-icon">¥</span>
              <span class="realpay-price">{{ allPrice }}</span>
            </div>
            <div class="adr">
              <div class="confirm-addr">
                <span class="confirmAddr-title">寄送至:</span>
                <span class="confirmAddr-bd">{{ address[selected].addres }}</span>
              </div>
              <div class="confirm-user">
                  <span class="confirmAddr-title">收货人:</span>
                  <span class="confirmAddr-bd">{{ address[selected].name }}&nbsp;{{ address[selected].phone }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="but">
          <a href="#">提交订单</a>
        </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Title from '../../components/Title'
import Top from '../../components/Top'

export default {
  data () {
    return {
      goodss: [],
      address: [
        {
          addres: ''
        }
      ],
      selected: 0
    }
  },
  components: {
    Title,
    Top
  },
  created () {
    this.goodss = this.$store.state.shoppingGoods
    Axios.get('/api/get/addressinfo').then(res => {
      this.address = res.data.address
    })
  },
  computed: {
    allPrice () {
      var all = 0
      for (var i = 0; i < this.goodss.length; i++) {
        all += (this.goodss[i].price * this.goodss[i].buyCount)
      }
      return all
    }
  },
  destroyed () {
    this.$store.commit('deleteGoods')
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
  font-family: verdana,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Tahoma,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
}
.top {
  width: 100%;
  background-color: #f5f5f5
}
.goods-list {
  width: 1190px;
  margin: auto;
}
.but {
  text-align: right;
  width: 990px;
  padding: 0 0 5px 5px;
}
.but a {
  display: inline-block;
  width: 182px;
  height: 39px;
  position: relative;
  vertical-align: middle;
  line-height: 39px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  background: #dd2727;
  color: #fff;
}
.submit-this-order {
  text-align: right;
  margin-top: 15px;
  width: 990px;
}
.box {
  display: inline-block;
  border: 1px solid #ff0036;
  min-width: 230px;
  padding: 10px 5px 10px 20px;
}
.realpay-title {
  font-weight: 700;
  color: #333;
}
.realpay-icon {
  font-size: 26px;
  margin-right: 4px;
  color: #999;
}
.realpay-price {
  color: rgb(255, 0, 54);
  font: 700 26px tahoma;
}
.adr {
  line-height: 1.6;
  margin-top: 10px;
}
.confirmAddr-title {
  font-weight: 700;
  color: #333;
}
.addr-item {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 267px;
  margin: 0 14px 14px 0;
  color: #666;
  cursor: pointer;
  z-index: 2;
  position: relative;
  padding: 11px 15px;
  border: 3px solid whitesmoke;
  overflow: hidden;
}
.name {
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    padding: 0 0 5px;
    margin-bottom: 5px;
    line-height: 18px;
    font-weight: 700;
}
.addr-phone {
  height: 36px;
}
.active {
  border-color: #ff8000;
}
.gou {
  position: absolute;
  background: url(//img.alicdn.com/tfs/TB1zLJRRpXXXXcrXXXXXXXXXXXX-30-600.png) no-repeat;
  background-position: 0 -272px;
  width: 28px;
  height: 28px;
  top: 58px;
  right: 1px;
}
.text {
  position: relative;
  margin-bottom: 15px;
}
.text h2 {
  line-height: 25px;
  color: #333;
  font-weight: 700;
  font-size: 14px;
  font-family: verdana,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Tahoma,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
}
.goods-info-title {
  margin-top: 15px;
  color: #6c6c6c;
  min-width: 990px;
  width: 990px;
  margin-bottom: 20px;
}
.goods-info-title div {
  display: inline-block;
  width: 194px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-bottom: 3px solid #b2d1ff;
  font-size: 12px;
  vertical-align: bottom;
}
.img {
  height: 52px;
  width: 52px;
  border: 1px solid #999;
  float: left;
}
.img img{
  height: 50px;
}
.goods-list-submit {
  width: 990px;
}
.good-info {
  float: left;
  margin-bottom: 10px;
  padding-bottom: 20px;
  border-bottom: 2px solid #b2d1ff;
  width: 990px;
}
.goods-name {
  float: left;
  vertical-align: top;
  box-sizing: content-box;
  margin-right: 1px;
  width: 134px;
  overflow: hidden;
  height: 50px;
  padding-left: 10px;
}
.goods-type,.goods-buCount,.goods-price,.goods-all-price {
  float: left;
  width: 194px;
  text-align: center;
  margin-top: 15px;
  margin-left: 3px;
}
.goods-all-price {
    font-weight: bold;
    font-style: normal;
    color: rgb(255, 0, 54);
    font-size: 14px;
    min-width: 100px;
}
.clear {
  clear: both;
}
.price-text {
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
    font-size: 14px;
    margin-right: 10px;
    font-family: verdana,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Tahoma,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
}
.all-price-goods {
    font-weight: bold;
    font-style: normal;
    text-decoration: none;
    color: rgb(255, 0, 54);
    font-size: 14px;
    font-family: verdana,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Tahoma,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
}
.all-price {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0px;
    padding: 10px 0px;
    width: 990px;
}
</style>
