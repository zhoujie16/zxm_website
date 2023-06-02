import Config from "@/config";
import axios from "./fetch";

// 分类数据
export const ajax_column_queryWithClient = async () => {
  const res = await axios.post(`/website/category/queryWithClient`, {});
  const list: any[] = res?.data?.data || [];
  return list;
};

// 查询网站数据
export const ajax_config_queryByClient = async () => {
  const res = await axios.post(`/website/config/queryByClient`, {});
  return res?.data?.data || {};
};

// 查询文章详细 website/blog/queryDetail
export const ajax_article_queryDetail = async ({ id }: any) => {
  const res = await axios.post(`/website/blog/queryDetailByClient`, { id });
  return res?.data?.data || {};
};

// 查询文章列表 /website/blog/query
export const ajax_article_query = async ({
  pageSize = 10,
  currentPage = 1,
  category_id = "",
  sort = -1,
}: any) => {
  const res = await axios.post(`/website/blog/queryByClient`, {
    pageSize: Number(pageSize),
    currentPage: Number(currentPage),
    category_id: category_id,
    sort: Number(sort),
  });
  return res?.data?.data || {};
};

// 评论
export const ajax_comment_add = (params: any) =>
  axios.post(`/website/comment/add`, params);

// 查询评论
export const ajax_comment_queryByClient = (params: any) =>
  axios.post(`/website/comment/queryByClient`, params);

/**
 * 记录数据
 */
export const record_add = (code: string, title = "") => {
  const imgTmp = new Image();
  imgTmp.src = `${Config.spmUrl}/record/add?code=${code}&title=${encodeURIComponent(
    title
  )}&t=${new Date().getTime()}`;
};

export const record_add_axios = (code: string, title = "") => {
  const url = `${Config.spmUrl}/record/add?code=${code}&title=${encodeURIComponent(
    title
  )}&t=${new Date().getTime()}`;
  axios.get(url);
};

// 查询 blog 相关推荐
export const ajax_blog_queryPostRelated = ({ id, category_id }: any) =>
  axios.post(`/website/blog/queryPostRelated`, { id, category_id });

// 查询 One Channel
export const ajax_one_queryOneLatestChannel = async ({}: any) => {
  const res = await axios.post(`/one/queryOneLatestChannel`, {});
  return res?.data?.data || {};
};
