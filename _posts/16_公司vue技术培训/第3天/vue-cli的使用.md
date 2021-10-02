---
title: 第三天 3-1 vue-cli的使用
date: 2019-08-08 00:00:00
tags:
categories: 公司vue技术培训
column_id: 16
---

# vue-cli

```
我们之前学习的代码都是写在一个html文件中的，如果我们的大型项目的代码向这样写的话，肯定是不可维护的。
所以在真实的项目开发中，我们会借助 webpack 打包工具，帮助我们构建大型项目的开发目录。在开发完成之后，我们会进行打包的操作，帮助我们把代码生成一个线上可运行的代码。
如果让每一个开发人员自己配置webpack开发环境，对一个开发者来说，是一个不小的挑战。vue官方也考录到了这个因素，所以vue官方提供了一个脚手架工具，他的名字就叫vue-cli。通过这个脚手架我们可以构建一个标准的vue工程化的项目。
同时，这个工具自带了webpack的各种配置，用这个工具可以迅速上手工程化项目的开发。使用它也不会有任何的技术门槛。可以快速的直接进入开发环节之中。
```

### 认识 vue-cli

我们这一节会学习到

- 快速创建工程的两种方法
- 工程化项目的目录

#### 安装 vue-cli 工具

```shell
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

#### 创建 vue 项目

```
# 创建一个vue项目 (文件名：小写字母加短横线)
vue create hello-vue
```

```shell
# 会有2个选项  default:默认  Manually:手动选择
# 为了给大家演示 选择 Manually 手动创建
Vue CLI v3.10.0
? Please pick a preset: (Use arrow keys)
  default (babel, eslint)
❯ Manually select features

# 回车
# 会有很多选项  空格切换是否选择
? Check the features needed for your project:
 ◉ Babel		#es6转es5
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◯ Router		#路由管理
 ◯ Vuex			#数据管理
 ◯ CSS Pre-processors		# css预处理
 ◯ Linter / Formatter		# 代码格式校验
 ◯ Unit Testing
 ◯ E2E Testing

# 回车
# Router配置 问我们是否使用历史
# 敲Y 回车
? Use history mode for router? (Requires proper server setup for index fallback in
 production) (Y/n)


# 选择了 CSS Pre-processors 类型
# 选SCSS或LESS 回车
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by
 default): (Use arrow keys)
❯ Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
  Less
  Stylus


# 选择 Linter / Formatter 规则
# 我们选 Standard 标准的配置
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
❯ ESLint + Standard config
  ESLint + Prettier

# 选择 Linter / Formatter 校验时机， 保存时 还是更新时 对代码进行检查
# 我们选保存时
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i>
to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit

# 你更喜欢将Babel、PostCSS、ESLint等配置放在哪里
# 选第一个 专用配置文件
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow
keys)
❯ In dedicated config files
  In package.json

# 询问是否将当前设置保存为 未来项目使用的配置
# 敲N 回车
? Save this as a preset for future projects? (y/N)

# 包管理器使用 yarn 还是 npm
# 选 yarn
? Pick the package manager to use when installing dependencies: (Use arrow keys)
❯ Use Yarn
  Use NPM

# 选择完成  接下来交给 vue-cli 完成
# 完成后 运行项目
yarn serve
# or
npm run serve

# 运行成功
App running at:
- Local:   http://localhost:8081/
- Network: http://192.168.1.101:8081/

Note that the development build is not optimized.
To create a production build, run yarn build.

# 打开 http://localhost:8081
```

#### 图形界面创建 Vue 项目

```shell
# 终端输入
vue ui
# 成功
🚀  Starting GUI...
🌠  Ready on http://localhost:8000
# 我们打开这个页面
```

```shell
页面下方，我们可以看到当前目录的位置
点击create创建项目 点击在此创建新的项目
选择项目名称和包管理工具
其他的用默认配置项
点击下一步 流程和命令行工具类似
选择手动配置  看一下这个工具给大家添加了哪些配置
选择完成后 点击创建
这个创建和我们用命令行创建的项目实际上是一样的
```

### 项目目录结构

public 公共资源

src 源文件

node_modules 前端开发依赖

```
我们看一下项目的入口在哪里
public/index 文件 里面有个 #id=app 的div
main.js 里把整个vue对象 挂载到app上来
```

views 页面的视图

components 组件

package.json

```
这个文件，就是对项目解释说明的文件
scripts 运行时所需要的脚本命令  npm 和 yarn 可使用的命令
dependencies  打包时用到的依赖
devDependencies	 开发时用到的依赖
```

### vue 配置文件

项目根目录 创建 `vue.config.js`

```
# 修改端口号
module.exports = {
  devServer: {
    port: 9099
  }
};
```
