import instance from '@/utils/instance.js'

/**
 * @description 单个文件上传接口
 * @param {File} file
 */
export const uploadFileAPI = (file) => {
  return instance({
    url: '/api/upload/file',
    method: 'post',
    data: file
  })
}
