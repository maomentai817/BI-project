import instance from '@/utils/instance.js'

/**
 * @description 登录用户名密码方式
 * @param {Object} obj
 */
export const loginAPI = ({ account, password }) => {
  return instance({
    url: '/auth/user/login',
    method: 'post',
    params: { account, password }
  })
}
