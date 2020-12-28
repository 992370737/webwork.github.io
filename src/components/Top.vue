<template>
  <div class="top-list">
    <div class="top-left">
      <div class="left-orther-menu-down" @mouseover="openWebNavigation=true" @mouseout="openWebNavigation=false">
        <div class="menu-down">
          <span>网站导航</span>
          <div class="menu-down-icon">
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
        <div class="cut-flow"></div>
        <div v-show="openWebNavigation" class="nav-drop-menu">
          <dl>
            <dt>特色购物</dt>
            <dd>
              <p>苏宁互联</p>
              <p>苏宁达人</p>
              <p>苏宁卡</p>
              <p>苏宁国际</p>
              <p>易回收</p>
              <p>二手优品</p>
              <p>领券中心</p>
              <p>苏宁Outlets</p>
              <p>导购指南</p>
              <p>江苏馆</p>
            </dd>
          </dl>
          <dl>
            <dt>主题频道</dt>
            <dd>
              <p>电器城</p>
              <p>苏宁超市</p>
              <p>手机</p>
              <p>运动馆</p>
              <p>图书</p>
              <p>红孩子母婴</p>
              <p>美妆个护</p>
              <p>电脑</p>
              <p>服装城</p>
              <p>智能生活</p>
              <p>家装馆</p>
              <p>苏宁汽车</p>
              <p>排行榜</p>
              <p>医药馆</p>
            </dd>
          </dl>
          <dl>
            <dt>生活助手</dt>
            <dd>
              <p>零钱宝</p>
              <p>手机充值</p>
              <p>转账还款</p>
              <p>约服务</p>
              <p>水电煤</p>
              <p>保险</p>
              <p>机票</p>
              <p>酒店</p>
            </dd>
          </dl>
          <dl>
            <dt>会员服务</dt>
            <dd>
              <p>会员联盟</p>
              <p>延长保修</p>
              <p>易付宝</p>
              <p>苏宁理财</p>
              <p>苏宁金融</p>
            </dd>
          </dl>
          <dl>
            <dt>更多热点</dt>
            <dd>
              <p>PP视频</p>
              <p>合作招商</p>
              <p>苏宁联盟</p>
              <p>用户体验</p>
              <p>苏宁云</p>
              <p>苏宁足球</p>
              <p>苏宁公益</p>
              <p>苏宁有货</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="left-orther-menu-down" @mouseover="openBusinessIn=true" @mouseout="openBusinessIn=false">
        <div class="menu-down">
          <span>商家入驻</span>
          <div class="menu-down-icon">
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
        <div class="cut-flow"></div>
        <div v-show="openBusinessIn" class="other-drop-menu">
          <span>合作招商</span>
          <span>服务市场</span>
          <span>金融中心</span>
          <span>培训中心</span>
          <span>易通天下</span>
          <span>规则中心</span>
          <span>规则众议院</span>
        </div>
      </div>
      <div class="left-orther-menu-down" @mouseover="openCustomerService=true" @mouseout="openCustomerService=false">
        <div class="menu-down">
          <span>客户服务</span>
          <div class="menu-down-icon">
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
        <div class="cut-flow"></div>
        <div v-show="openCustomerService" class="other-drop-menu">
          <span>苏宁帮客</span>
          <span>帮助中心</span>
          <span>退换/维修</span>
          <span>意见反馈</span>
          <span>30天包退</span>
          <span>售后无忧</span>
        </div>
      </div>
    </div>
    <div class="top-right">
      <div class="right-orther-menu-down" @mouseover="openShoppingCar=true" @mouseout="openShoppingCar=false">
        <div class="menu-down">
          <div class="menu-shopping-car-icon">
            <i class="el-icon-shopping-cart-2"></i>
          </div>
          <span @click="toShoppingCar">购物车</span>
          <div class="menu-down-icon">
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
        <div class="cut-flow"></div>
        <div v-show="openShoppingCar" class="other-drop-menu-shopping-car">
          <div class="null-goods" v-show="loginUserName===''">
            <span>请先</span>
            <router-link to="/login">登录</router-link>
          </div>
          <div v-if="!(loginUserName==='')&&shoppingCar.length===0" class="null-goods">
            <span>暂无商品</span>
          </div>
          <div v-else>
            <ul class="shoppingcar-menu">
              <li v-for="(item, index) in shoppingCar" :key="index">
                <img :src="item.mainImg[0]">
                <div class="shoppingcar-text">{{ item.name }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-orther-menu-down" @mouseover="openMyEgo=true" @mouseout="openMyEgo=false">
        <div class="menu-down">
          <span>我的易购</span>
          <div class="menu-down-icon">
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
        <div class="cut-flow"></div>
        <div v-show="openMyEgo" class="other-drop-menu">
          <span>我的消息</span>
          <span>我的关注</span>
          <span>苏宁会员</span>
          <span>我的金融</span>
          <span>我的任性付</span>
          <span>我的优惠券</span>
        </div>
      </div>
      <div class="right-orther-menu-down" @mouseover="openMyOrder=true" @mouseout="openMyOrder=false">
        <div class="menu-down">
          <span>我的订单</span>
          <div class="menu-down-icon">
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
        <div class="cut-flow"></div>
        <div v-show="openMyOrder" class="other-drop-menu-right">
          <span>待支付</span>
          <span>待收货</span>
          <span>待评价</span>
          <span>修改订单</span>
        </div>
      </div>
      <div class="right-orther-menu-down" v-show="!logining">
        <div class="register-but" style="margin-right:10px;">
          <router-link to="/register">注册有礼</router-link>
        </div>
        <div class="login-but">
          <router-link to="/login">去登录</router-link>
        </div>
      </div>
      <div class="right-orther-menu-down" v-show="logining">
        <div class="user-img">
          <el-avatar size="small" src="../../static/img/用户头像/0000000000_27.jpg"></el-avatar>
        </div>
        <div class="user-name">
          <span>{{ loginUserName }}</span>
        </div>
        <a href="#" @click="logoutUser" class="logout-but">注销</a>
      </div>
    </div>
    <div class="cut-flow"></div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data () {
    return {
      openWebNavigation: false,
      openBusinessIn: false,
      openCustomerService: false,
      openMyOrder: false,
      openMyEgo: false,
      openShoppingCar: false,
      logining: false,
      loginUserName: '',
      loginUser: {},
      shoppingCar: []
    }
  },
  created () {
    if (this.$store.state.loginUser === '') {
      this.logining = false
    } else {
      this.loginUserName = this.$store.state.loginUser
      this.logining = true
      Axios.get('http://localhost:3000/user', {
        params: {
          username: this.loginUserName
        }
      }).then(res => {
        this.loginUser = res.data[0]
        this.shoppingCar = this.loginUser.shoppingcar
      })
    }
  },
  methods: {
    logoutUser () {
      this.$store.commit('logoutUsers')
      this.logining = false
    },
    toShoppingCar () {
      if (this.loginUserName === '') {
        this.$message.error('请先登录')
        this.$router.push('/login')
      } else {
        this.$router.push({name: 'shoppingcar', params: {username: this.loginUserName}})
      }
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    font-size: 12px;
  }
  ul {
    list-style: none;
  }
  .top-list {
    margin: auto;
    width: 1190px;
    height: 35px;
    position: relative;
    min-width: 990px;
    line-height: 35px;
    border-bottom: 1px solid #eee;
    background: #f5f5f5;
  }
  .login-but,.register-but {
    width: 65px;
    text-align: center;
    float:right;
  }
  .login-but a,.register-but a {
    text-decoration: none;
  }
  .login-but a {
    color: black;
  }
  .login-but a:hover,.register-but a {
    color: #ff8000;
  }
  .top-left {
    float: left;
  }
  .top-right {
    float: right;
  }
  .cut-flow {
    clear: both;
  }
  .menu-down {
    width: 75px;
  }
  .menu-down:hover {
    color: #ff8000;
    cursor: default;
  }
  .menu-down span {
    float: left;
  }
  .menu-down-shopping-car {
    width: 85px;
  }
  .menu-shopping-car-icon {
    float: left;
  }
  .menu-down-shopping-car span {
    float: left;
  }
  .menu-down-icon {
    float: left;
  }
  .left-orther-menu-down {
    float: left;
  }
  .right-orther-menu-down {
    float: right;
  }
  .nav-drop-menu {
    z-index: 7691;
    width: 985px;
    padding: 20px 0;
    position: absolute;
    top: 35px;
    border: 1px solid #ddd;
    background: #fff;
    margin-left: -1px;
  }
  .nav-drop-menu dl {
    float: left;
    width: 176px;
    border-right: 1px solid #eee;
    padding-left: 20px;
  }
  .nav-drop-menu dt {
    height: 25px;
    width: 100%;
    font-size: 14px;
    font-family: "Microsoft Yahei";
    line-height: 17px;
  }
  .nav-drop-menu dd {
    width: 100%;
    overflow: hidden;
  }
  .nav-drop-menu p {
    float: left;
    height: 25px;
    width: 78px;
    line-height: 25px;
  }
  .other-drop-menu,.other-drop-menu-shopping-car {
    z-index: 7691;
    left: auto;
    width: 162px;
    padding-top: 5px;
    padding-bottom: 5px;
    position: absolute;
    top: 35px;
    margin-left: -10px;
    border: 1px solid #ddd;
    background: #fff;
  }
  .other-drop-menu span {
    height: 28px;
    line-height: 28px;
    display: block;
    padding-left: 10px;
    width: 71px;
    float: left;
  }
  .other-drop-menu-right {
    z-index: 7691;
    left: auto;
    width: 71px;
    padding-top: 5px;
    padding-bottom: 5px;
    position: absolute;
    top: 35px;
    border: 1px solid #ddd;
    background: #fff;
    margin-left: -9px;
  }
  .other-drop-menu-right span {
    height: 28px;
    line-height: 28px;
    display: block;
    padding-left: 10px;
    width: 71px;
    float: left;
  }
  .other-drop-menu-shopping-car {
    width: 270px;
    right: 0px;
  }
  .user-img,.user-name,.logout-but {
    float: left;
    margin-right: 10px;
  }
  .user-img {
    position: relative;
    top: 3px;
  }
  .null-goods {
    text-align: center;
  }
  .shoppingcar-menu li{
    width: 250px;
    height: 60px;
    line-height: 12px;
    margin: 0px 10px 10px 10px;
    padding: 0px 0px 5px 0px;
    border-bottom: 1px solid #999;
  }
  .shoppingcar-text {
    width: 150px;
    height: 25px;
    float: left;
    text-align: center;
    font-size: 10px;
    overflow: hidden;
    margin-top: 15px;
    margin-left: 15px;
  }
  .shoppingcar-menu img {
    height: 50px;
    float: left;
  }
</style>
