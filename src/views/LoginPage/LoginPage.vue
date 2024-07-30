<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
// import { useUserStore } from '@/stores'

// const userStore = useUserStore()
import Vcode from 'vue3-puzzle-vcode'
import imgs from './composables/getRandomImgs'

const form = ref({
  account: '',
  password: '',
  repassword: '',
  agree: true
})
const defaultRules = {
  account: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 14, message: '密码长度应为6-14位', trigger: 'blur' }
  ]
  // 自定义校验规则
}

const repasswordRule = [
  { required: true, message: '请再次输入密码', trigger: 'blur' },
  {
    pattern: /^\S{6,15}$/,
    message: '密码必须是6-15的非空字符',
    trigger: 'blur'
  },
  {
    validator: (rule, value, callback) => {
      if (value !== form.value.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    },
    trigger: 'blur'
  }
]
const agreeRule = [
  {
    validator(rule, value, callback) {
      if (!value) {
        callback(new Error('请勾选协议'))
      } else {
        callback()
      }
    }
  }
]

const loginRules = {
  ...defaultRules,
  agree: agreeRule
}
const signRules = {
  ...defaultRules,
  repassword: repasswordRule
}

const router = useRouter()
// 表单统一校验
const loginFormRef = ref(null)
const signFormRef = ref(null)
const isVerified = ref(false)
const isShowLogin = ref(false)
const isShowSign = ref(false)

const onSuccessSign = () => {
  isVerified.value = true
  isShowSign.value = false
  onRegister()
}
const onSuccessLogin = () => {
  isVerified.value = true
  isShowLogin.value = false
  setTimeout(() => {
    onSubmit()
  }, 500)
}
const onSubmit = async () => {
  if (isVerified.value) {
    loginFormRef.value.validate(async (valid) => {
      // const { account, password } = form.value
      if (valid) {
        // 登录操作
        // await userStore.getUserInfo({ account, password })
        ElMessage.success('登录成功')
        router.replace('/')
      }
    })
  } else {
    // ElMessage.error('请先完成验证')
    isShowLogin.value = true
  }
}

// 注册
const onRegister = async () => {
  if (isVerified.value) {
    signFormRef.value.validate(async (valid) => {
      // const { account, password } = form.value
      if (valid) {
        // 注册操作
        // await userStore.getUserInfo({ account, password })
        ElMessage.success('注册成功')
        handleToggle()
      }
    })
  } else {
    // ElMessage.error('请先完成验证')
    isShowSign.value = true
  }
}

const flag = ref(false)
const signInBox = ref(null)
const signUpBox = ref(null)
const handleToggle = () => {
  loginFormRef.value.resetFields()
  signFormRef.value.resetFields()
  flag.value = !flag.value
  isVerified.value = false
  isShowLogin.value = false
  isShowSign.value = false
  if (flag.value) {
    signInBox.value.style.transform = `translateX(-100%)`
    signUpBox.value.style.transform = `translateX(0)`
  } else {
    signInBox.value.style.transform = `translateX(0)`
    signUpBox.value.style.transform = `translateX(100%)`
  }
}
watch(flag, () => {
  form.value = {
    username: '',
    password: '',
    repassword: '',
    agree: true
  }
  isVerified.value = false
  loginFormRef.value.resetFields()
  signFormRef.value.resetFields()
})
</script>

<template>
  <div>
    <header class="login-header bgc-#fff bb-1-#e4e4e4">
      <div class="container m-t-20 f-b">
        <h1 class="logo w-200">
          <RouterLink to="/" class="w-full hl-132 block">BI 项目</RouterLink>
        </h1>
        <div class="to-home mr-30 h-132 f-items-c">
          <RouterLink class="entry w-120 fs-16" to="/">
            进入网站首页
            <i class="iconfont icon-angle-right"></i>
            <i class="iconfont icon-angle-right"></i>
          </RouterLink>
        </div>
      </div>
    </header>
    <section class="login-section relative">
      <div class="wrapper">
        <div class="sign-in-box" ref="signInBox">
          <nav class="f-items-c p-y-40">
            <a href="javascript:;">账户登录</a>
          </nav>
          <div class="account-box">
            <div class="form">
              <Vcode
                :show="isShowLogin"
                @success="onSuccessLogin"
                :imgs="imgs"
              />
              <el-form
                label-position="right"
                label-width="60px"
                status-icon
                :model="form"
                :rules="loginRules"
                ref="loginFormRef"
              >
                <el-form-item label="账户" prop="account">
                  <el-input v-model="form.account" placeholder="请输入账户名" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input
                    v-model="form.password"
                    type="password"
                    placeholder="请输入密码"
                    autocomplete="new-password"
                  />
                </el-form-item>
                <el-form-item label-width="22px" prop="agree">
                  <el-checkbox size="large" v-model="form.agree">
                    我已同意隐私条款和服务条款
                  </el-checkbox>
                </el-form-item>
                <el-button size="large" class="subBtn" @click="onSubmit"
                  >点击登录</el-button
                >
                <el-link
                  type="primary"
                  :underline="false"
                  @click="handleToggle"
                  class="m-t-20 m-l-10"
                >
                  前往注册 →
                </el-link>
              </el-form>
            </div>
          </div>
        </div>
        <div class="sign-up-box" ref="signUpBox">
          <nav class="f-items-c p-y-40">
            <a href="javascript:;">账户注册</a>
          </nav>
          <div class="account-box">
            <div class="form">
              <Vcode :show="isShowSign" @success="onSuccessSign" :imgs="imgs" />
              <el-form
                label-position="right"
                label-width="60px"
                status-icon
                :model="form"
                :rules="signRules"
                ref="signFormRef"
              >
                <el-form-item label="账户" prop="account">
                  <el-input v-model="form.account" placeholder="请输入账户名" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input
                    v-model="form.password"
                    type="password"
                    placeholder="请输入密码"
                    autocomplete="new-password"
                  />
                </el-form-item>
                <el-form-item label="密码" prop="repassword">
                  <el-input
                    :prefix-icon="Lock"
                    type="password"
                    placeholder="请再次输入密码"
                    v-model="form.repassword"
                    autocomplete="new-password"
                  ></el-input>
                </el-form-item>
                <el-button size="large" class="subBtn" @click="onRegister"
                  >点击注册</el-button
                >
                <el-link
                  type="primary"
                  :underline="false"
                  @click="handleToggle"
                  class="m-t-20 m-l-10"
                >
                  ← 返回登录
                </el-link>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">xxxx</a>
          <a href="javascript:;">xxxx</a>
          <a href="javascript:;">xxxx</a>
          <a href="javascript:;">xxxx</a>
          <a href="javascript:;">xxxx</a>
        </p>
        <p>CopyRight &copy; xxxx</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.login-header {
  .logo {
    a {
      text-align: center;
      color: #1890ff;
      // text-indent: -9999px;
    }
  }
  .to-home {
    .entry {
      i {
        font-size: 14px;
        color: #a0cfff;
        letter-spacing: -5px;
      }
    }
  }
}
.login-section {
  background: linear-gradient(135deg, #1890ff, #a0cfff);
  height: 488px;
  .wrapper {
    width: 380px;
    height: 360px;
    overflow: hidden;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    nav {
      font-size: 14px;
      height: 55px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      text-align: right;
      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        text-align: center;
      }
    }
    .sign-in-box,
    .sign-up-box {
      width: 380px;
      height: 360px;
      background-color: #fff;
      position: absolute;
      transform: translateX(0%);
      transition: all 0.3s;
    }
    .sign-up-box {
      transform: translateX(100%);
    }
  }
}
.login-footer {
  padding: 30px 0 50px;
  background: #fff;
  p {
    text-align: center;
    color: #999;
    padding-top: 20px;
    a {
      line-height: 1;
      padding: 0 10px;
      color: #999;
      display: inline-block;
      ~ a {
        border-left: 1px solid #ccc;
      }
    }
  }
}
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: #a0cfff;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 20px 20px 20px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: #ac4444;
          }
          &.active,
          &:focus {
            border-color: #a0cfff;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: #ac4444;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background-color: #a0cfff;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}

.subBtn {
  background-color: #a0cfff;
  width: 100%;
  color: #fff;
}
</style>
