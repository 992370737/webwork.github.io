<template>
  <div class="detail-goods-part">
      <ul class="goods-detail-list">
          <li :class="{'active':openGoodsDetail}" @click="openGoodsDetail=true,openCanShu=false,openReviews=false">
              <span>商品详情</span>
          </li>
          <li :class="{'active':openCanShu}" @click="openGoodsDetail=false,openCanShu=true,openReviews=false">
              <span>参数</span>
          </li>
          <li :class="{'active':openReviews}" @click="openGoodsDetail=false,openCanShu=false,openReviews=true">
              <span>评价&nbsp;({{ reviewsCount }})</span>
          </li>
      </ul>
      <div class="clear"></div>
      <div class="goods-detail" v-show="openGoodsDetail">
          <ul>
              <li v-for="(item, index) in detailImgList" :key="index">
                  <img :src="item">
              </li>
          </ul>
      </div>
      <div class="goods-canshu" v-show="openCanShu">
          <img :src="canshuUrl">
      </div>
      <div class="goods-reviews" v-show="openReviews">
          <ul>
              <li v-for="(item, index) in reviews" :key="index">
                  <el-card>
                    <div class="user-info">
                        <el-avatar :size="100" :src="touxiang[index%3]"></el-avatar>
                        <div class="user-name">
                            <span>{{ item.username }}</span>
                        </div>
                    </div>
                    <div class="user-review">
                        <div class="stars">
                            <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                        </div>
                        <div class="massege">
                            <span>{{ item.content }}</span>
                        </div>
                        <div class="time">
                            <time>{{ item.time }}</time>
                        </div>
                    </div>
                  </el-card>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  props: ['canshuUrl', 'detailImgList'],
  data () {
    return {
      openGoodsDetail: true,
      openCanShu: false,
      openReviews: false,
      reviewsCount: 0,
      reviews: [],
      touxiang: [
        '../../../../static/img/用户头像/0000000000_25.jpg',
        '../../../../static/img/用户头像/0000000000_27.jpg',
        '../../../../static/img/用户头像/0000000000_30.jpg'
      ],
      value: 5
    }
  },
  created () {
    Axios.get('/api/get/reviews').then(res => {
      this.reviews = res.data.reviews
      this.reviewsCount = this.reviews.length
    })
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.detail-goods-part {
    margin: auto;
    width: 810px;
    border: 1px solid #eee;
    background: #fff;
    padding: 0px 10px;
}
.clear {
    clear: both;
}
ul {
    list-style: none;
}
.goods-detail-list {
    width: 808px;
    margin: auto;
    margin-bottom: 20px;
    height: 55px;
    margin-left: -10px;
    background: #f7f7f7;
}
.goods-detail-list li {
    float: left;
    width: 150px;
    padding: 10px 25px;
    height: 55px;
    line-height: 55px;
    font: normal 14px/34px \5FAE\8F6F\96C5\9ED1;
    color: #222;
    text-align: center;
}
.active {
    height: 47px;
    line-height: 47px;
    padding: 0 25px;
    line-height: 34px;
    color: #f60;
    border-top: 2px solid #f60;
    background: #fff;
}
.goods-canshu {
    height: 800px;
}
.goods-canshu img{
    width: 790px;
}
.user-name {
    height: 50px;
    text-align: center;
    margin-top: 20px;
}
.user-review,.user-info {
    float: left;
}
.user-review {
    width: 600px;
    margin-left: 30px;
}
.stars {
    border-bottom: 1px solid #999;
}
.massege {
    margin: 10px 0px;
}
.time {
    border-top: 1px solid #999;
    padding-top: 10px;
}
</style>
