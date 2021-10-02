---
title: github访问慢和clone慢解决方案
date: 2019-07-25 11:17:20
tags:
column_id: 13
---

经常要clone github中的一些项目，无奈如果不爬梯子的话速度实在是龟速，经常1k/s，于是搜了下解决方法，改HOSTS大法。

```shell
yonyouautodeMacBook-Pro:~ yonyouauto$ nslookup github.com
Server:		210.22.70.3
Address:	210.22.70.3#53

Non-authoritative answer:
Name:	github.com
Address: 13.229.188.59
```

上面可以看出当前dns给我们分配的Github的IP是 13.229.188.59，这个IP我们访问很慢。其实github应该还有很多其他ip的，如果从其他城市访问github.com就可能得到不一样的ip。因而，我们需要模拟其他地点的访问以拿到github.com的其他ip。这个通过  [DNS查询](http://tool.chinaz.com/dns/)  工具可做到, 该工具在各地都有服务器，可以实现各地请求这个域名，然后显示返回的ip。

![eZDHHO.png](http://pic1.zhoujie16.cn/eZDHHO.png)

通过修改HOST文件  更改GitHub域名指向的IP

我选择的是台湾中华电信的 IP，速度明显快了很多。

Mac OS 的 HOST 文件在  /private/etc/hosts  目录，