---
title: trojan-docker服务端的安装
date: 2020-02-05 10:34:11
tags:
categories: 科学上网
column_id: 13
---

github地址：[https://github.com/trojan-gfw/trojan](https://github.com/trojan-gfw/trojan)

docker hub 地址：[https://hub.docker.com/r/trojangfw/trojan](https://hub.docker.com/r/trojangfw/trojan)

```sh
# 拉取镜像
docker pull trojangfw/trojan
# 启动
docker run -dt --name trojan --restart=always -v /home/trojan:/config -v /home/trojan/ssl:/etc/letsencrypt -p 443:443 trojangfw/trojan
# 查看运行日志
docker logs -f trojan
```

###### trojan 配置

```
目录：/home/trojan
配置文件路径：/home/trojan/config.json
ssl证书路径：/home/trojan/ssl/
```

###### 配置文件

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

需要注意的是Trojan只会读/写`password`，`quota`，`download`，和`upload`领域。为了便于管理，还存在其他领域。出于效率和安全原因，存储在表中的密码必须由SHA224进行哈希处理。

收到Trojan请求后，**如果服务器未能将密码与配置文件中设置的任何密码匹配**，它将查询数据库中的用户。如果成功，Trojan将检查是否`download + upload < quota`；如果是这样，则授予连接。**负值`quota`表示无限配额。**一个连接关闭后，Trojan将递增`download`和`upload`该用户通过用户已经使用的数据量的字段。

的单元`quota`，`download`以及`upload`字段是字节。