---
title: 安装小飞机 shadowsocks 翻墙服务端 CentOS
date: 2020-01-15 13:10:01
tags:
categories: 科学上网
column_id: 13
---

## 安装小飞机 shadowsocks 翻墙服务端 CentOS

官网链接：

```
https://shadowsocks.org/
```



```shell
# 查看 py 版本
python --version
# 安装shdowsocks
pip install shadowsocks
# 新建一个配置文件 
touch /etc/shadowsocks.json
```

```
{
  "server": "0.0.0.0",
  "port_password": {
  	"6234": "jianmianli1",
  	"6235": "jianmianli2",
  	"6236": "jianmianli3",
  	"6237": "jianmianli4"
  },
  "timeout": 600,
  "method": "aes-256-cfb"
}
```

##### 启动

```
# 停止
ssserver -c /etc/shadowsocks.json -d stop
# 启动
ssserver -c /etc/shadowsocks.json -d start
```



