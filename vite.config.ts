import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 解决打包后显示空白问题（本质上是指定资源路径为当前目录）
  plugins: [vue(), eslintPlugin({
    include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
  })]
})
