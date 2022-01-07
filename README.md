### 周小米的博客

基于 NextJS 框架实现一个 SSR 的个人网站，闲来无事练手 , 搭配 后台管理系统 以及 NodeJS 服务端 一起组成完整的个人网站系统。

> 如果对你有帮助的话请右上角点个 star，非常感谢！

### 技术栈

- 网站前台：React + React-Redux + Next.js
- 后台管理：Vue + ElementUI
- 服务端：NodeJS + Koa2 + Midway + MySQL

### 项目预览

【预览网站前台】：[https://zhoujie16.cn](https://zhoujie16.cn)

【预览后台管理】：暂未开放

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

访问http://127.0.0.1:3100

### 部署

```
yarn build;
yarn start;
```

### 界面展示

### 交流

Github: [zhoujie16](https://github.com/zhoujie16)

QQ: 1406187962

Email: zhoujie16m@163.com
