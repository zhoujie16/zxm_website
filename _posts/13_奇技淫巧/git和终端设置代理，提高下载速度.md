---
title: git,终端,npm 设置代理，提高下载速度
date: 2020-04-07 22:22:09
tags:
column_id: 13
---

#### 前言

在获取 github 上面的代码的时候，发现有时候很慢，这时候就需要使用代理。因此只要设置 git 代理即可。

#### 配置 git 代理

```shell
#设置 注意都要设置 这几个是不同的
git config --global https.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
```

```shell
#取消
git config --global --unset http.proxy
git config --global --unset https.proxy
```

#### npm 配置代理

```sh
# 查看当前配置
npm config list
# 设置代理
npm config set proxy=socks5://127.0.0.1:1080
# 取消代理
npm config delete proxy
# 设置淘宝镜像
npm config set registry=https://registry.npm.taobao.org
# 取消淘宝镜像
npm config delete registry
```

#### 配置终端代理

```shell
# 配置http访问的
export http_proxy=socks5://127.0.0.1:1080
# 配置https
export https_proxy=socks5://127.0.0.1:1080
# 懒人方法 配置http和https访
export all_proxy=socks5://127.0.0.1:1080
```

```shell
# 取消代理
unset http_proxy
unset https_proxy
unset all_proxy
```

关闭 terminal 重启之后需要重新输入。
