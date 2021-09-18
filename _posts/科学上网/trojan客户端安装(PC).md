---
title: trojan客户端安装（PC）
date: 2020-02-05 12:57:23
tags:
categories: 科学上网
---

PC端使用trojan有2步，一是需要在本地计算机启动代理转发服务器，二是安装代理客户端。

## 本地计算机安装代理转发服务器

这个是本地计算机启动的trojan服务，用于和远程服务端的trojan服务通信，这个服务也可启动在内网任意服务器上，如已安装，这步可以跳过。

下载最新trojan安装包到客户端，当前最新版本是1.14.1

github地址：[https://github.com/trojan-gfw/trojan/releases](https://github.com/trojan-gfw/trojan/releases)

网盘地址：https://www.lanzous.com/b00t97mbe 密码:atwx

win系统下载  trojan-1.14.1-win.zip

mac系统下载   trojan-1.14.1-macos.zip

下载成功之后解压缩，修改配置，

examples 文件夹下是配置示例，打开 client.json-example，复制里面的配置到config.json 里面。

###### 客户端只用修改 remote_addr 和 password 就可以了，cert可选。

```json
{
    "run_type": "client",
    "local_addr": "127.0.0.1",
    "local_port": 1080,
    "remote_addr": "xxx.xxx.com", // 服务端域名
    "remote_port": 443,
    "password": [
        "pass" // 密码
    ],
    "log_level": 1,
    "ssl": {
        "verify": true,
        "verify_hostname": true,
        "cert": "", //此项可不填 域名证书路径（下载域名证书放客户端）
        "cipher": "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA:AES128-SHA:AES256-SHA:DES-CBC3-SHA",
        "cipher_tls13": "TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_256_GCM_SHA384",
        "sni": "",
        "alpn": [
            "h2",
            "http/1.1"
        ],
        "reuse_session": true,
        "session_ticket": false,
        "curves": ""
    },
    "tcp": {
        "no_delay": true,
        "keep_alive": true,
        "reuse_port": false,
        "fast_open": false,
        "fast_open_qlen": 20
    }
}
```

#### 启动代理

Win系统先安装目录里的 VC_redist.x64.exe ，运行 trojan.exe。

Mac系统 运行 start.command。或者终端运行

```sh
# 前台运行
./trojan -c config.json
# 后台运行
nohup ./trojan -c config.json > client.log 2>&1 &
```

客户端代理服务启动，窗口关闭就是停止代理功能，或者命令行关闭进程。

```sh
# 命令行关闭进程
killall trojan
```

现在发现浏览器访问外网并没有通过代理。

因为客户端代理服务启动了，但并没有去使用这个服务去访问外网。

还要进一步安装对应的软件去使用代理。

可以安装客户端软件，也可以安装 Google 浏览器插件去使用。如果只安装浏览器插件，那么只有这个浏览器打开的网页可以使用代理。如果安装客户端软件那么客户端所有软件打开的网页都会通过代理访问。

根据实际需求安装对应的软件吧。

## 谷歌Chrome浏览器插件

已经放到顶部网盘链接里面了。文件名 SwitchyOmega_Chromium，

不要解压 直接拖放这个插件到 Chrome 扩展程序页面。

协议选择 SOCKS5，填写代理服务ip和端口，应用选项，最后使用刚刚配置的代理。

这个代理服务器就是上面本地计算机运行的trojan服务，局域网内任意一台计算机启动了trojan服务，填写对应的ip即可。

![](https://gitee.com/zz16/upic/raw/master/2020/02/1580916809909.png)

![](https://gitee.com/zz16/upic/raw/master/2020/02/1580916940663.png)

## Windows 客户端



## Mac客户端