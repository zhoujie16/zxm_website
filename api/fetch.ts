import axios from "axios";
import Config from "./../config";

// 自定义扩展 header 请求头
const getConfigHeaders = () => {
  return {
    // appid: "10",
  };
};

// 创建 axios 实例
const instance = axios.create({
  baseURL: Config.apiUrl,
  timeout: 1000 * 20,
});

// 异常处理程序
const errorHandler = (error: any) => {
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
  let { code, data } = response.data;
  return data;
}, errorHandler);

export default instance;
