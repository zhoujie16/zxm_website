---
title: HBuilder使用逍遥安卓5.1版本模拟器方法
date:  2017-06-17 15:56:00
tags:
categories: 前端
column_id: 12
---
### 1.下载逍遥安卓模拟器
逍遥安卓模拟器官网地址：[逍遥安卓模拟器官网](https://www.xyaz.cn/)；
安装成功后不要着急打开，因为默认是安卓4.4版本，还要下载逍遥安卓5.1.1安卓系统内核
### 2.下载逍遥安卓5.1.1安卓系统内核
去官方论坛下载，地址：[公测版逍遥安卓5.1.1安卓系统内核模拟器独家发布](http://www.xyaz.cn/thread-4232-1-1.html);
或者百度网盘下载，链接: [https://pan.baidu.com/s/1boQApNT](https://pan.baidu.com/s/1boQApNT) 密码: xctb

### 3.安装5.1.1内核
双击就可安装

安装好之后打开逍遥安卓多开器，点击“新建模拟器”，选择“创建Android 5.1.1模拟器”，等待创建成功就可以打开了。

![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkjljceuj30i40g6wg0.jpg)

### 4.关联HBuilder
打开HBuilder安装目录 Hbuilder/tools/adbs，复制这3个文件

![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkjmgklhj30g605eglw.jpg)

拷贝到逍遥模拟器安装目录的 Memu文件夹下
![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkjnew9uj30gh0av0tn.jpg)

在逍遥模拟器中打开开发者调试选项打开USB调试

![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkjocyetj30gn0sv41a.jpg)

在HBuilder选项中修改端口 21503

![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkjoufo8j30kr0flmxx.jpg)

打开逍遥安卓模拟器 重启HBuilder就可以调试了

![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkjp98r4j30fo08zwf4.jpg)

