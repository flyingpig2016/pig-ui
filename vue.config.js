const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    }
  },
   // 强制内联CSS（使用组件时，不需要再引入css）
  css: {
    extract: false
  },


})
