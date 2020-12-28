<template>
  <div class="flash-purchase-body">
    <div class="flash-purchase-roll">
      <div class="flash-purchase-img">
          <el-card>
              <h3>限时特惠</h3>
              <img src="../../../../static/img/flash.png">
              <div class="time-area">
                  <div class="time">{{ hour }}</div>
                  <div class="center-icon">:</div>
                  <div class="time">{{ min }}</div>
                  <div class="center-icon">:</div>
                  <div class="time">{{ second }}</div>
              </div>
          </el-card>
          <div class="clear"></div>
      </div>
      <el-carousel arrow="never" height="330px">
              <el-carousel-item>
                  <div class="goods-menu">
                  <el-card >
                      <img src="../../../../static/img/电脑/2019款 Apple iPad mini 5 平板电脑 7.9英寸（64GB WLAN版 MUQW2CHA 深空灰色）/main.jpg"
                      class="image">
                      <div class="text-area">
                          <span>2019款 Apple iPad mini 5 平板电脑 7.9英寸（64GB WLAN版 MUQW2CHA 深空灰色）</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>2921</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>3099</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
                  <div class="goods-menu">
                      <el-card >
                      <img src="../../../../static/img/电视/小米(mi)全面屏电视 43英寸E43K 人工智能 全高清网络液晶平板彩电大屏电视机自营/main.jpg"
                      class="image">
                      <div class="text-area">
                          <span>小米(mi)全面屏电视 43英寸E43K 人工智能 全高清网络液晶平板彩电大屏电视机自营</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>1250</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>1399</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
                  <div class="goods-menu">
                      <el-card >
                      <img src="../../../../static/img/电脑/联想Lenovo 拯救者Y7000P 15.6英寸 i7-10875H 16G 512GB RTX2060 6G独显 144HZ 电竞屏 发烧级 吃鸡游戏本 笔记本电脑 钛晶灰/main.jpg"
                      class="image">
                      <div class="text-area">
                          <span>联想Lenovo 拯救者Y7000P 15.6英寸 i7-10875H 16G 512GB RTX2060 6G独显 144HZ 电竞屏 发烧级 吃鸡游戏本 笔记本电脑 钛晶灰</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>8699</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>10299</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
                  <div class="goods-menu">
                      <el-card >
                      <img src="../../../../static/img/电视/小米(mi)电视4A 60英寸 4K超高清 人工智能语音 网络液晶平板彩电大屏电视机自营/main.jpg"
                      class="image">
                      <div class="text-area">
                          <span>小米(mi)电视4A 60英寸 4K超高清 人工智能语音 网络液晶平板彩电大屏电视机自营</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>2150</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>2399</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
              </el-carousel-item>
              <el-carousel-item>
                  <div class="goods-menu">
                  <el-card >
                      <img src="../../../../static/img/空调/美的(Midea) 1.5匹 新能效变频 智能冷暖挂机空调 1.5P挂壁式家用空调极光先锋KFR-35GWN8MHA1/main1.jpg"
                      class="image">
                      <div class="text-area">
                          <span>美的(Midea) 1.5匹 新能效变频 智能冷暖挂机空调 1.5P挂壁式家用空调极光先锋KFR-35GWN8MHA1</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>2150</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>2599</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
                  <div class="goods-menu">
                      <el-card >
                      <img src="../../../../static/img/冰箱/海尔（Haier）515升 对开门冰箱 AFR精控多路送风 DEO净味 双变频节能 家用电冰箱 BCD-515WDPD/main.jpg"
                      class="image">
                      <div class="text-area">
                          <span>海尔（Haier）515升 对开门冰箱 AFR精控多路送风 DEO净味 双变频节能 家用电冰箱 BCD-515WDPD</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>2980</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>3399</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
                  <div class="goods-menu">
                      <el-card >
                      <img src="../../../../static/img/洗衣机/西门子（SIEMENS）8公斤 洗干一体机 全自动变频滚筒洗衣机 洗烘一体 热风除菌 XQG80-WD12G4681W/main.jpg"
                      class="image">
                      <div class="text-area">
                          <span>西门子（SIEMENS）8公斤 洗干一体机 全自动变频滚筒洗衣机 洗烘一体 热风除菌 XQG80-WD12G4681W</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>3980</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>4399</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
                  <div class="goods-menu">
                      <el-card >
                      <img src="../../../../static/img/空调/格力（GREE）新能效1.5匹变频冷暖家用挂机空调KFR-35GW(35530)FNhAk-B3 天丽 三级能效/main1.jpg"
                      class="image">
                      <div class="text-area">
                          <span>格力（GREE）新能效1.5匹变频冷暖家用挂机空调KFR-35GW(35530)FNhAk-B3 天丽 三级能效</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>2250</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>2999</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
              </el-carousel-item>
              <el-carousel-item>
                  <div class="goods-menu">
                  <el-card >
                      <img src="../../../../static/img/空调/格力（GREE）新能效3匹变频冷暖空调柜机 KFR-72LWNhAa1BAs 云锦Ⅱ一级能效节能省电WIFI静音柜式/main1.jpg"
                      class="image">
                      <div class="text-area">
                          <span>格力（GREE）新能效3匹变频冷暖空调柜机 KFR-72LWNhAa1BAs 云锦Ⅱ一级能效节能省电WIFI静音柜式</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>2699</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>2450</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
                  <div class="goods-menu">
                      <el-card >
                      <img src="../../../../static/img/冰箱/海尔（Haier）515升 对开门冰箱 AFR精控多路送风 DEO净味 双变频节能 家用电冰箱 BCD-515WDPD/main.jpg"
                      class="image">
                      <div class="text-area">
                          <span>海尔（Haier）515升 对开门冰箱 AFR精控多路送风 DEO净味 双变频节能 家用电冰箱 BCD-515WDPD</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>2980</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>3399</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
                  <div class="goods-menu">
                      <el-card >
                      <img src="../../../../static/img/电脑/联想(Lenovo)小新Air15 2021锐龙版全面屏轻薄笔记本电脑(8核R7-4800U 16G 512G 高色域)深空灰/main.jpg"
                      class="image">
                      <div class="text-area">
                          <span>联想(Lenovo)小新Air15 2021锐龙版全面屏轻薄笔记本电脑(8核R7-4800U 16G 512G 高色域)深空灰</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>4799</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>5499</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
                  <div class="goods-menu">
                      <el-card >
                      <img src="../../../../static/img/电视/创维(SKYWORTH)55A4 55英寸免遥控声控AI 智能投屏电视 4K HDR 超画质调校 家庭K歌 教育后台/main.jpg"
                      class="image">
                      <div class="text-area">
                          <span>创维(SKYWORTH)55A4 55英寸免遥控声控AI 智能投屏电视 4K HDR 超画质调校 家庭K歌 教育后台</span>
                      </div>
                      <div class="price-area">
                          <div class="price">
                              <i>¥</i>
                              <span>2450</span>
                          </div>
                          <div class="refprice">
                              <i>¥</i>
                              <span>2699</span>
                          </div>
                      </div>
                  </el-card>
                  </div>
              </el-carousel-item>
      </el-carousel>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hour: 23,
      min: 59,
      second: 59
    }
  },
  mounted: function () {
    setInterval(() => {
      if (this.second <= 0) {
        this.second = 59
        if (this.min <= 0) {
          this.min = 59
          if (this.hour <= 0) {
            this.hour = 23
          } else {
            this.hour -= 1
          }
        } else {
          this.min -= 1
        }
      } else {
        this.second -= 1
      }
    }, 1000)
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.flash-purchase-body {
  width: 1190px;
  margin: auto;
  margin-top: 30px;
}
.el-carousel {
  background-color: white;
  height: 302.8px;
  overflow: hidden;
}
.goods-menu {
  margin-left: 10px;
  float: left;
  width: 230px;
  height: 330px;
  cursor: default;
}
.goods-menu img {
  height: 190px;
}
.flash-purchase-roll {
  margin: auto;
  width: 1190px;
}
.text-area {
  overflow: hidden;
  width: 190px;
  height: 40px;
}
.clear {
  clear: both;
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
.refprice {
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-left: 6px;
  margin-top: 8px;
  text-decoration: line-through;
  float: left;
}
.flash-purchase-img {
  width: 230px;
  height: 330px;
  float: left;
}
.flash-purchase-img h3 {
  text-align: center;
  color: #ff8000;
  font-size: 200%;
  margin-top: 10px;
}
.flash-purchase-img .el-card {
  background-color: #f1eded;
}
.flash-purchase-img img {
  margin: 20px 0px 0px 40px;
}
.time-area {
  width: 190px;
  text-align: center;
  height: 67px;
  font-size: 300%;
}
.time {
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  padding-top: 15px;
  float: left;
}
.center-icon {
  padding-top: 10px;
  float: left;
}
</style>
