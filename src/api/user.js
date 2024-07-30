import instance from '@/utils/instance.js'

/**
 * @description 登录用户名密码方式
 * @param {Object} obj
 */
export const loginAPI = ({ account, password }) => {
  return instance({
    url: '/signIn',
    method: 'post',
    params: { username: account, password: password }
  })
}
/**
 * @description 注册
 * @param {Object} obj
 */
export const registerAPI = ({ account, password }) => {
  return instance({
    url: '/signUp',
    method: 'post',
    params: { username: account, password: password }
  })
}
