---
title: 入坑yarn
date: 2019-07-17 13:56:54
tags:
categories: 前端
column_id: 12
---

## 前言

最近研究Taro，用npm安装taro环境那是一个巨慢啊，公司还有一个老的vue项目，npm安装依赖很难成功，有时安装成功了也运行报错，要反复删掉重装直到运行成功，今天运行项目就折腾了一上午，最终用yarn一次解决，那个蛋疼啊。

看taro文档也支持yarn安装，之前也听说过有yarn这个东西，yarn出现很久了但是从来没有用过，当时想学yarn有毛用，当今npm扫天下。现在yarn经常出现在眼球中，总之学习下不吃亏。

当然大神都是全学的，像我等个渣渣就经常纠结是用npm还是yarn、是学习vue还是学习react、是用sass还是用less，是用webpack还是rollup。😂。

## 简介

Yarn 是 Facebook, Google, Exponent 和 Tilde 开发的一款新的 JavaScript 包管理工具。就像我们可以从官方文档了解那样，它的目的是解决这些团队使用 npm 面临的少数问题，即：

安装的时候无法保证速度/一致性
安全问题，因为 npm 安装时允许运行代码

Yarn 同样是一个从 npm 注册源获取模块的新的 CLI 客户端。注册的方式不会有任何变化 —— 你同样可以正常获取与发布包。

## 安装yarn

参照文档 [安装yarn](https://www.yarnpkg.com/zh-Hans/docs/install#mac-stable)

因为我安装了 nvm，应该排除安装 Node.js 以便使用 nvm 的 Node.js 版本，用如下命令

```shell
brew install yarn --without-node
```

运行命令来测试 Yarn 是否安装：

```shell
yarn --version
# 1.17.3
```

## yarn常用命令

**初始化新项目**

```shell
yarn init
```

**添加依赖包**

```shell
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

**将依赖项添加到不同依赖项类别**

分别添加到 `devDependencies`、`peerDependencies` 和 `optionalDependencies`：

```shell
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

**升级依赖包**

```shell
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

**移除依赖包**

```shell
yarn remove [package]
```

**安装项目的全部依赖**

```shell
yarn
```

或者

```shell
yarn install
```

## 从 npm 迁移

对多数用户来说，从npm迁移的过程应该非常简单。Yarn和npm使用相同的`package.json`格式，而且Yarn可以从npm安装依赖包。

如果你打算在现有项目中尝试Yarn，只需执行：

```
yarn
```

Yarn将通过自己的解析算法来重新组织`node_modules` 目录，这个算法和[node.js 模块解析算法](https://nodejs.org/api/modules.html#modules_all_together)是兼容的。



## yarn 与 npm 命令比较

| npm (v5)                                | Yarn                            |
| :-------------------------------------- | :------------------------------ |
| `npm install`                           | `yarn install`                  |
| **(不适用)**                            | `yarn install --flat`           |
| **(不适用)**                            | `yarn install --har`            |
| `npm install --no-package-lock`         | `yarn install --no-lockfile`    |
| **(不适用)**                            | `yarn install --pure-lockfile`  |
| `npm install [package]`                 | `yarn add [package]`            |
| `npm install [package] --save-dev`      | `yarn add [package] --dev`      |
| **(不适用)**                            | `yarn add [package] --peer`     |
| `npm install [package] --save-optional` | `yarn add [package] --optional` |
| `npm install [package] --save-exact`    | `yarn add [package] --exact`    |
| **(不适用)**                            | `yarn add [package] --tilde`    |
| `npm install [package] --global`        | `yarn global add [package]`     |
| `npm update --global`                   | `yarn global upgrade`           |
| `npm rebuild`                           | `yarn install --force`          |
| `npm uninstall [package]`               | `yarn remove [package]`         |
| `npm cache clean`                       | `yarn cache clean [package]`    |
| `rm -rf node_modules && npm install`    | `yarn upgrade`                  |