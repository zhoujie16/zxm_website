---
title: Docker 安装 Redis
date: 2020-01-14 13:10:01
tags:
categories:

---



目标：使用Docker安装Redis

###### 拉取官方最新的Redis镜像

```
docker pull redis
```

###### 运行Redis容器

```
docker run -p 6379:6379 --name myredis --restart=always -d redis
docker run -p 6379:6379 --name myredis -d redis
```

`docker run`命令解析

- `--name myredis` 对Redis容器进行命名
- `-p 6379:6379` 将Redis容器中的6379端口映射到宿主机的6379端口
- `-v /share/redis/data:/data` 将宿主机共享目录中的redis的data目录挂载到Redis容器中的data目录
- `-d redis` 以后台守护进程方式运行Redis
- `redis-server`
- `--appendonly yes` 在Redis容器启动redis-server服务器并打开Redis持久化配置

