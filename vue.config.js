// eslint-disable-next-line no-unused-vars
const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')
      .options({ /* ... */})
  }
}
