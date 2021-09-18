---
title: npm修改源
date: 2019-06-19 17:17:42
tags:
categories: 前端
---
1.得到原本的镜像地址

npm get registry 

> https://registry.npmjs.org/

设成淘宝的

npm config set registry http://registry.npm.taobao.org/

yarn config set registry http://registry.npm.taobao.org/

 

 

2.换成原来的

npm config set registry https://registry.npmjs.org/
