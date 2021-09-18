---
title: Mac安装和使用nginx
date: 2019-07-16 11:27:40
tags: 
categories: mac技巧
---

## Nginx和环境准备

Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。

**Nginx的优点**

- 支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。
- 内存消耗少：在主流的服务器中Nginx目前是内存消耗最小的了，比如我们用Nginx+PHP，在3万并发链接下，开启10个Nginx进程消耗150M内存。
- 免费使用可以商业化：Nginx为开源软件，采用的是2-clause BSD-like协议，可以免费使用，并且可以用于商业。
- 配置文件简单：网络和程序配置通俗易懂，即使非专业运维也能看懂。



### Mac安装nginx

```
brew install nginx
```

终端运行并按提示操作。如下内容，则安装成功。

安装目录和配置文件目录都已经显示。

```shell
yonyouautodeMacBook-Pro:~ yonyouauto$ brew install nginx
==> Installing dependencies for nginx: pcre
==> Installing nginx dependency: pcre
==> Downloading https://homebrew.bintray.com/bottles/pcre-8.43.mojave.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/08/08e7414a7641d1e184c936537ff67f72f52649374d2308b89
######################################################################## 100.0%
==> Pouring pcre-8.43.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/pcre/8.43: 204 files, 5.5MB
==> Installing nginx
==> Downloading https://homebrew.bintray.com/bottles/nginx-1.17.1.mojave.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/a1/a1114fd86181db06ebb31c5f3fb5e666fafb3d10e0e65ed0f
######################################################################## 100.0%
==> Pouring nginx-1.17.1.mojave.bottle.tar.gz
==> Caveats
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx
==> Summary
🍺  /usr/local/Cellar/nginx/1.17.1: 25 files, 2MB
==> Caveats
==> nginx
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx
yonyouautodeMacBook-Pro:~ yonyouauto$ 
```



