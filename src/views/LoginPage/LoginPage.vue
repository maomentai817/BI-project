<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

const userStore = useUserStore()

const form = ref({
  account: '',
  password: '',
  agree: true
})
const rules = {
  account: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 14, message: '密码长度应为6-14位', trigger: 'blur' }
  ],
  // 自定义校验规则
  agree: [
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
}

const router = useRouter()
// 表单统一校验
const formRef = ref(null)
const onSubmit = () => {
  formRef.value.validate(async (valid) => {
    const { account, password } = form.value
    if (valid) {
      // 登录操作
      await userStore.getUserInfo({ account, password })
      ElMessage.success('登录成功')
      router.replace('/')
    }
  })
}
</script>

<template>
  <div class="scrollbar-none">
    <header class="login-header">
      <div class="container m-t-20 f-b">
        <h1 class="logo w-200">
          <RouterLink to="/">BI 项目</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav class="f-items-c">
          <a href="javascript:;">账户登录</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form
              label-position="right"
              label-width="60px"
              status-icon
              :model="form"
              :rules="rules"
              ref="formRef"
            >
              <el-form-item label="账户" prop="account">
                <el-input v-model="form.account" />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password" />
              </el-form-item>
              <el-form-item label-width="22px" prop="agree">
                <el-checkbox size="large" v-model="form.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="onSubmit"
                >点击登录</el-button
              >
            </el-form>
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
  background: #fff;
  border-bottom: 1px solid #e4e4e4;

  .logo {
    a {
      display: block;
      height: 132px;
      width: 100%;
      line-height: 152px;
      text-align: center;
      color: #1890ff;
      // text-indent: -9999px;
    }
  }
  .sub {
    flex: 1;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color: #666;
  }
  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;
    i {
      font-size: 14px;
      color: #a0cfff;
      letter-spacing: -5px;
    }
  }
}

.login-section {
  background: linear-gradient(135deg, #1890ff, #a0cfff);
  height: 488px;
  position: relative;

  .wrapper {
    width: 380px;
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
      padding: 0 40px;
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
