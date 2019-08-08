const theme = require('./src/theme/theme')
const devPath = {
  name: '/zyschool',
  path: '/phone/'
  // name: '/platform-admin',
  // path: '/phone/'
}

// const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  // 基本Url
  publicPath         : process.env.NODE_ENV === 'production' ? '././' : `${devPath.name}${devPath.path}`,
  // 打包Map
  productionSourceMap: false,
  // 打包路径
  outputDir: 'advance',
  devServer          : {
    disableHostCheck: true,
    port            : 9090,
    // 跨域代理
    proxy           : {
      [`^${devPath.name}`]: {
        target      : 'http://192.168.10.3:8080',
        ws          : true,
        changeOrigin: true
      }
    }
  },
  css                : {
    loaderOptions: {
      less: {
        // vant 主题更改
        modifyVars: theme
      }
    }
  },
  // 合并 webpack
  configureWebpack   : config => {
    // if (isProduction) {
    // externals中的key是后面需要require的名字，value是第三方库暴露出来的方法名
    config.externals = {
      'vue'       : 'Vue',
      'vue-router': 'VueRouter',
      'vuex'      : 'Vuex',
      'vant'      : 'vant',
      'axios'     : 'axios',
      'dayjs'     : 'dayjs'
    }
    // }
  },
  // 修改 webpack
  chainWebpack       : config => {
    // 删除link 预取和预加载
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')

    // 图片压缩
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg : {
          progressive: true,
          quality    : 65
        },
        optipng : {
          enabled: false
        },
        pngquant: {
          quality: '65-90',
          speed  : 4
        },
        gifsicle: {
          interlaced: false
        }
        /*webp: {
          quality: 75
        }*/
      })
      .end()

    // 使用cnpm可能会导致热更新失效，设置可恢复热更新
    config.resolve.symlinks(true)
    return config
  }
}
