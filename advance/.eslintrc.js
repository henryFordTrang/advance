module.exports = {
  root         : true,
  globals      : {
    'AppUtils' : false,
    'jsBridge' : false,
    '$'        : false,
    'module'   : false,
    'document' : false,
    'Vue'      : false,
    'VueRouter': false,
    'Vuex'     : false,
    'vant'     : false,
    'axios'    : false,
    'dayjs'    : false,
    '_util'    : false
  },
  env          : {
    browser : true,
    node    : true,
    es6     : true,
    amd     : true,
    commonjs: true
  },
  extends      : [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules        : {
    'no-console' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser     : 'babel-eslint',
    ecmaVersion: 6,
    sourceType : 'module'
  }
}
