<template>
  <div class="recomond-goods">
      <div class="top-img">
          <img src="../../../../static/img/goods-title.png">
      </div>
      <div class="goods-nav-bar">
          <ul class="nav-bar-list">
              <li @mouseover="openAirCondition=true,
              openComputer=false,
              openRefrigerator=false,
              openTelevision=false,
              openWashMachine=false">
                  <p class="text" :class="{'change':openAirCondition}">
                      <img v-show="!openAirCondition" src="../../../../static/img/推荐货物图标/kt1.png">
                      <img v-show="openAirCondition" src="../../../../static/img/推荐货物图标/kt2.png">
                      <span>品质空调</span>
                  </p>
                  <p class="retext" :class="{'active':openAirCondition}">
                      <span>知您冷暖</span>
                  </p>
              </li>
              <li @mouseover="openTelevision=true,
              openAirCondition=false,
              openComputer=false,
              openRefrigerator=false,
              openWashMachine=false">
                  <p class="text" :class="{'change':openTelevision}">
                      <img v-show="!openTelevision" src="../../../../static/img/推荐货物图标/ds1.png">
                      <img v-show="openTelevision" src="../../../../static/img/推荐货物图标/ds2.png">
                      <span>视觉盛宴</span>
                  </p>
                  <p class="retext" :class="{'active':openTelevision}">
                      <span>蜗居不无聊</span>
                  </p>
              </li>
              <li @mouseover="openRefrigerator=true,
              openTelevision=false,
              openAirCondition=false,
              openComputer=false,
              openWashMachine=false">
                  <p class="text" :class="{'change':openRefrigerator}">
                      <img v-show="!openRefrigerator" src="../../../../static/img/推荐货物图标/bx1.png">
                      <img v-show="openRefrigerator" src="../../../../static/img/推荐货物图标/bx2.png">
                      <span>精选冰箱</span>
                  </p>
                  <p class="retext" :class="{'active':openRefrigerator}">
                      <span>锁鲜有营养</span>
                  </p>
              </li>
              <li @mouseover="openWashMachine=true,
              openRefrigerator=false,
              openTelevision=false,
              openAirCondition=false,
              openComputer=false">
                  <p class="text" :class="{'change':openWashMachine}">
                      <img v-show="!openWashMachine" src="../../../../static/img/推荐货物图标/xyj1.png">
                      <img v-show="openWashMachine" src="../../../../static/img/推荐货物图标/xyj2.png">
                      <span>洗衣必备</span>
                  </p>
                  <p class="retext" :class="{'active':openWashMachine}">
                      <span>速度与激情</span>
                  </p>
              </li>
              <li @mouseover="openComputer=true,
              openWashMachine=false,
              openRefrigerator=false,
              openTelevision=false,
              openAirCondition=false">
                  <p class="text" :class="{'change':openComputer}">
                      <img v-show="!openComputer" src="../../../../static/img/推荐货物图标/dn1.png">
                      <img v-show="openComputer" src="../../../../static/img/推荐货物图标/dn2.png">
                      <span>吃鸡装备</span>
                  </p>
                  <p class="retext" :class="{'active':openComputer}">
                      <span>游戏杀手锏</span>
                  </p>
              </li>
          </ul>
      </div>
      <div class="main-goods" v-show="openAirCondition">
          <ul class="goods-menu-list">
              <li v-for="(item, index) in airConditioners" :key="index" class="goods-menu">
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
      <div class="main-goods" v-show="openTelevision">
          <ul class="goods-menu-list">
              <li v-for="(item, index) in televisions" :key="index" class="goods-menu">
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
      <div class="main-goods" v-show="openRefrigerator">
          <ul class="goods-menu-list">
              <li v-for="(item, index) in Refrigerators" :key="index" class="goods-menu">
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
      <div class="main-goods" v-show="openWashMachine">
          <ul class="goods-menu-list">
              <li v-for="(item, index) in washingMachines" :key="index" class="goods-menu">
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
      <div class="main-goods" v-show="openComputer">
          <ul class="goods-menu-list">
              <li v-for="(item, index) in computers" :key="index" class="goods-menu">
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      computers: [],
      Refrigerators: [],
      televisions: [],
      airConditioners: [],
      washingMachines: [],
      openComputer: false,
      openRefrigerator: false,
      openTelevision: false,
      openAirCondition: true,
      openWashMachine: false
    }
  },
  created () {
    this.getRefrigerators()
    this.getTelevisions()
    this.getComputers()
    this.getAirConditioners()
    this.getWashingMachines()
  },
  methods: {
    getRefrigerators () {
      axios.get('http://localhost:3000/Refrigerators').then((res) => {
        // JSON.parse(JSON.stringify(res.data))
        this.Refrigerators = res.data
      })
    },
    getTelevisions () {
      axios.get('http://localhost:3000/televisions').then(res => {
        this.televisions = res.data
      })
    },
    getComputers () {
      axios.get('http://localhost:3000/computers').then(res => {
        this.computers = res.data
      })
    },
    getAirConditioners () {
      axios.get('http://localhost:3000/airConditioners').then(res => {
        this.airConditioners = res.data
      })
    },
    getWashingMachines () {
      axios.get('http://localhost:3000/washingMachines').then(res => {
        this.washingMachines = res.data
      })
    },
    closeMenu (item) {
      item = true
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
}
.top-img img {
  width: 1190px;
}
.goods-menu {
  margin-right: 12.5px;
  float: left;
  width: 228px;
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
.main-goods {
  width: 1190px;
}
.goods-menu-list {
  list-style: none;
  width: 1210px;
}
.clear {
  clear: both;
}
.goods-nav-bar {
  width: 100%;
  height: 70px;
  overflow: hidden;
  background: #fff;
  margin-bottom: 12px;
  border-radius: 6px;
}
.recomond-goods {
  width: 1190px;
  margin: auto;
}
.goods-nav-bar ul {
  list-style: none;
}
.goods-nav-bar li {
  float: left;
  height: 70px;
  width: 238px;
  text-align: center;
  overflow: hidden;
  padding-top: 6px;
  cursor: pointer;
}
.text {
  position: relative;
  font-size: 17px;
  font-weight: bold;
  height: 24px;
  letter-spacing: .5px;
  color: #333;
  line-height: 24px;
  margin-bottom: 2px;
  overflow: hidden;
  display: inline-block;
}
.text img {
  float: left;
  width: 20px;
  height: 20px;
  margin-top: 3px;
  margin-right: 3px;
}
.retext {
  font-size: 14px;
  height: 26px;
  color: #999;
  line-height: 26px;
  padding: 0 10px;
  border-radius: 3px;
}
.active {
  color: #fff;
  background: #ff8000;
  width: 100px;
  margin: auto;
}
.change {
  color: #ff8000;
}
</style>
