---
title: trojan服务端的安装
date: 2020-02-05 11:34:11
tags:
categories: 科学上网
---

trojan github地址：[https://github.com/trojan-gfw/trojan](https://github.com/trojan-gfw/trojan)

trojan 文档地址：[https://trojan-gfw.github.io/trojan/](https://trojan-gfw.github.io/trojan/)

trojan整体思路大概就是将流量模仿为最常见的https，以达到诱骗GFW的目的，详细的介绍请直接查看官方文档，官方文档写的也很详细，看不懂英文没关系，直接chrome浏览器翻译就好。

我的服务器环境：

- centos7

- trojan1.14.1

- 有ssl证书的域名并成功添加dns解析

##### 下载最新安装包到服务器上

下载地址：[https://github.com/trojan-gfw/trojan/releases](https://github.com/trojan-gfw/trojan/releases)

我选择的是  trojan-1.14.1-linux-amd64.tar.xz

解压缩放到任意目录里，examples 文件夹下是配置示例，服务端选择 server.json-example，复制里面的配置到config.json 里面。config.json 文件名也可修改。为了区分服务端和客户端我的改成了server.json。

大部分直接默认即可，只需要修改密码和ssl证书，mysql也可选择配置。

配置文件解释 以官方文档：https://trojan-gfw.github.io/trojan/config 为准。

```json
{
    "run_type": "server",
    "local_addr": "0.0.0.0",
    "local_port": 443,
    "remote_addr": "127.0.0.1",
    "remote_port": 80,
    "password": [
        "pwd1",
        "pwd2"
    ],
    "log_level": 1,
    "ssl": {
        "cert": "/etc/letsencrypt/certificate.crt",
        "key": "/etc/letsencrypt/private.key",
        "key_password": "",
        "cipher": "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384",
        "cipher_tls13": "TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_256_GCM_SHA384",
        "prefer_server_cipher": true,
        "alpn": [
            "http/1.1"
        ],
        "reuse_session": true,
        "session_ticket": false,
        "session_timeout": 600,
        "plain_http_response": "",
        "curves": "",
        "dhparam": ""
    },
    "tcp": {
        "prefer_ipv4": false,
        "no_delay": true,
        "keep_alive": true,
        "reuse_port": false,
        "fast_open": false,
        "fast_open_qlen": 20
    },
    "mysql": {
        "enabled": true,
        "server_addr": "172.17.0.1",
        "server_port": 3306,
        "database": "trojan",
        "username": "trojan",
        "password": ""
    }
}
```

###### mysql配置的解释

需要注意的是Trojan只会读写`password`，`quota`，`download`，和`upload`字段。为了便于管理，还存在其他领域。出于效率和安全原因，存储在表中的密码必须由SHA224进行哈希处理。

收到Trojan请求后，**如果服务器未能将密码与配置文件中设置的任何密码匹配**，它将查询数据库中的用户。如果成功，Trojan将检查是否`download + upload < quota`；如果是这样，则授予连接。**负值`quota`表示无限配额。**一个连接关闭后，Trojan将递增`download`和`upload`该用户通过用户已经使用的数据量的字段。

的单元`quota`，`download`以及`upload`字段是字节。

### 启动服务

```shell
# 在当前目录直接启动
./trojan -c server.json
# 后台启动 日志保存在 server.log 里
nohup ./trojan -c server.json > server.log 2>&1 &
# 停止服务 查找 443 端口占用进程并杀掉
lsof -i tcp:443
kill 进程ID
# 停止进程


```