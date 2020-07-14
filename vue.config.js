// vue.config.js
const { join } = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/jwt-decode/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'components': join(__dirname, 'src', 'components'),
        'views': join(__dirname, 'src', 'views'),
        'images': join(__dirname, 'src', 'assets', 'img'),
        'utils': join(__dirname, 'src', 'utils'),
        'mixins': join(__dirname, 'src', 'mixins')
      }
    }
  }
}
