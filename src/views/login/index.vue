<template>
  <div class="container-login">
    <el-card>
      <img src="../../assets/logo_index.png" width="200px" alt />

      <el-form :rules="loginRules" ref="loginForm" :model="loginForm">
        <!-- 手机号 -->
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 验证 -->
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证"
            style="width:235px;margin-right:10px"
          ></el-input>
          <el-button>获取验证</el-button>
        </el-form-item>
        <!-- 单选 -->
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item>
          <el-button @click="login" type="primary" style="width:100%">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const checkMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式错误'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: ''
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          console.log('ok')
          // console.log(this.loginForm)
          this.$http.post('authorizations', this.loginForm).then(res => {
            this.$router.push('/').catch(() => {
              console.log('123')
              this.$message.error('cuowu')
            })
          })
        }
      })
    }
  }
}
</script>

<style>
.container-login {
  width: 100%;
  height: 100%;
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  position: absolute;
  left: 0;
  top: 0;
}
.el-card {
  width: 400px;
  height: 340px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
