### 周小米的博客

基于 NextJS 框架实现一个 SSR 的个人网站，闲来无事练手 , 搭配 后台管理系统 以及 NodeJS 服务端 一起组成完整的个人网站系统。

目前托管到阿里云运行，访问地址 [https://zhoujie16.cn](https://zhoujie16.cn)，

> 如果对你有帮助的话请右上角点个 star，非常感谢！

### 技术栈

- 网站前台：React + React-Redux + Next.js
- 后台管理：Vue + ElementUI
- 服务端：NodeJS + Koa2 + Midway + MongoDB

### 项目预览

【网站前台 demo】：[http://t.abczzz.cn:780](http://t.abczzz.cn:780)

【后台管理 demo】：[http://t.abczzz.cn:783](http://t.abczzz.cn:783)

> 演示账号/密码: admin / admin

### 项目地址

【网站前台】：[https://github.com/zhoujie16/zxm_website](https://github.com/zhoujie16/zxm_website)

【后台管理】：[https://github.com/zhoujie16/zxm_admin](https://github.com/zhoujie16/zxm_admin)

【服务端】： [https://github.com/zhoujie16/zxm_server](https://github.com/zhoujie16/zxm_server)

## 前序准备

- 本地安装 nodejs 请使用 v12 及以上版本，
- 运行服务端应用 [zxm_server](https://github.com/zhoujie16/zxm_server);

### 开发

克隆项目到本地

```bash
git clone https://github.com/zhoujie16/zxm_website.git;
```

修改配置 目录: config/index.ts

```js
let Config = {
  blogCode: "", // 网站唯一code
  apiUrl: "", // api服务器地址
  walineServerURL: "", // 评论服务器地址
  env: "",
};
```

安装依赖 并 启动

```
npm install;
npm run dev;
```

访问http://127.0.0.1:780

### 部署

```
yarn build;
yarn start;
```

### 维护文章方式

#### 方式 1. 后台管理-文章管理-维护

个人比较喜欢方式 2，因为之前的博客是基于 hexo，md 文档写起来比较顺手

#### 方式 2. md 文档方式上传

- 在 根目录 \_post 文件夹内放置 md 格式文章;

```md
---
title: 文章标题
date: 2020-01-14 13:10:09
column_id: 17
---

文章内容
```

| 变量        | 描述                          |
| :---------- | :---------------------------- |
| `title`     | 标题                          |
| `date`      | 文件建立日期                  |
| `column_id` | 分类 id (对应后台管理类目 id) |

- 运行上传命令，\_post 文件夹内所有 md 文档都会被更新到后台

```
npm run upload;
```

### 界面展示

### 交流

Github: [zhoujie16](https://github.com/zhoujie16)

QQ: 1406187962

Email: zhoujie16m@163.com
