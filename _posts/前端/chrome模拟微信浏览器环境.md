---
title: chrome模拟微信浏览器环境
date: 2019-02-28 13:21:09
tags:
categories: 前端
---
User Agent 是用户浏览器内的一串字符，它描述了这个浏览器是那款浏览器、用户用的是哪个操作系统等等的一些属性。网页可以获取它来提供针对性的服务，当然，也可以被腾讯用来阻止你的访问。

我用的是 Chrome，其他浏览器也大同小异。在你打开那个网页链接，打开开发者工具， 然后按 ctrl shift p 打开命令框，搜索 network conditions（网络调节） 并打开。

<img src="http://pic1.zhoujie16.cn/20190725180046.png" width=600/>

找到下面的 User Agent，取消选择 Select automatically （自动选择），然后在下面的输入框中加入“ MicroMessenger ”即可。

<img src="http://pic1.zhoujie16.cn/20190725180017.png" width=600/>

你做出的更改会在关闭开发者工具后复原。所以不要关闭开发者工具，然后重新输入那个链接地址，打开即可。
