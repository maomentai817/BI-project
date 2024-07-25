import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { loginAPI } from '@/api/user.js'

export const useUserStore = defineStore(
  'temp',
  () => {
    // state
    const userInfo = ref({})
    // actions
    const getUserInfo = () => {}

    const clearUserInfo = () => {
      userInfo.value = {}
    }
    // getters
    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    }
  },
  // 本地持久化
  {
    persist: true
  }
)
