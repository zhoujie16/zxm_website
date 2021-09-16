import { wrapper } from "../store";
import { getPageCommonData } from "../utils";
import { ajax_article_query } from "./../api";
import Home from "./home";

const Index = () => {
  return <Home />;
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }): any => {
      let { params } = etc;
      let currentPage = 1;
      if (params && params.page) {
        currentPage = Number(params.page);
      }
      let callback = async () => {
        await getPageCommonData(store);
        let mainArticleData: any = await ajax_article_query({
          pageSize: 10,
          currentPage,
        });
        // console.log("mainArticleData", mainArticleData);
        store.dispatch({
          type: "Get_mainArticleData",
          payload: mainArticleData,
        });
        /**
         * totalCount: 0,
         * pageSize: 0,
         * curPage: 0,
         * baseHref: "/home/page/",
         */
        store.dispatch({
          type: "Set_pagePaginationData",
          payload: {
            totalCount: mainArticleData.total,
            curPage: mainArticleData.currentPage,
            pageSize: mainArticleData.pageSize,
            baseHref: "/home/page/",
          },
        });
      };
      return callback();
    }
);
