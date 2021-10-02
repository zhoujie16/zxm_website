---
title: 记一次vue项目从webpack2升级到webpack4过程
date: 2020-04-19 14:37:51
tags:
categories: 踩坑记录
column_id: 14
---

### 背景

公司的一个老项目，2017年创建的，vue cli2创建，基于webpack2.3.3的项目，脚手架配置经过前人修改支持多页面。至今一直在维护。必须在node8环境下开发，版本高了会报错。

随着项目越来越大，开发过程一定会报node内存溢出，通过修改配置增大node内存解决。每修改一次文件，热更新都要等接近30s，才能看到效果。打包等待过程时分漫长。

于是就想着，能不能把这个项目迁移到用vue cli4创建的项目中，这样就可以支持webpack4，可以在node12环境下开发。

项目package.json

```json
{
  "name": "LINCOLN",
  "version": "2.0.0",
  "description": "dianka project for App",
  "author": "yonyou develop team",
  "private": true,
  "scripts": {
    "dev": "node --max_old_space_size=4096 build/dev-server.js",
    "start": "node --max_old_space_size=4096  build/dev-server.js",
    "build": "node build/build.js",
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "e2e": "node test/e2e/runner.js",
    "test": "npm run unit && npm run e2e",
    "lint": "eslint --ext .js,.vue src test/unit/specs test/e2e/specs"
  },
  "dependencies": {
    "N3-components": "^2.4.4",
    "axios": "^0.16.1",
    "better-scroll": "^1.15.0",
    "bootstrap": "^3.3.7",
    "crypto-js": "^3.1.9-1",
    "element-ui": "^2.4.11",
    "fastclick": "^1.0.6",
    "html2canvas": "^1.0.0-rc.5",
    "jquery": "^3.2.1",
    "js-cookie": "^2.1.4",
    "jssha": "^2.3.0",
    "localforage": "^1.7.3",
    "mescroll.js": "^1.3.8",
    "mint-ui": "^2.2.13",
    "plyr": "3.5.2",
    "prop-types": "^15.7.2",
    "store": "^2.0.4",
    "survey-vue": "^0.12.16",
    "v-copy": "^0.1.0",
    "video.js": "^7.6.6",
    "vue": "^2.2.6",
    "vue-awesome-swiper": "^3.1.3",
    "vue-baidu-map": "^0.10.5",
    "vue-pdf": "^3.3.1",
    "vue-pdf-shower": "^1.0.8",
    "vue-router": "^2.3.1",
    "vue-scroller": "^2.2.1",
    "vue-touch": "^2.0.0-beta.4",
    "vuex": "^2.3.1",
    "vuex-i18n": "^1.3.4",
    "vux": "^2.9.1"
  },
  "devDependencies": {
    "autoprefixer": "^6.7.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^7.1.1",
    "babel-loader": "^6.2.10",
    "babel-plugin-component": "^1.1.1",
    "babel-plugin-istanbul": "^4.1.1",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0",
    "chai": "^3.5.0",
    "chalk": "^1.1.3",
    "chromedriver": "^2.27.2",
    "compression-webpack-plugin": "^1.0.0",
    "connect-history-api-fallback": "^1.3.0",
    "connect-timeout": "^1.9.0",
    "copy-webpack-plugin": "^4.0.1",
    "cross-env": "^4.0.0",
    "cross-spawn": "^5.0.1",
    "css-loader": "^0.28.4",
    "eslint": "^3.19.0",
    "eslint-config-standard": "^6.2.1",
    "eslint-friendly-formatter": "^2.0.7",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-html": "^2.0.0",
    "eslint-plugin-promise": "^3.4.0",
    "eslint-plugin-standard": "^2.0.1",
    "eventsource-polyfill": "^0.9.6",
    "expose-loader": "^0.7.3",
    "express": "^4.14.1",
    "extract-text-webpack-plugin": "^2.0.0",
    "file-loader": "^0.11.1",
    "friendly-errors-webpack-plugin": "^1.1.3",
    "html-webpack-externals-plugin": "^3.4.0",
    "html-webpack-plugin": "^2.28.0",
    "http-proxy-middleware": "^0.17.3",
    "inject-loader": "^3.0.0",
    "karma": "^1.4.1",
    "karma-coverage": "^1.1.1",
    "karma-mocha": "^1.3.0",
    "karma-phantomjs-launcher": "^1.0.2",
    "karma-phantomjs-shim": "^1.4.0",
    "karma-sinon-chai": "^1.3.1",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-spec-reporter": "0.0.30",
    "karma-webpack": "^2.0.2",
    "less": "^2.7.2",
    "less-loader": "^4.0.3",
    "lolex": "^1.5.2",
    "mocha": "^3.2.0",
    "moment": "^2.24.0",
    "nightwatch": "^0.9.12",
    "node-sass": "^4.5.3",
    "opn": "^4.0.2",
    "optimize-css-assets-webpack-plugin": "^1.3.0",
    "ora": "^1.2.0",
    "phantomjs-prebuilt": "^2.1.14",
    "postcss-loader": "^2.0.6",
    "prettier": "^1.19.1",
    "rimraf": "^2.6.0",
    "sass": "^0.5.0",
    "sass-loader": "^6.0.5",
    "scss": "^0.2.4",
    "scss-loader": "0.0.1",
    "selenium-server": "^3.0.1",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "sinon": "^2.1.0",
    "sinon-chai": "^2.8.0",
    "style-loader": "^0.18.2",
    "stylus-loader": "^3.0.1",
    "url": "^0.11.0",
    "url-loader": "^0.5.8",
    "vue-lazyload": "^1.2.6",
    "vue-loader": "^11.3.4",
    "vue-style-loader": "^2.0.5",
    "vue-template-compiler": "^2.2.6",
    "vux-loader": "^1.0.61",
    "webpack": "^2.3.3",
    "webpack-bundle-analyzer": "^2.2.1",
    "webpack-dev-middleware": "^1.10.0",
    "webpack-hot-middleware": "^2.18.0",
    "webpack-merge": "^4.1.0",
    "yaml-loader": "^0.4.0"
  },
  "engines": {
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ],
  "main": ".eslintrc.js",
  "license": "ISC"
}

```

以下是我的升级过程

Vue cli4 创建项目，将项目原来的依赖重新安装一遍，

```json
{
  "name": "lincoln-v2",
  "version": "2",
  "private": true,
  "scripts": {
    "dev": "vue-cli-service serve",
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "N3-components": "^2.4.5",
    "axios": "^0.19.2",
    "better-scroll": "^1.15.2",
    "core-js": "^3.6.4",
    "crypto-js": "^4.0.0",
    "element-ui": "^2.13.1",
    "html2canvas": "^1.0.0-rc.5",
    "jquery": "^3.5.0",
    "js-cookie": "^2.2.1",
    "localforage": "^1.7.3",
    "mescroll.js": "^1.4.2",
    "mint-ui": "^2.2.13",
    "moment": "^2.24.0",
    "plyr": "^3.5.10",
    "prop-types": "^15.7.2",
    "store": "^2.0.12",
    "video.js": "^7.7.5",
    "vue": "^2.6.11",
    "vue-awesome-swiper": "^3.1.3",
    "vue-router": "^3.1.6",
    "vue-touch": "^1.1.0",
    "vuex": "^3.1.3",
    "vux": "^2.9.4"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.3.0",
    "@vue/cli-plugin-router": "~4.3.0",
    "@vue/cli-plugin-vuex": "~4.3.0",
    "@vue/cli-service": "~4.3.0",
    "less": "^3.11.1",
    "less-loader": "^5.0.0",
    "sass": "^1.26.3",
    "sass-loader": "^8.0.2",
    "vue-template-compiler": "^2.6.11"
  }
}

```

把原来的src目录移到新项目中，配置 vue.config.js 让支持多页面和其他webpack配置

```js
// vue.config.jsvue
module.exports = {
  assetsDir: "static",
  pages: {
    test: {
      // page 的入口
      entry: "src/modules/test/test.js",
      // 模板来源
      template: "src/modules/test/test.html",
      // 在 dist/index.html 的输出
      filename: "modules/test.html"
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      // title: "Index Page",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    apply: {
      entry: "src/modules/apply/apply.js",
      template: "src/modules/apply/apply.html",
      filename: "modules/apply.html"
    },
    "auth-page": {
      entry: "src/modules/auth-page/auth-page.js",
      template: "src/modules/auth-page/auth-page.html",
      filename: "modules/auth-page.html"
    },
    "car-book": {
      entry: "src/modules/car-book/carBook.js",
      template: "src/modules/car-book/carBook.html",
      filename: "modules/carBook.html"
    },
    "care-about": {
      entry: "src/modules/care-about/care-about.js",
      template: "src/modules/care-about/care-about.html",
      filename: "modules/care-about.html"
    },
    "configure-share-save": {
      entry: "src/modules/configure-share-save/configureShareSave.js",
      template: "src/modules/configure-share-save/configureShareSave.html",
      filename: "modules/configureShareSave.html"
    },
    "driver-register": {
      entry: "src/modules/driver-register/register.js",
      template: "src/modules/driver-register/register.html",
      filename: "modules/register.html"
    },
    "fetch-and-deliver": {
      entry: "src/modules/fetch-and-deliver/fetchAndDeliver.js",
      template: "src/modules/fetch-and-deliver/fetchAndDeliver.html",
      filename: "modules/fetchAndDeliver.html"
    },
    finance: {
      entry: "src/modules/finance/finance.js",
      template: "src/modules/finance/finance.html",
      filename: "modules/finance.html"
    },
    "from-heart": {
      entry: "src/modules/from-heart/fromHeart.js",
      template: "src/modules/from-heart/fromHeart.html",
      filename: "modules/fromHeart.html"
    },
    "lincoln-moments": {
      entry: "src/modules/lincoln-moments/moments.js",
      template: "src/modules/lincoln-moments/moments.html",
      filename: "modules/moments.html"
    },
    "map-select-address": {
      entry: "src/modules/map-select-address/mapSelectAddress.js",
      template: "src/modules/map-select-address/mapSelectAddress.html",
      filename: "modules/mapSelectAddress.html"
    },
    "motor-show": {
      entry: "src/modules/motor-show/motorShow.js",
      template: "src/modules/motor-show/motorShow.html",
      filename: "modules/motorShow.html"
    },
    "my-reservation": {
      entry: "src/modules/my-reservation/myreservation.js",
      template: "src/modules/my-reservation/myreservation.html",
      filename: "modules/myreservation.html"
    },
    myorder: {
      entry: "src/modules/myorder/myorder.js",
      template: "src/modules/myorder/myorder.html",
      filename: "modules/myorder.html"
    },
    "reservation-service": {
      entry: "src/modules/reservation-service/reservationService.js",
      template: "src/modules/reservation-service/reservationService.html",
      filename: "modules/reservationService.html"
    },
    "sales-director": {
      entry: "src/modules/sales-director/director.js",
      template: "src/modules/sales-director/director.html",
      filename: "modules/director.html"
    },
    "send-vehicle-notice": {
      entry: "src/modules/send-vehicle-notice/SendVehicleNotice.js",
      template: "src/modules/send-vehicle-notice/SendVehicleNotice.html",
      filename: "modules/SendVehicleNotice.html"
    },
    trydrivercar: {
      entry: "src/modules/trydrivercar/trydrivercar.js",
      template: "src/modules/trydrivercar/trydrivercar.html",
      filename: "modules/trydrivercar.html"
    },
    "wholesale-table": {
      entry: "src/modules/wholesale-table/wholesaleTable.js",
      template: "src/modules/wholesale-table/wholesaleTable.html",
      filename: "modules/wholesaleTable.html"
    },
    "your-efriend": {
      entry: "src/modules/your-efriend/yourEfriend.js",
      template: "src/modules/your-efriend/yourEfriend.html",
      filename: "modules/yourEfriend.html"
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  devServer: {
    port: 8000,
    // autoOpenBrowser: false,
    // assetsSubDirectory: "static",
    // assetsPublicPath: "/",
    // cssSourceMap: false,
    proxy: {
      "/weixin": {
        target: "https://api.weixin.qq.com",
        changeOrigin: true,
        pathRewrite: {
          "/weixin": ""
        }
      },
      "/qy": {
        target: "https://lincoln-mp-test.yonyouauto.com",
        changeOrigin: true,
        pathRewrite: {
          "/qy": "/qy"
        }
      },
      "/wx": {
        target: "https://lincoln-mp-test.yonyouauto.com",
        changeOrigin: true,
        pathRewrite: {
          "/wx": "/wx"
        }
      }
    }
  },
  runtimeCompiler: true,
  configureWebpack: config => {
    // console.log("configureWebpack config", config);
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
    // require("vux-loader").merge(config, {
    //   options: {},
    //   plugins: ["vux-ui"]
    // });
  },
  chainWebpack: config => {
    
  }
};

```

运行项目，报错

![](https://gitee.com/zz16/upic/raw/master/2020/04/1587279738272.png)

原因是 vue有两种形式的代码 compiler（模板）模式和runtime模式（运行时），原项目中使用vue是这种形式为compiler模式的，

```js
new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App }
})
```

解决办法，修改vue.config.js 配置文件 增加 runtimeCompiler 属性

```js
runtimeCompiler: true
```

文档是这么说的

![](https://gitee.com/zz16/upic/raw/master/2020/04/1587280088080.png)

继续运行 报错

![1587280916469](https://gitee.com/zz16/upic/raw/master/2020/04/1587280916469.png)

原因是原理项目css样式使用的是 lang="sass"，需改写成 lang="scss",

```
<style lang="sass">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

想到 部分页面还是用了less，一并安装依赖。



继续运行 报错

![1587281331076](https://gitee.com/zz16/upic/raw/master/2020/04/1587281331076.png)

Scss 颜色计算报错，不知为啥，项目中这样的写法就几处，直接改成计算后的结果。继续。



继续运行报错 

![](https://gitee.com/zz16/upic/raw/master/2020/04/1587280284720.png)

想到代码里使用window对象怎么可能报错，找了半天，是我在配置多页面的时候，模板来源写作了一个。是自己挖的坑。



继续运行又报错，静态资源都找不到

原因是原来项目静态资源都在static目录，于是把静态资源都放到了现在项目的 public目录下。



继续运行，继续报错，这次是 vue-awesome-swipe 依赖的样式找不到文件，

原因是升级了依赖，部分依赖变化较大，对这和依赖进行降级

```
vue-awesome-swiper css引入
//  "vue-awesome-swiper": "^4.1.0", => 3.1.0
```



继续运行，部分页面可以打开，部分页面报错

![1587281801904](https://gitee.com/zz16/upic/raw/master/2020/04/1587281801904.png)



原因是原项目使用了vux部分组件，新项目再没有使用 vux-loader，添加 vux-loader，修改配置

```shell
yarn add vux-loader -D
```

```
  configureWebpack: config => {
    require("vux-loader").merge(config, {
      options: {},
      plugins: ["vux-ui"]
    });
  },
```

继续运行 依然报错

![1587282285929](https://gitee.com/zz16/upic/raw/master/2020/04/1587282285929.png)

原因是 vux-loader 和 vue-cli 4 兼容问题，vux 无法兼容 vue-cli4创建的项目

官方github介绍

![1587282802593](https://gitee.com/zz16/upic/raw/master/2020/04/1587282802593.png)

至今未适配 vue-cli3 ，现在我用的是vue-cli4搭建的项目。

看项目中使用 vux 的组件的有10几处，想着之后有空把这几处用其他组件代替，彻底移除 vux 之后继续。

待续...