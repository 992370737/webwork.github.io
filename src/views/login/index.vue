<template>
  <div>
    <Title></Title>
    <div class="login-main-back">
      <div class="center-area">
        <div class="login-c"></div>
        <LoginMenu></LoginMenu>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Title from '@/components/Title'
import LoginMenu from './components/LoginMenu'
import Bottom from '@/components/Bottom'

export default {
  components: {
    LoginMenu,
    Title,
    Bottom
  }
}
</script>

<style>
.login-main-back {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 570px;
  background:url('../../../static/img/login-register-back.jpg') center no-repeat;
}
.center-area {
  width: 1070px;
  margin: 0px auto;
}
.login-c {
  width: 570px;
  height: 570px;
  float: left;
}
</style>
