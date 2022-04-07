import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? '/' : './',
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@views': '@/views',
      '@assets': '@/assets',
      '@common': '@/common',
      '@components': '@components',
      '@network': '@/network',
      '@router': '@/router',
      '@store': '@/store',
      '@utils': '@/utils'
    },
    // 省略文件后缀
    extensions: ['', '.js', '.json', '.vue', '.scss', '.css']
  },
  server: {
    // 修改端口
    port: 9527
  },
  build: {
    outDir: '../web'
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ],
    }
  }
})
