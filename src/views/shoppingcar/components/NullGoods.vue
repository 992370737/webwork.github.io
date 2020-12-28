<template>
  <div class="null-goods-body">
      <div class="title">
            <table>
            <thead>
                <th>选择</th>
                <th>商品信息</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>操作</th>
            </thead>
            </table>
            <div class="center-text">
                <h1>还没有商品加入购物车，快去选购吧</h1>
            </div>
      </div>
      <div class="submit-bar">
          <input type="checkbox" disabled>&nbsp;<span>全选</span>
          <a class="clear-shoppingcar">清空购物车</a>
          <button disabled class="right-msg-but">结算</button>
          <span class="right-msg">
              合计:&nbsp;
              <span class="number">0.00</span>
          </span>
          <span class="right-msg">
              已选
              <span class="number">0</span>
              件
          </span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.submit-bar a {
    cursor: default;
}
.center-text {
    text-align: center;
    margin-top: 20px;
    color: #ff8000;
}
.title {
    border: 1px solid #999;
    border-top: none;
    height: 800px;
    width: 1190px;
}
.null-goods-body {
    margin: auto;
    width: 1190px;
}
.null-goods-body thead {
    border: 1px solid #999;
    border-left: none;
    border-right: none;
}
.null-goods-body th {
    width: 200px;
    height: 50px;
    color: #ff8000;
}
.submit-bar {
    background: #e5e5e5;
    height: 50px;
    overflow: hidden;
    line-height: 45px;
    position: fixed;
    bottom: 0px;
    width: 1190px;
    padding-left: 5px;
}
.right-msg,.right-msg-but {
    float: right;
}
.right-msg {
    width: 100px;
    margin-top: -2px;
}
.number {
    color: #ff8000;
    font-size: 30px;
    position: relative;
    top: 5px;
}
.right-msg-but {
    width: 80px;
    border: none;
    outline: none;
    background-color: #999;
    color: white;
    margin-left: 10px;
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: not-allowed;
}
.clear-shoppingcar {
    color: black;
    cursor: pointer;
    margin-left: 10px;
}
</style>
