export enum ActionTypes {
  Update_PageProps = "Update_PageProps",
  Update_AppConfig = "Update_AppConfig",
  Update_BackgroundImage = "Update_BackgroundImage",
}

export type CategoriesListItemType = {
  _id: string;
  category_id: string;
  rank: number;
  parent_id: string;
  title: string;
  sub_title: string;
  route: string;
  tips: string;
  is_banner: number;
  text: string;
  value: number;
  children?: any;
};

export type AppConfigType = {
  w_blog_all_count: string;
  w_category_all_count: string;
  w_last_update_time: string;
  w_pv_all_count: string;
  w_pv_week_count: string;
  w_sponsor_code: string;
  w_uv_all_count: string;
  w_uv_week_count: string;
  w_website_announcement: string;
  w_website_author: string;
  w_website_beian: string;
  w_website_bg: string;
  w_website_code: string;
  w_website_create_time: string;
  w_website_description: string;
  w_website_email: string;
  w_website_git: string;
  w_website_name: string;
  w_website_weixin: string;
};

export interface ArticleType {
  _id: string;
  wid: number;
  wkey: string;
  category_id: number;
  title: string;
  sub_title: string;
  author: string;
  release_time: number;
  images: string;
  url: string;
  content_rich: string;
  state: number;
  is_free: number;
  rank: number;
  created_at: number;
  updated_at: number;
  __v: number;
}

export interface PagePropsType {
  allColumn: CategoriesListItemType[];
  appConfig: AppConfigType;
  [key: string]: any;
}

export interface StateType {
  pageProps: PagePropsType;
  backgroundImage: string;
  [key: string]: any;
}
