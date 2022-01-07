let Config = {
  blogCode: "zxm_demo", // 唯一code
  apiUrl: "", // api服务器地址
  walineServerURL: "", // 评论服务器地址
  env: "",
};

if (process.env.NODE_ENV === "development") {
  // 开发环境配置
  Config.apiUrl = "http://127.0.0.1:7001";
  Config.walineServerURL = "http://127.0.0.1:8360";
  Config.env = "development";
} else if (process.env.NODE_ENV === "production") {
  // 线上环境配置
  Config.env = "production";
  // 线上浏览器环境 不能使用本地地址 需要配置远程地址
  if (process.browser) {
    Config.apiUrl = "http://t.abczzz.cn:781";
    Config.walineServerURL = "http://t.abczzz.cn:782";
  } else {
    Config.apiUrl = "http://127.0.0.1:7001";
    Config.walineServerURL = "http://127.0.0.1:8360";
  }
}

export default Config;
