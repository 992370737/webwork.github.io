<template>
  <div class="loginMenu">
      <h3>用户登录</h3>
      <form>
        <div class="input-area">
          <div class="loginIcon">
            <i class="el-icon-user-solid"></i>
          </div>
          <input type="text" ref="username" placeholder="用户名" v-model="loginUser.userName"/>
          <div class="clear"></div>
          <div v-show="userNameErr" class="err-msg">
            <span>用户名不存在</span>
          </div>
          <div v-show="userNameOrPasswordErr" class="err-msg">
            <span>用户名或密码错误</span>
          </div>
        </div>
        <div class="input-area">
          <div class="loginIcon">
            <i class="el-icon-lock"></i>
          </div>
          <input type="password" ref="password" placeholder="密码" v-model="loginUser.password" autocomplete="off"/>
        </div>
        <button class="login-but" @click="loginAccount(loginUser)">登 录</button>
        <div class="register-but">
          <router-link to="/register">注册有礼 &nbsp;></router-link>
        </div>
      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loginUser: {
        userName: '',
        password: ''
      },
      userNameErr: false,
      userNameOrPasswordErr: false,
      flag: 0
    }
  },
  methods: {
    loginAccount (loginUser) {
      this.userNameErr = false
      this.userNameOrPasswordErr = false
      axios.get('http://localhost:3000/user', {
        params: {
          username: loginUser.userName
        }
      }).then(res => {
        if (res.data.length === 0) {
          this.userNameErr = true
        } else {
          axios.get('http://localhost:3000/user', {
            params: {
              username: loginUser.userName,
              password: loginUser.password
            }
          }).then(res => {
            if (res.data.length === 0) {
              this.userNameOrPasswordErr = true
            } else {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              this.$store.commit('loginUsers', this.loginUser.userName)
              this.$router.push('/')
            }
          })
        }
      })
    },
    onSubmit () {
      return false
    }
  }
}
</script>

<style scoped>
.loginMenu {
  width: 358px;
  padding: 0px 24px 60px 24px;
  position: relative;
  float: right;
  margin-top: 110px;
  background: #fff;
  box-shadow: 0 0 2px #ececec;
  font-family: "Microsoft Yahei";
}
h3 {
  margin: 30px auto;
  width: 75px;
  color: #f60;
  border-bottom: 3px solid #f60;
}
.input-area {
  width: 310px;
  height: 36px;
  border: 1px solid lightgray;
  margin-bottom: 20px;
  border-radius: 4px;
}
.input-area input {
  width: 268px;
  height: 26px;
  border: none;
  margin: 0px;
  margin-top: 4px;
  outline: none;
  float: left;
}
.loginIcon {
  width: 20px;
  height: 20px;
  float: left;
  font-size: 125%;
  margin: 9px;
  margin-top: 8px;
}
.login-but {
  border: none;
  width: 310px;
  height: 36px;
  background-color: #f80;
  color: white;
  border-radius: 2px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  outline: none;
}
.register-but {
  text-align: center;
  margin-top: 10px;
  font-size: 50%;
}
.register-but a {
  text-decoration: none;
  color: #f80;
}
.err-msg {
  color: red;
  font-size: 12px;
  font-family: Times;
  height: 20px;
}
.clear {
  clear: both;
}
</style>
