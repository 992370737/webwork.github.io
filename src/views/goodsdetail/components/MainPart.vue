<template>
  <div class="main-goods">
      <div class="goods-img">
        <div class="goods-main-img">
          <pic-zoom :url="mainImg" :scale="2"></pic-zoom>
        </div>
        <div class="goods-img-list">
          <ul>
            <li v-for="(item, index) in mainImgList" :key="index" @mouseover="selected(index)" :class="{'active': nowImg === index,'cur': true}">
                <img :src="item">
            </li>
          </ul>
        </div>
      </div>
      <div class="goods-main-info">
        <div class="goods-info-title">
          <h1>
            <span class="icon">自营</span>
            {{ goodname }}
          </h1>
        </div>
        <div class="goods-info-price">
          <span class="info-title">易购价</span>
          <div class="price-area">
            <i>¥</i>
            <span>{{ goodprice }}.00</span>
          </div>
        </div>
        <div class="goods-info-youhui">
          <span class="info-title">优&nbsp;惠</span>
          <div class="youhui-title">
            <span>可参加以下优惠活动</span>
          </div>
          <div class="youhui-quan1">
            <span>¥300</span>
            <span>满2000用300</span>
            <a href="#">共1张优惠券></a>
          </div>
          <div class="youhui-quan2">
            <span>云钻</span>
            <span>挂券</span>
            <a class="youhui-title">100%刮中券，最高50元无敌券</a>
            <a href="#">立即去刮奖></a>
          </div>
          <div class="other-tag">
            <label>实名有礼</label>
            <i class="el-icon-caret-right"></i>
            <a class="youhui-title">实名认证领苏宁支付券</a>
          </div>
          <div class="other-tag">
            <label>云钻</label>
            <i class="el-icon-caret-right"></i>
            <a class="youhui-title">普通会员预计返184云钻</a>
          </div>
        </div>
        <div class="divide-line"></div>
        <div class="goods-info-xilie">
          <span class="info-title">系&nbsp;列</span>
          <div class="xilie-list">
            <ul class="tip-info">
              <li v-for="(item, index) in goodsTypeList" :key="index">
                <span :class="{'tags': index === 0, 'tages' : true}">{{ item }}</span>
                <i class="el-icon-check" v-show="index===0"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="buyCount">
          <span class="info-title">数&nbsp;量</span>
          <div class="goods-count">
            <el-input-number v-model="buCounts" :min="1" :max="10" size="mini"></el-input-number>
          </div>
        </div>
        <div class="op-but">
            <button class="buy-now" @click="buyNow(buCounts)">立即购买</button>
            <button class="add-shoppingcart" @click="addToShoppingCart(buCounts)">
              <i class="cart arrow down icon"></i>
              加入购物车
            </button>
        </div>
        <div class="divide-line"></div>
        <div class="fuwu-bar">
          <span class="info-title">服&nbsp;务</span>
          <div class="fuwu-list">
            <img src="../../../../static/img/服务/ji.png">
            <el-tooltip class="item" effect="light" content="苏宁为优质会员提供的快速退款服务" placement="bottom">
              <a href="#">急速退</a>
            </el-tooltip>
            <img src="../../../../static/img/服务/yan.png">
            <el-tooltip class="item" effect="light" content="若未按约定时效送达，苏宁将主动赔付" placement="bottom">
              <a href="#">配送延时赔</a>
            </el-tooltip>
            <img src="../../../../static/img/服务/tui.png">
            <el-tooltip class="item" effect="light" content="无理由退货，保购物无忧" placement="bottom">
              <a href="#">7天无理由退货(安装后不支持)</a>
            </el-tooltip>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import PicZoom from 'vue-piczoom'

export default {
  props: ['mainImg', 'goodsTypeList', 'mainImgList', 'goodname', 'goodprice'],
  components: {
    'pic-zoom': PicZoom
  },
  data () {
    return {
      nowImg: 0,
      buCounts: 1
    }
  },
  methods: {
    selected (index) {
      this.nowImg = index
      this.$emit('select-img', index)
    },
    buyNow (count) {
      this.$emit('buy-now', count)
    },
    addToShoppingCart (count) {
      this.$emit('add-shoppingcart', count)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font: normal 12px/1.5 Arial,Microsoft YaHei,SimSun;
  word-break: break-all;
}
.main-goods {
  width: 1000px;
  min-width: 1000px;
  clear: both;
  position: relative;
  z-index: 9;
  margin-top: 10px;
  margin: auto;
}
.goods-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 401px;
    height: 520px;
    z-index: 5;
}
.goods-img-list {
    position: relative;
    float: left;
    width: 340px;
    height: 64px;
    margin: 0 12px;
    overflow: hidden;
    margin-top: 10px;
}
.goods-main-img {
  position: relative;
  width: 402px;
  height: 402px;
  border: 1px solid #eee;
}
.goods-main-img img {
  height: 400px;
}
.goods-img-list ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 1000em;
    list-style: none;
}
.active.cur {
  float: left;
  width: 64px;
  height: 64px;
  border: 2px solid #ff8000;
  margin-right: 5px;
  cursor: pointer;
}
.cur {
    float: left;
    width: 64px;
    height: 64px;
    border: 2px solid white;
    margin-right: 5px;
    cursor: pointer;
}
.goods-img-list img {
  width: 60px;
}
.goods-info-title {
  padding: 13px 10px 12px;
  background: #fff;
  width: 500px;
}
.goods-info-title h1 {
  font: 700 16px/1.5 \5FAE\8F6F\96C5\9ED1;
  color: #222;
  min-height: 24px;
}
.goods-main-info {
    height: 800px;
    width: 550px;
    padding-right: 210px;
    padding-left: 10px;
    position: relative;
    margin-left: 400px;
    padding: 0 0 8px 20px;
    min-height: 520px;
    z-index: 4;
}
.icon {
  background-color: #f50;
}
.goods-info-title h1 span {
    float: left;
    min-width: 42px;
    padding: 0 1px;
    height: 20px;
    margin: 2px 5px 0 0;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: #fff;
    line-height: 20px;
    vertical-align: middle;
}
.goods-info-price {
  position: relative;
  min-height: 120px;
  width: 500px;
  background: rgb(255, 248, 243);
  padding-top: 50px;
}
.info-title {
  float: left;
  letter-spacing: .5em;
  width: 6em;
  font-family: simsun;
  color: #999;
}
.price-area {
  float: left;
  height: 28px;
  margin-top: -10px;
  color: #e00;
}
.price-area i{
  font-size: 18px;
  font-family: Arial;
}
.price-area span {
  font-size: 24px;
  font-family: Tahoma;
  font: 700 30px/25px Tahoma;
}
.goods-info-youhui {
  margin-top: 20px;
  margin-bottom: 20px;
}
.youhui-title {
  height: 14px;
  margin-bottom: 10px;
  width: 200px;
  color: #666;
}
.youhui-quan1,.youhui-quan2 {
    position: relative;
    color: #fff;
    line-height: 18px;
    margin-right: 10px;
    margin-left: 72px;
    width: 350px;
}
.youhui-quan1 span,.youhui-quan2 span {
    border-top: 1px solid #f60;
    border-bottom: 1px solid #f60;
    line-height: 16px;
    padding: 0 2px 0 4px;
    background-color: #f60;
    display: inline-block;
}
.youhui-quan2 {
  margin-top: 3px;
  width: 460px;
}
.other-tag label {
    float: left;
    width: 52px;
    margin-top: 1px;
    height: 16px;
    line-height: 16px;
    color: #f60;
    text-align: center;
    border: 1px solid #f60;
}
.other-tag {
  padding-left: 79px;
  margin-top: 3px;
  width: 275px;
}
.el-icon-caret-right {
  color: #666;
}
.divide-line {
  border-top: 1px solid #ddd;
}
.goods-info-xilie {
  margin: 30px 0px;
  height: 100px;
}
.tip-info {
  list-style: none;
}
.tip-info li {
    float: left;
    z-index: 666;
    margin-top: -12px;
    margin-left: 5px;
}
.tages {
    display: block;
    position: relative;
    height: 38px;
    line-height: 38px;
    padding: 0px 5px;
    border: 1px solid #ddd;
    color: #666;
    text-decoration: none;
    white-space: nowrap;
}
.tags {
  border-color: #ff8000;
}
.tip-info i {
  color: #ff8000;
  height: 12px;
  width: 12px;
  position: relative;
  top: -12px;
}
.goods-count {
  width: 202px;
  height: 30px;
}
.goods-count>>>.el-input-number {
  margin-top: -5px;
  width: 90px;
  position: relative;
  left: -22px;
}
.goods-count>>>.el-input-number>span {
  height: 26px;
  padding-top: 5px;
}
.op-but {
  margin-top: 5px;
  width: 405px;
  margin-bottom: 25px;
}
.op-but i{
  background-color: rgba(0,0,0,0);
}
.buy-now {
    font: 16px/40px microsoft yahei;
    font-weight: 600;
    border-radius: 3px;
    height: 40px;
    background: #663200;
    color: #fff;
    width: 115px;
    outline: none;
    border: none;
    margin-right: 10px;
}
.add-shoppingcart {
  background: #f50;
  color: #fff;
  font: 16px/40px microsoft yahei;
  font-weight: 600;
  border-radius: 3px;
  width: 135px;
  height: 40px;
  border: none;
  outline: none;
}
.fuwu-bar {
  margin: 30px 0px;
  position: relative;
  width: 460px;
}
.fuwu-list {
  position: relative;
  left: -9px;
}
.fuwu-list img{
  width: 14px;
}
.fuwu-list a {
  position: relative;
  margin-right: 20px;
  color: black;
  top: -2px;
}
</style>
