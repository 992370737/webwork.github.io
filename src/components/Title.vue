<template>
  <div class="second-title">
    <router-link to="/" style="height:0px;">
      <img src="../../static/img/logo.png" alt="主页" class="logo-img">
    </router-link>
    <div class="title-center">
      <div class="search-bar">
        <div class="search-icon">
          <i class="el-icon-search"></i>
        </div>
        <input type="text" ref="search_bar" placeholder="搜索商品" @keydown.enter="searchGoods"/>
        <button class="search-but" @click="search">搜索</button>
      </div>
      <div class="reconmend-list">
          <a class="list-font1">抽纸</a>
          <a class="list-font">吹风机</a>
          <a class="list-font">手机</a>
          <a class="list-font">方太直降千元</a>
          <a class="list-font">冰箱</a>
          <a class="list-font">电视</a>
          <a class="list-font">ipad</a>
          <a class="list-font">热水器</a>
          <a class="list-font">沙发</a>
          <a class="list-font">电饭煲</a>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  methods: {
    searchGoods () {
      this.search()
    },
    search () {
      var key = this.$refs.search_bar.value
      this.$router.push({name: 'searchgoods', params: {key: key}})
      this.$refs.search_bar.value = ''
    }
  }
}
</script>

<style scoped>
.second-title {
  width: 1190px;
  margin: 0px auto;
}
.logo-img {
  float: left;
  height: 90px;
  margin-top: 5px;
}
.title-center {
  display: inline-block;
  width: 600px;
  height: 110px;
  margin-left: 180px;
}
.search-bar {
  width: 540px;
  height: 41px;
  border: 2px solid #ff8000;
  border-radius: 12px;
  border-right: none;
  margin-top: 27px;
}
.search-bar input {
  float: left;
  width: 394px;
  height: 35px;
  border: none;
  margin-top: 2px;
  outline: none;
  margin-left: 5px;
}
.search-icon {
  padding-top: 10px;
  padding-left: 7px;
  width: 18px;
  float: left;
  color: lightgray;
}
.search-but {
  padding: 0px;
  width: 121px;
  height: 39px;
  border: none;
  border-radius: 0 10px 10px 0;
  background-color: #ff8000;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
}
.reconmend-list {
  margin-top: 7px;
}
.list-font {
  color: #999;
  float: left;
  white-space: nowrap;
  font-size: 12px;
  margin: 3px 0 3px -11px;
  padding: 0 20px 0 10px;
  border-left: 1px solid #ddd;
  height: 12px;
  line-height: 12px;
}
.list-font1 {
  color: #999;
  float: left;
  white-space: nowrap;
  font-size: 12px;
  margin: 3px 0 3px -11px;
  padding: 0 20px 0 10px;
  height: 12px;
  line-height: 12px;
}
.clear {
  clear: both;
}
</style>
