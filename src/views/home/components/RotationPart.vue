<template>
  <div class="banner-bar">
    <div class="classfiction">
      <div class="classficton-top-list">
        <ul class="classfiction-lists">
          <li class="list-pic">
            <img src="../../../../static/img/轮播顶部列表/1.png">
          </li>
          <li class="list-pic">
            <img src="../../../../static/img/轮播顶部列表/2.png">
          </li>
          <li class="list-pic">
            <img src="../../../../static/img/轮播顶部列表/3.png">
          </li>
          <li>苏宁超市</li>
          <li>电器城</li>
          <li>生活家电</li>
          <li>手机数码</li>
          <li>金融</li>
        </ul>
      </div>
      <div class="classfiction-nav">
        <a class="classfiction-but">
          <i class="list ul icon"></i>
          <span>分类</span>
        </a>
        <div class="classfiction-nav-list">
          <ul class="classfiction-list">
            <li @mouseover="openMenus[0]=true,openMenu=true" @mouseout="openMenus[0]=false,openMenu=false">
                <img src="../../../../static/img/分类图片/sj.png">
                <span>手机/运营商/智能数码</span>
            </li>
            <li @mouseover="openMenus[1]=true,openMenu=true" @mouseout="openMenus[1]=false,openMenu=false">
                <img src="../../../../static/img/分类图片/jj.png">
                <span>家居/家用电器/家装</span>
            </li>
            <li @mouseover="openMenus[2]=true,openMenu=true" @mouseout="openMenus[2]=false,openMenu=false">
                <img src="../../../../static/img/分类图片/yf.png">
                <span>男装/女装/童装</span>
            </li>
            <li @mouseover="openMenus[3]=true,openMenu=true" @mouseout="openMenus[3]=false,openMenu=false">
                <img src="../../../../static/img/分类图片/dn.png">
                <span>电脑办公/电竞/相机</span>
            </li>
            <li @mouseover="openMenus[4]=true,openMenu=true" @mouseout="openMenus[4]=false,openMenu=false">
                <img src="../../../../static/img/分类图片/sw.png">
                <span>食品/酒水/生鲜</span>
            </li>
            <li @mouseover="openMenus[5]=true,openMenu=true" @mouseout="openMenus[5]=false,openMenu=false">
                <img src="../../../../static/img/分类图片/yd.png">
                <span>运动/户外/骑行</span>
            </li>
            <li @mouseover="openMenus[6]=true,openMenu=true" @mouseout="openMenus[6]=false,openMenu=false">
                <img src="../../../../static/img/分类图片/yl.png">
                <span>医药健康</span>
            </li>
            <li @mouseover="openMenus[7]=true,openMenu=true" @mouseout="openMenus[7]=false,openMenu=false">
                <img src="../../../../static/img/分类图片/ts.png">
                <span>图书/文学/艺术</span>
            </li>
          </ul>
          <div class="display-menu" v-show="openMenu">
            <div class="list-menu" v-show="openMenus[0]">
              <div class="sort-but">
                <a>手机电脑馆</a>
                <a>手机频道</a>
                <a>数码频道</a>
              </div>
              <div class="cate-list">
                <dl>
                  <dt>手机通信</dt>
                  <dd>全部手机</dd>
                  <dd>5G手机</dd>
                  <dd>游戏手机</dd>
                </dl>
                <dl>
                  <dt>手机配件</dt>
                  <dd>苹果数据线</dd>
                  <dd>安卓数据线</dd>
                  <dd>手机壳</dd>
                </dl>
                <dl>
                  <dt>智能设备</dt>
                  <dd>智能手表</dd>
                  <dd>智能门锁</dd>
                  <dd>无人机</dd>
                </dl>
                <dl>
                  <dt>影音电子</dt>
                  <dd>无线耳机</dd>
                  <dd>降噪耳机</dd>
                  <dd>AirPods</dd>
                </dl>
                <dl>
                  <dt>电子教育</dt>
                  <dd>学生电脑/学习机</dd>
                  <dd>步步高家教机</dd>
                  <dd>儿童手表</dd>
                </dl>
              </div>
            </div>
            <div class="list-menu" v-show="openMenus[1]">
              <div class="sort-but">
                <a>家具馆</a>
                <a>电器城</a>
                <a>家装店</a>
              </div>
              <div class="cate-list">
                <dl>
                  <dt>家具</dt>
                  <dd>沙发</dd>
                  <dd>床垫</dd>
                  <dd>电视柜</dd>
                </dl>
                <dl>
                  <dt>空调</dt>
                  <dd>挂机</dd>
                  <dd>柜机</dd>
                  <dd>变频</dd>
                </dl>
                <dl>
                  <dt>电视</dt>
                  <dd>65英寸</dd>
                  <dd>55英寸</dd>
                  <dd>创维</dd>
                </dl>
                <dl>
                  <dt>冰箱</dt>
                  <dd>多门</dd>
                  <dd>对开门</dd>
                  <dd>十字对开</dd>
                </dl>
                <dl>
                  <dt>定制装修</dt>
                  <dd>定制橱柜</dd>
                  <dd>定制衣柜</dd>
                  <dd>定制电视柜</dd>
                </dl>
              </div>
            </div>
            <div class="list-menu" v-show="openMenus[2]">
              <div class="sort-but">
                <a>服装城</a>
                <a>大牌特卖</a>
                <a>皮具箱包</a>
              </div>
              <div class="cate-list">
                <dl>
                  <dt>当季流行</dt>
                  <dd>T恤</dd>
                  <dd>男士衬衫</dd>
                  <dd>女士牛仔裤</dd>
                </dl>
                <dl>
                  <dt>女士上装</dt>
                  <dd>衬衫</dd>
                  <dd>卫衣</dd>
                  <dd>毛衣</dd>
                </dl>
                <dl>
                  <dt>男士上装</dt>
                  <dd>POLO衫</dd>
                  <dd>T恤</dd>
                  <dd>衬衫</dd>
                </dl>
                <dl>
                  <dt>童装童鞋</dt>
                  <dd>套装</dd>
                  <dd>毛衣/针织衫</dd>
                  <dd>裤子</dd>
                </dl>
                <dl>
                  <dt>精品鞋靴</dt>
                  <dd>商务鞋</dd>
                  <dd>商务休闲鞋</dd>
                  <dd>板鞋</dd>
                </dl>
              </div>
            </div>
            <div class="list-menu" v-show="openMenus[3]">
              <div class="sort-but">
                <a>手机电脑馆</a>
                <a>电脑频道</a>
                <a>相机频道</a>
              </div>
              <div class="cate-list">
                <dl>
                  <dt>电脑整机</dt>
                  <dd>笔记本</dd>
                  <dd>游戏本</dd>
                  <dd>轻薄本</dd>
                </dl>
                <dl>
                  <dt>平板电脑</dt>
                  <dd>新款 iPad</dd>
                  <dd>华为</dd>
                  <dd>荣耀</dd>
                </dl>
                <dl>
                  <dt>苏宁电竞</dt>
                  <dd>电竞电脑</dd>
                  <dd>电竞台式机</dd>
                  <dd>电竞本</dd>
                </dl>
                <dl>
                  <dt>电脑DIY</dt>
                  <dd>显示器</dd>
                  <dd>组装电脑</dd>
                  <dd>主板</dd>
                </dl>
                <dl>
                  <dt>外设附件</dt>
                  <dd>鼠标</dd>
                  <dd>键盘</dd>
                  <dd>机械键盘</dd>
                </dl>
              </div>
            </div>
            <div class="list-menu" v-show="openMenus[4]">
              <div class="sort-but">
                <a>苏宁超市</a>
                <a>中华特色馆</a>
                <a>医药馆</a>
              </div>
              <div class="cate-list">
                <dl>
                  <dt>牛奶冲调</dt>
                  <dd>纯牛奶</dd>
                  <dd>奶茶</dd>
                  <dd>酸奶</dd>
                </dl>
                <dl>
                  <dt>进口食品</dt>
                  <dd>进口牛奶</dd>
                  <dd>进口休闲零食</dd>
                  <dd>进口饼干糕点</dd>
                </dl>
                <dl>
                  <dt>生鲜食品</dt>
                  <dd>大闸蟹</dd>
                  <dd>牛肉</dd>
                  <dd>虾类</dd>
                </dl>
                <dl>
                  <dt>中外名酒</dt>
                  <dd>白酒</dd>
                  <dd>啤酒</dd>
                  <dd>精酿啤酒</dd>
                </dl>
                <dl>
                  <dt>休闲食品</dt>
                  <dd>饼干</dd>
                  <dd>月饼</dd>
                  <dd>零食</dd>
                </dl>
              </div>
            </div>
            <div class="list-menu" v-show="openMenus[5]">
              <div class="sort-but">
                <a>运动馆</a>
                <a>服装城</a>
                <a>大牌特卖</a>
              </div>
              <div class="cate-list">
                <dl>
                  <dt>运动户外馆</dt>
                  <dd>阿迪达斯</dd>
                  <dd>安德玛</dd>
                  <dd>斯凯奇</dd>
                </dl>
                <dl>
                  <dt>运动鞋</dt>
                  <dd>跑步鞋</dd>
                  <dd>休闲板鞋</dd>
                  <dd>篮球鞋</dd>
                </dl>
                <dl>
                  <dt>运动服饰</dt>
                  <dd>运动卫衣</dd>
                  <dd>运动夹克</dd>
                  <dd>POLO衫</dd>
                </dl>
                <dl>
                  <dt>健身训练</dt>
                  <dd>跑步机</dd>
                  <dd>健身车</dd>
                  <dd>甩脂机</dd>
                </dl>
                <dl>
                  <dt>户外鞋服</dt>
                  <dd>户外T恤</dd>
                  <dd>土拨鼠</dd>
                  <dd>徒步鞋</dd>
                </dl>
              </div>
            </div>
            <div class="list-menu" v-show="openMenus[6]">
              <div class="sort-but">
                <a>医药馆</a>
                <a>超市频道</a>
              </div>
              <div class="cate-list">
                <dl>
                  <dt>中西药品</dt>
                  <dd>感冒咳嗽</dd>
                  <dd>维矿物质</dd>
                  <dd>心脑血管</dd>
                </dl>
                <dl>
                  <dt>保健食品</dt>
                  <dd>左旋肉碱</dd>
                  <dd>蛋白质</dd>
                  <dd>胶原蛋白</dd>
                </dl>
                <dl>
                  <dt>传统滋补</dt>
                  <dd>阿胶膏</dd>
                  <dd>三七</dd>
                  <dd>当归</dd>
                </dl>
                <dl>
                  <dt>医疗器械</dt>
                  <dd>血压计</dd>
                  <dd>护理床</dd>
                  <dd>制氧机</dd>
                </dl>
                <dl>
                  <dt>保健理疗</dt>
                  <dd>消毒护理</dd>
                  <dd>中医保健</dd>
                  <dd>药箱</dd>
                </dl>
              </div>
            </div>
            <div class="list-menu" v-show="openMenus[7]">
              <div class="sort-but">
                <a>当当网</a>
                <a>文轩网</a>
                <a>武志红</a>
              </div>
              <div class="cate-list">
                <dl>
                  <dt>少儿频道</dt>
                  <dd>0-2岁</dd>
                  <dd>3-6岁</dd>
                  <dd>7-10岁</dd>
                </dl>
                <dl>
                  <dt>文学</dt>
                  <dd>散文随笔</dd>
                  <dd>名人传记</dd>
                  <dd>青春文学</dd>
                </dl>
                <dl>
                  <dt>人文社科</dt>
                  <dd>历史</dd>
                  <dd>中国文化</dd>
                  <dd>心理学</dd>
                </dl>
                <dl>
                  <dt>小说</dt>
                  <dd>当代小说</dd>
                  <dd>近代小说</dd>
                  <dd>古典小说</dd>
                </dl>
                <dl>
                  <dt>期刊/杂志</dt>
                  <dd>时尚/美妆</dd>
                  <dd>生活休闲</dd>
                  <dd>健康美食</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="classfiction-nav-bar-list" v-show="!openMenu">
        <ul>
          <li>
            <img src="../../../../static/img/轮播下的标签/1.jpg">
          </li>
          <li>
            <img src="../../../../static/img/轮播下的标签/2.jpg">
          </li>
          <li>
            <img src="../../../../static/img/轮播下的标签/3.jpg">
          </li>
          <li>
            <img src="../../../../static/img/轮播下的标签/4.jpg">
          </li>
        </ul>
      </div>
    </div>
    <div class="block">
      <div class="banner-wrapper">
        <el-carousel trigger="click" height="476px">
          <el-carousel-item v-for="(item, index) in rotationList" :key="index">
            <img :src="item.url">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rotationList: [
        {
          url: require('../../../../static/img/轮播/1.png')
        },
        {
          url: require('../../../../static/img/轮播/2.png')
        },
        {
          url: require('../../../../static/img/轮播/3.png')
        },
        {
          url: require('../../../../static/img/轮播/4.jpg')
        },
        {
          url: require('../../../../static/img/轮播/5.jpg')
        }
      ],
      openMenus: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      openMenu: false
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
  font-size: 12px;
}
.banner-bar {
  margin: auto;
  width: 1190px;
}
.classfiction-but {
  position: absolute;
  display: block;
  width: 200px;
  padding-left: 10px;
  height: 38px;
  color: white;
  top: -38px;
  line-height: 38px;
  background: #ff8000;
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px 12px 0 0;
  text-decoration: none;
}
.classfiction-but span {
  font-size: 16px;
}
.block {
  min-width: 1190px;
  width: 1190px;
}
.banner-wrapper>>>.el-carousel__indicators--horizontal {
  margin-bottom: 110px;
}
.banner-wrapper>>>.is-active>.el-carousel__button {
  background-color: #ff8000;
}
.banner-wrapper>>>.el-carousel__arrow--left {
  top: 40%;
}
.banner-wrapper>>>.el-carousel__arrow--right {
  top: 40%;
}
.el-carousel--horizontal {
  height: 476px;
  width: 794px;
  margin: auto;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.classfiction {
  min-width: 1190px;
  position: relative;
  width: 100%;
  background: #fff;
  overflow: visible;
  height: 38px;
  z-index: 7670;
}
.classfiction-list {
  top: 1px;
  z-index: 7677;
  list-style: none;
  border: 1px solid #ff8000;
  border-right: none;
}
.display-menu {
  position: absolute;
  left: 199px;
  top: 0px;
  width: 800px;
  height: 475px;
  border: 1px solid #f7f7f7;
  background-color: #f3f3f3;
  box-shadow: 1px 1px rgba(0,0,0,.3);
}
.classfiction-nav {
  width: 200px;
  position: absolute;
  top: 38px;
  left: -1px;
  height: 476px;
}
.classfiction-list {
  width: 200px;
}
.classfiction-list img {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 6px;
  top: 22px;
}
.classfiction-list li {
  position: relative;
  overflow: hidden;
  height: 59.3px;
  padding: 29px 0px 0px 26px;
  line-height: 3px;
  cursor: default;
}
.classfiction-list li:hover {
  background-color: #f3f3f3;
}
.classfiction-list span {
  color: #000;
  font-size: 13px;
  letter-spacing: 1px;
}
.sort-but {
  float: left;
  width: 486px;
  height: 24px;
  margin: 10px 0 0 8px;
  overflow: hidden;
}
.sort-but a {
  float: left;
  margin-left: 25px;
  padding: 0 10px;
  color: #FFF;
  line-height: 24px;
  text-align: center;
  background: #ff8000;
  text-decoration: none;
  border-radius: 4px;
  font-family: "Microsoft Yahei",tahoma,arial,"Hiragino Sans GB";
}
.cate-list {
  width: 580px;
  margin: 10px 0 0 0;
  padding-left: 20px;
  overflow: hidden;
  float: left;
}
.cate-list dl {
  float: left;
  height: auto;
  overflow: hidden;
  width: 550px;
}
.cate-list dt {
  float: left;
  width: 84px;
  height: 80px;
  line-height: 20px;
  font-weight: 700;
  padding-left: 10px;
  padding-top: 8px;
}
.cate-list dd {
  float: left;
  width: 90px;
  font-size: 12px;
  line-height: 20px;
  border-bottom: 1px solid #eee;
  margin-top: 8px;
  padding-bottom: 8px;
}
.classfiction-nav-bar-list {
  position: absolute;
  top: 400px;
  left: 201px;
  width: 786px;
  height: 112px;
}
.classfiction-nav-bar-list img {
  height: 112px;
}
.classfiction-nav-bar-list li {
  float: left;
  position: relative;
  width: 194px;
  height: 112px;
  background: #FFF;
  margin-left: 2px;
  cursor: default;
  border-radius: 6px;
  overflow: hidden
}
.classficton-top-list {
  width: 802px;
  line-height: 38px;
  overflow: hidden;
  height: 38px;
  position: absolute;
  left: 50%;
  margin-left: -405px;
  padding-left: 10px;
  font-family: "Microsoft Yahei";
}
.classfiction-lists {
  list-style: none;
}
.list-pic img{
  width: 110px;
  height: 38px;
  padding: 0;
}
.classfiction-lists li {
  float: left;
  display: block;
  position: relative;
  height: 38px;
  font-weight: bold;
  padding: 0 12px 0 13px;
  cursor: default;
  font-size: 15px;
}
.classfiction-lists li:hover {
  color: #ff8000;
}
</style>
