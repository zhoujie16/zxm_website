import axios from "axios";

// 自定义扩展 header 请求头
const getConfigHeaders = () => {
  return {
    // appid: "10",
  };
};

// 创建 axios 实例
const instance = axios.create({
  baseURL: "http://127.0.0.1:7001",
  timeout: 1000 * 20,
});

// 异常处理程序
const errorHandler = (error) => {
  console.log("errorHandler", error);
};

// 请求拦截
instance.interceptors.request.use((config) => {
  // 请求头信息，token 验证
  config.headers = {
    ...getConfigHeaders(),
  };
  return config;
}, errorHandler);

// 响应拦截
instance.interceptors.response.use((response) => {
  let { config, headers, data } = response;
  let { stat, content } = data;
  if (stat.code == 0) {
    data = data.content;
  }
  return data;
}, errorHandler);

export default instance;
