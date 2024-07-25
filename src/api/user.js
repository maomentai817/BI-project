import instance from '@/utils/instance.js'

export const loginAPI = (params) => {
  return instance.get('xxx', {
    params
  })
}
