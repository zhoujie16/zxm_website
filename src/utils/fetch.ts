import axios from "axios";
import Config from "./../config";

// 创建 axios 实例
const instance = axios.create({
  baseURL: Config.apiUrl,
  timeout: 1000 * 20,
});

export default instance;
