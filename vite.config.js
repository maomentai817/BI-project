import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
      // 配置 element-plus 采用 sass 主题配色方案
      // resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    proxy: {
      // 将所有以 /api 开头的请求代理到后端服务器
      '/api': {
        target: 'http://192.168.124.111:9090/', // 后端服务器的地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 将 /api 前缀替换为空
      }
    }
  }
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // 2. 自动导入定制化样式文件进行样式覆盖
  //       additionalData: `
  //         @use "@/styles/element/index.scss" as *;
  //         @use "@/styles/var.scss" as *;
  //       `
  //     }
  //   }
  // }
})
