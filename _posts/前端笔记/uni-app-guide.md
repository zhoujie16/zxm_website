---
title: uni-app 入坑指南
date: 2020-12-10 15:00:42
tags:
categories: 前端
---
#### 演讲ppt下载地址
链接: https://pan.baidu.com/s/1-Od8VvfnUG1reI4sMTz_2A 提取码: 23qy 
复制这段内容后打开百度网盘手机App，操作更方便哦 
--来自百度网盘超级会员v4的分享


### 什么是 uni-app

uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。
一套代码编到 10 个平台，这不是梦想。眼见为实，扫描 10 个二维码，亲自体验最全面的跨平台效果！
![下载 _1_.png](http://imgurl.zhoujie16.cn/2020/12/12/550cfe4a6b0a9.png)

### 使用 uni-app 的前置条件

如果你开发过小程序，恰好又会 vue， 那么你的学习成本会非常的低。

### 开发工具

使用官方推出的 HBuilderX 编辑器，内置相关环境，开箱即用。

### App（ios、安卓）

uni-app 在 App 端不仅可以使用绝大多数的小程序相关的 API，同时也可以使用 5+API 很好的补足了小程序上一些还没有实现的功能。 [相关阅读](http://www.html5plus.org/doc/h5p.html)

### H5

h5 基本上跟常规 vue 开发没有什么区别， 唯一需要注意的是，有些 API 是不能在 h5 中使用，注意文档中标注的平台差异说明。

### 如何实现跨端

虽说是跨端，但是肯定是有情况是不支持的，比如遇到有些平台特有的 API 怎么办 ？
不用担心，这些问题 uni-app 都为你想到了，那就是使用条件编译。

### 注意事项

- 页面组件我们要遵循 Vue 单文件组件 (SFC) 规范
- 组件标签靠近微信小程序规范
- 接口能力（JS API）靠近微信小程序规范
- 数据绑定及事件处理靠近 Vue.js 规范，同时补充了 App 及页面的生命周期， [相关阅读](https://uniapp.dcloud.io/use)
- 为兼容多端运行，建议使用 flex 布局进行开发
- 非 H5 端，不能使用浏览器自带对象，比如 document、window、localstorage、cookie 等，更不能使用 jquery 等依赖这些浏览器对象的框架。因为各家小程序快应用都不支持这些对象。没有这些浏览器自带对象并不影响业务开发，uni 提供的 api 足够完成业务。
- uni-app 的 tag 同小程序的 tag，和 HTML 的 tag 不一样，比如 div 要改成 view，span 要改成 text、a 要改成 navigator。

### 我认为的坑？

简单的说一下开发体验，我认为坑大概分三种。

- 该框没有的功能，存在不能实现的东西。
- 明显的 bug，导致程序出现问题，影响开发进度和结果
- 在开发过程中，自己凭借直觉和经验在开发，结果和预期不同，阅读文档过后才发现和之前经验积累的写法不一样，会不由自主的说一句真坑，或者说在不同端有的不同写法，但自己没有做好兼容，就出现了不同端效果不一致，当再次阅读文档找到问题后也会来一句真坑。
  总的来讲，uni-app 的开发之旅还是比较通畅的。

### 踩坑之旅

前言：下面列举下我遇见过的问题难点，和一些注意点，以及怎么去解决。具体 uni-app 怎么用，[建议阅读文档](https://uniapp.dcloud.io/)，文档上写的更清楚。

##### 跨域的问题

在开发 H5 平台时，需要使用浏览器进行调试，而浏览器会有跨域的问题。小程序和 App 不会存在跨域问题。
H5 跨域解决方案：和 webpack 配置类似，配置 proxy 代理，
根据官方文档的描述，devServer 配置被要求在 manifest.json 去配置，并且由于这个配置文件是 json 格式的，所以只能对简单类型进行配置。但对于 proxy 这项配置来说也是足够了的。直接如下方式配置即可解决:

```json
// manifest.json
{
  "h5": {
    "devServer": {
      "proxy": {
        "/prefix/api/user/list": {
          "target": "https://api-remote.xxxx.com",
          "pathRewrite": {
            "^/prefix": ""
          }
        }
      }
    }
  }
}
```

##### 反向代理出现 Invalid Host header 问题

点开 manifest.json 文件，在 h5 中 devServer 选项中设置"disableHostCheck": true。

##### 像素单位

使用 upx/rpx 而不是 px
1px = 2upx 是不准确的，upx 和 rpx 是响应式单位，以 750px 为基准宽度，根据设备屏幕宽度自动调整

##### 路由和传参

uni-app 的路由配置方式和小程序很像，如果你会小程序，配置起来更容易了。
uni-app 项目的路由还是 pages.json 中 pages 属性中配置，其实上面已经应用到了。。
在页面中没有专门的 $route 和 $router 对象 仅能在页面的生命周期里面接受路由传参，在 uni.navigateTo()中 url 参数为路径，其后可以带参数，用于页面传参，参数在新页面中 onLoad 钩子函数接收，没有 vue 中的 query 和 param

##### DOM 操作

如果你的项目仅是 h5,那可以放心大胆的使用 dom 操作，但如果要在小程序和 app 跑，就不要做 dom 操作了，不生效。
不过 ref 还是可以用的，一样可以获取到这个节点，该干啥干啥。
对原生的组件，例如 view、text 设置 ref，在小程序中为 undefined，h5、app 正常。封装的组件能正常使用。

##### 生命周期

具体的生命周期在文档 [详情见文档](https://uniapp.dcloud.io/frame?id=%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)
大致上和 vue 的差不多，分成页面生命周期和应用生命周期，页面生命周期就是针对单页面的，应用生命周期就是针对整个小程序/app 的。
比如在组件中，没有页面生命周期，对，你没看错！比如页面 a 引用了组件 b 在组件 b 中，onLoad，onShow，onReady 全部失效，不过用 mounted 是生效的。
在上面说了 ref，如果要在初始化使用 ref 要注意生命周期，页面生命周期中，onload 不能直接访问 dom，onready 可以。

##### 动态的 class style

非 H5 端不支持 [Vue 官方文档：Class 与 Style 绑定](https://cn.vuejs.org/v2/guide/class-and-style.html) 中的 `classObject` 和 `styleObject` 语法。

```vue
// class 支持的语法:
<view :class="{ active: isActive }">111</view>
<view
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
>222</view>
<view class="static" :class="[activeClass, errorClass]">333</view>
<view
  class="static"
  v-bind:class="[isActive ? activeClass : '', errorClass]"
>444</view>
<view
  class="static"
  v-bind:class="[{ active: isActive }, errorClass]"
>555</view>

//style 支持的语法:
<view
  v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"
>666</view>
<view
  v-bind:style="[{ color: activeColor, fontSize: fontSize + 'px' }]"
>777</view>
```

##### 事件处理器

uni-app 的事件处理几乎全部支持 Vue 的事件处理

```js
// 事件映射表，左侧为 WEB 事件，右侧为 ``uni-app`` 对应事件
{
    click: 'tap',
    touchstart: 'touchstart',
    touchmove: 'touchmove',
    touchcancel: 'touchcancel',
    touchend: 'touchend',
    tap: 'tap',
    longtap: 'longtap', //推荐使用longpress代替
    input: 'input',
    change: 'change',
    submit: 'submit',
    blur: 'blur',
    focus: 'focus',
    reset: 'reset',
    confirm: 'confirm',
    columnchange: 'columnchange',
    linechange: 'linechange',
    error: 'error',
    scrolltoupper: 'scrolltoupper',
    scrolltolower: 'scrolltolower',
    scroll: 'scroll'
}

```

TIPS：

为兼容各端，事件需使用 v-on 或 @ 的方式绑定，请勿使用小程序端的 bind 和 catch 进行事件绑定。

事件修饰符
.stop：各平台均支持， 使用时会阻止事件冒泡，在非 H5 端同时也会阻止事件的默认行为
.prevent 仅在 H5 平台支持
.self：仅在 H5 平台支持
.once：仅在 H5 平台支持
.capture：仅在 H5 平台支持
.passive：仅在 H5 平台支持

若需要禁止蒙版下的页面滚动，可使用 @touchmove.stop.prevent="moveHandle"，moveHandle 可以用来处理 touchmove 的事件，也可以是一个空函数。

```vue
<view class="mask" @touchmove.stop.prevent="moveHandle">
```

按键修饰符：uni-app 运行在手机端，没有键盘事件，所以不支持按键修饰符。

##### 标题栏或导航栏重叠

使用 position:fixed;且 bottom:0;或 top:0;时，h5 端表现为 fixed 元素与标题栏或导航栏重叠。原因为在 h5 端标题和导航都是一个组件，可用窗口大小包括二者。可使用 uni.getSystemInfo 获取系统信息，在 h5 和 app 中会有 windowTop 和 windowBottom 两个参数表示可用窗口顶部和底部位置。使用条件编译动态的设置 top 和 bottom 的值。

##### 静态资源路径

css 如果使用本地图片路径和本地字体路径，需要使用~@开头的绝对路径~@/static/imgs/a.png。40k 以下的本地图片或字体会被转换成 base64，超过的需要使用网络资源。

##### 全局变量方法的实现

- 挂载 Vue.prototype，将一些使用频率较高的常量或者方法，直接扩展到 Vue.prototype 上，每个 Vue 实例对象都会“继承”下来
- globalData，在 App.vue 定义 globalData ，同时使用 API 读写这个值。
- Vuex，Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式，它采用集中式存储管理应用的所有组件的状态。适用于集中管理项目的登录状态、用户信息、设备信息等。

##### 关于元素尺寸的获取

因为 uni-app 跨平台时不支持引入 jQuery 等操作 DOM 的插件，H5 平台可以通过条件编译的方式引入使用。所以在 uni-app 中最好不要引入 jQuery，可以使用 uni.createSelectorQuery()创建一个 SelectorQuery 对象实例来获取 DOM 信息。

```js
// 例如要获取 <view class="p-list"></view>的高度。
const _this = this;
uni
  .createSelectorQuery()
  .select(".p-list")
  .boundingClientRect((data) => {
    _this.height = data.height;
  })
  .exec();
```

## 插件市场里面看过 or 用过比较好的组件

[uni-ui 官方组件库](https://ext.dcloud.net.cn/plugin?id=55)

[日期、时间、多级联动选择器组件](https://ext.dcloud.net.cn/plugin?id=273)

[下拉刷新和上拉加载的组件](http://www.mescroll.com/uni.html)

[生成海报组件](https://ext.dcloud.net.cn/plugin?id=2389)

[下拉式筛选菜单](https://ext.dcloud.net.cn/plugin?id=1078)

[二维码生成组件](https://ext.dcloud.net.cn/plugin?id=39)

[uCharts 高性能跨全端图表](https://ext.dcloud.net.cn/plugin?id=271)
