<script setup>
import { useUserStore } from '@/stores'
import defaultAvatar from '@/assets/images/mnkq.png'
import { useRouter } from 'vue-router'

const userStore = useUserStore()

// userStore.userInfo = {
//   account: '猫闷台817',
//   token: '123456'
// }

const router = useRouter()
const onLogout = () => {
  userStore.clearUserInfo()
  router.push('/login')
}
const onLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="nav-container wh-full f-b">
    <div class="nav-title f-b">
      <span>&#x2630;</span>
      <div class="nav-title-desc">
        基于大数据的在线多维分析和可视化商务智能平台
      </div>
    </div>
    <div class="right f-items-c">
      <div class="right-content f-b" v-if="userStore.userInfo">
        <div class="user-info f-items-c">
          <div class="user-avatar">
            <el-avatar
              :size="40"
              :src="userStore.userInfo.avatar || defaultAvatar"
            />
          </div>
          <div class="user-account">{{ userStore.userInfo.username }}</div>
        </div>
        <div class="exit">
          <el-popconfirm
            title="确认退出吗?"
            confirm-button-text="确认"
            cancel-button-text="取消"
            @confirm="onLogout"
          >
            <template #reference>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M12 3a1 1 0 0 1 .117 1.993L12 5H7a1 1 0 0 0-.993.883L6 6v12a1 1 0 0 0 .883.993L7 19h4.5a1 1 0 0 1 .117 1.993L11.5 21H7a3 3 0 0 1-2.995-2.824L4 18V6a3 3 0 0 1 2.824-2.995L7 3zm5.707 5.464l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 1 1-1.414-1.415L17.414 13H12a1 1 0 1 1 0-2h5.414l-1.121-1.121a1 1 0 0 1 1.414-1.415"
                  ></path>
                </g>
              </svg>
            </template>
          </el-popconfirm>
        </div>
      </div>
      <div class="right-content" v-else>
        <div class="login f-items-c" @click="onLogin">
          <div class="text">请先登录</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"
              style="fill: rgb(255, 255, 255)"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  padding: 0 15px;
  background-color: #3582b5;
  .nav-title {
    color: #fff;
    &-desc {
      margin-left: 15px;
    }
  }
  .right {
    .right-content {
      .user-info {
        gap: 10px;
        color: #fff;
        margin-right: 15px;
        .user-avatar {
          transform: translateY(2px);
        }
      }
      .exit {
        margin-right: 10px;
        cursor: pointer;
        transform: translateY(2px);
      }
      .login {
        gap: 10px;
        cursor: pointer;
        .text {
          color: #fff;
          text-align: center;
          &:hover {
            color: #f5f5f5;
          }
        }
        svg {
          transform: translateY(-1px);
        }
      }
    }
  }
}
</style>
