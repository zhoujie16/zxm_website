/**
 * @Author: 焦质晔
 * @Date: 2019-06-20 10:00:00
 * @Last Modified by: 焦质晔
 * @Last Modified time: 2020-06-17 15:08:34
 */
import axios from "./fetch";

// 测试
export const ajax_test = () => axios.get(`/`, {});
// 首页数据 api/website/web/queryHome

export const ajax_column_query = () => axios.post(`/website/column/query`, {});

// /website/column/queryList
export const ajax_column_queryList = () =>
  axios.post(`/website/column/queryList`, {});

// 查询文章详细 website/article/queryDetail
export const ajax_article_queryDetail = (params) =>
  axios.post(`/website/article/queryDetail`, params);
