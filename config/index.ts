let Config = {
  blogCode: "", // 唯一code
  apiUrl: "", // api服务器地址
  walineServerURL: "", // 评论服务器地址
  env: "",
};

let devConfig = {
  blogCode: "zxm_blog",
  apiUrl: "http://127.0.0.1:7001",
  walineServerURL: "http://127.0.0.1:8360",
  env: "development",
};

let prodConfig = {
  blogCode: "zxm_blog",
  apiUrl: "http://127.0.0.1:7001",
  walineServerURL: "http://127.0.0.1:8360",
  env: "production",
};

if (process.env.NODE_ENV === "development") {
  // 开发环境配置
  Config = devConfig;
} else if (process.env.NODE_ENV === "production") {
  // 线上环境配置
  Config = prodConfig;
  // 线上浏览器环境 需要配置远程地址
  if (process.browser) {
    Config.apiUrl = "https://xxx.xxxx.cn";
    Config.walineServerURL = "https://xxx.xxx.cn";
  }
}

export default Config;
