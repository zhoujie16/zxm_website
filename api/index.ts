/**
 * @Author: 焦质晔
 * @Date: 2019-06-20 10:00:00
 * @Last Modified by: 焦质晔
 * @Last Modified time: 2020-06-17 15:08:34
 */
import axios from "./fetch";

// 测试
export const ajax_test = () => axios.get(`/`, {});

// 分类数据
export const ajax_column_queryWithClient = () =>
  axios.post(`/website/column/queryWithClient`, {});

// 查询文章详细 website/article/queryDetail
export const ajax_article_queryDetail = (params: any) =>
  axios.post(`/website/article/queryDetailByClient`, params);

// 查询文章列表 /website/article/query
export const ajax_article_query = (params: any) =>
  axios.post(`/website/article/queryByClient`, params);

// 搜索
export const ajax_article_queryWithWords = (params: any) =>
  axios.post(`/website/article/queryWithWords`, params);

// 保存我的博客

export const ajax_article_saveMyBlog = (params: any) =>
  axios.post(`/website/article/saveMyBlog`, params);

// 查询网站数据
export const ajax_config_queryByClient = (params: any) =>
  axios.post(`/website/config/queryByClient`, params);
