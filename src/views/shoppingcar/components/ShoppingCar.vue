<template>
  <div class="shoppingcar-body">
    <div class="shoppingcar-main">
      <table>
        <thead>
          <tr>
            <th>选择</th>
            <th>商品信息</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in shoppingcarList" :key="index">
            <td>
              <div class="goods-checkbox">
                <input type="checkbox" v-model="submitList" :value="item">
              </div>
            </td>
            <td>
              <div class="goods-info">
                <div class="goods-img">
                  <img :src="item.mainImg[0]">
                </div>
                <div class="goods-name">
                  <span>{{ item.name }}</span>
                </div>
              </div>
            </td>
            <td>
              <div class="goods-price">
                <span>{{ item.price }}.00</span>
              </div>
            </td>
            <td>
              <div class="goods-count">
                <el-input-number v-model="item.buyCount" :min="1" :max="99"></el-input-number>
              </div>
            </td>
            <td>
              <div class="goods-all-price">
                <span>{{ item.buyCount*item.price }}.00</span>
              </div>
            </td>
            <td @mouseover="foucusLine=index" @mouseout="foucusLine=-1">
              <div class="opration-but">
                <div v-show="index===foucusLine" class="delete-but">
                  <a @click="deleteGoods(index)">删除</a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="submit-bar">
      <div class="select-all">
        <input type="checkbox" v-model="checked" @click="allSelected">
        &nbsp;<span>全选</span>
      </div>
      <div class="operations">
        <a @click="clearShoppingCar(submitList)">清空购物车</a>
      </div>
      <div class="right-bar">
        <div class="selected">
          <span class="txt">已选商品</span>
          <span class="txt-num">{{ submitList.length }}</span>
          <span class="txt">件</span>
        </div>
        <div class="price-sum">
          <span class="txt">合计(不包含运费) ：</span>
          <strong class="price">
            <span class="txt-num">&nbsp;{{ allPrice }}.00</span>
          </strong>
        </div>
        <div class="but-area">
          <a v-show="this.submitList.length===0" class="but-disable">结算</a>
          <a v-show="this.submitList.length>0" @click="submitGoods(submitList)" class="but-submit">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['shoppingcarList'],
  data () {
    return {
      submitList: [],
      openDeleteBut: false,
      foucusLine: -1,
      checked: false
    }
  },
  computed: {
    allPrice () {
      var sum = 0
      for (var i = 0; i < this.submitList.length; i++) {
        sum += (this.submitList[i].price * this.submitList[i].buyCount)
      }
      return sum
    }
  },
  methods: {
    submitGoods (submitList) {
      this.$emit('submit-goods', submitList)
    },
    allSelected () {
      if (this.checked) {
        this.submitList = []
      } else {
        this.submitList = this.shoppingcarList
      }
    },
    allChecked () {
      if (this.submitList.length === this.shoppingcarList.length) {
        this.checked = true
      } else {
        this.checked = false
      }
    },
    clearShoppingCar (submitList) {
      this.submitList = []
      this.$emit('clear-shoppingcar', submitList)
    },
    deleteGoods (index) {
      const indexes = this.submitList.indexOf(this.shoppingcarList[index])
      if (indexes !== -1) {
        this.submitList.splice(indexes, 1)
      }
      this.$emit('delete-goods', index)
    }
  },
  watch: {
    submitList: 'allChecked'
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.shoppingcar-body {
  width: 1190px;
  margin: auto;
}
.submit-bar {
  position: fixed;
  width: 1190px;
  bottom: 0;
  z-index: 9999;
  background: #e5e5e5;
  overflow: hidden;
  font-size: 12px;
}
.select-all {
  float: left;
  width: 70px;
  height: 50px;
  line-height: 50px;
  padding-left: 5px;
}
.operations {
  float: left;
  line-height: 50px;
  height: 50px;
}
.operations a {
  color: black;
  cursor: pointer;
}
.right-bar {
  float: right;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 4;
  padding-left: 20px;
}
.selected,.price-sum,.but-area {
  float: left;
  height: 48px;
  color: #3c3c3c;
  margin-left: 20px;
}
.txt {
  line-height: 48px;
}
.txt-num {
  color: #f40;
  font-weight: 700;
  font-size: 18px;
  font-family: tohoma,arial;
  vertical-align: middle;
}
.but-disable {
  background: #B0B0B0;
  color: #fff;
  cursor: not-allowed;
  text-decoration: none;
  display: inline-block;
  width: 120px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-family: 'Lantinghei SC','Microsoft Yahei';
  font-size: 20px;
  border-radius: 2px;
}
.but-submit {
  background: #ff8000;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  width: 120px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-family: 'Lantinghei SC','Microsoft Yahei';
  font-size: 20px;
  border-radius: 2px;
}
.shoppingcar-main {
  border: 1px solid #999;
  border-top: none;
  width: 1190px;
}
.shoppingcar-main thead {
  border: 1px solid #999;
  border-left: none;
  border-right: none;
}
.shoppingcar-main th {
  height: 50px;
  color: #ff8000;
}
.goods-img img{
  height: 100px;
}
.goods-count>>>.el-input-number {
  width: 130px;
}
.goods-info {
  width: 500px;
  padding-left: 50px;
}
.goods-info div {
  float: left;
}
.goods-name {
  width: 300px;
  overflow: hidden;
  height: 100px;
  word-wrap: break-word;
  word-break: normal;
  line-height: 30px;
  margin-left: 10px;
  padding: 10px 0px 0px 5px;
}
.goods-checkbox {
  width: 88px;
  padding: 0px 35px;
}
.goods-price {
  width: 150px;
  padding: 0px 40px;
}
.goods-count {
  width: 190px;
  padding: 0px 30px;
}
.goods-all-price {
  width: 160px;
  padding: 0px 40px;
}
.opration-but {
  width: 100px;
  padding: 0px 35px;
}
.delete-but {
  cursor: pointer;
}
.goods-price span {
  color: #3c3c3c;
  font-weight: 700;
  font-family: Verdana,Tahoma,arial;
}
.goods-all-price span {
  color: #f40;
  font-weight: 700;
  font-family: Verdana,Tahoma,arial;
}
</style>
