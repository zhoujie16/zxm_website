const Config = {
  blogCode: "zxm_blog", // 唯一code
  apiUrl: "http://127.0.0.1:7001", // api服务器地址
  spmUrl: "http://127.0.0.1:7003",
};

if (typeof window !== "undefined") {
  // 浏览器环境下的逻辑 使用外网域名
  if (!window.location.origin.includes(":3000")) {
    Config.apiUrl = "//x.xxxx.xx";
    Config.spmUrl = "//x.xxxx.xx";
  }
}

export default Config;
