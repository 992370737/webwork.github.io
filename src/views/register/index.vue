<template>
  <div>
    <Title></Title>
    <div class="register-main-back">
      <div class="center-area">
            <RegisterMenu></RegisterMenu>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import RegisterMenu from './components/RegisterMenu'
import Title from '@/components/Title'
import Bottom from '@/components/Bottom'

export default {
  components: {
    RegisterMenu,
    Title,
    Bottom
  }
}
</script>

<style scoped>
.register-main-back {
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
</style>
