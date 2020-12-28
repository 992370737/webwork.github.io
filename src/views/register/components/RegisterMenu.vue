<template>
  <div class="register-menu">
    <h3>用户注册</h3>
    <el-form :model="userInfo" status-icon :rules="rules" ref="registerFrom" label-position="left" label-width="70px">
      <div class="input-area">
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="userInfo.userName" autocomplete="off" size="small"></el-input>
        </el-form-item>
      </div>
      <div class="input-area">
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="userInfo.password" autocomplete="off" size="small"></el-input>
        </el-form-item>
      </div>
      <div class="input-area">
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="userInfo.rePassword" autocomplete="off" size="small"></el-input>
        </el-form-item>
      </div>
      <div class="input-area">
        <el-form-item label="手机号码" prop="phone">
          <el-input type="text" v-model="userInfo.phone" autocomplete="off" size="small"></el-input>
        </el-form-item>
      </div>
      <div class="input-area">
        <el-form-item label="邮箱" prop="email">
            <el-input type="text" v-model="userInfo.email" autocomplete="off" size="small"></el-input>
        </el-form-item>
      </div>
        <button class="register-but" @click="submitRegisterInfo('registerFrom')">立即注册</button>
        <div class="go-login">
          <router-link to="/login">已有帐号 去登录&nbsp;></router-link>
        </div>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    var checkPhone = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('手机号码不能为空'))
      } else if (!/^1\d{10}$/.test(value)) {
        return callback(new Error('手机号码格式不正确'))
      } else {
        callback()
      }
    }
    var checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 6 || value.length > 21) {
        callback(new Error('密码长度不少于6位且不大于21位'))
      } else {
        callback()
      }
    }
    var checkRePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else if (value !== this.userInfo.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var checkUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'))
      } else if (!/^[a-zA-z]\w{3,15}$/.test(value) || value.indexOf(' ') !== -1) {
        callback(new Error('用户名格式不正确'))
      } else if (this.flag !== 0) {
        callback(new Error('用户名已存在'))
      } else {
        callback()
      }
    }
    var checkEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else if (!/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value)) {
        callback(new Error('邮箱格式不正确'))
      } else {
        callback()
      }
    }
    return {
      userInfo: {
        userName: '',
        password: '',
        rePassword: '',
        phone: '',
        email: ''
      },
      rules: {
        userName: [{
          validator: checkUserName,
          trigger: 'blur'
        }],
        password: [{
          validator: checkPassword,
          trigger: 'blur'
        }],
        rePassword: [{
          validator: checkRePassword,
          trigger: 'blur'
        }],
        phone: [{
          validator: checkPhone,
          trigger: 'blur'
        }],
        email: [{
          validator: checkEmail,
          trigger: 'blur'
        }]
      },
      flag: 0
    }
  },
  methods: {
    submitRegisterInfo (formName) {
      this.flag = 0
      axios.get('http://localhost:3000/user', {
        params: {
          username: this.userInfo.userName
        }
      }).then(res => {
        if (res.data.length > 0) {
          this.flag = 1
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '注册成功，请登录',
              type: 'success'
            })
            axios.get('http://localhost:3000/user').then(res => {
              var len = res.data.length
              axios.post('http://localhost:3000/user', {
                id: len + 1,
                username: this.userInfo.userName,
                password: this.userInfo.password,
                phone: this.userInfo.phone,
                email: this.userInfo.email,
                shoppingcar: []
              })
              this.$router.push('/login')
            })
          }
        })
      })
    }
  }
}
</script>

<style scoped>
.register-menu {
  width: 358px;
  padding: 0px 24px 30px 24px;
  position: relative;
  float: right;
  margin-top: 35px;
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
.register-menu >>> .el-input>input {
  border: none;
}
.register-menu >>> .el-form-item__label {
  padding-left: 10px;
  padding-right: 0px;
}
.register-but {
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
.go-login {
  text-align: center;
  margin-top: 10px;
  font-size: 50%;
}
.go-login a {
  text-decoration: none;
  color: #f80;
}
.input-area {
  width: 310px;
  height: 40px;
  border: 1px solid lightgray;
  margin-bottom: 20px;
  border-radius: 4px;
}
</style>
