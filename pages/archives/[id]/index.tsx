import type { NextPage } from "next";
import { ajax_article_query } from "./../../../api";
import { wrapper } from "../../../store";
import { getPageCommonData } from "../../../utils";
import { connect } from "react-redux";
import Index from "./../index";

const Home: NextPage = () => {
  return <Index />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }): any => {
      //
      let { params } = etc;
      // console.log(params);
      let currentPage = 1;
      let column_id = 0;
      if (params && params.page) {
        currentPage = Number(params.page);
      }
      if (params && params.id) {
        column_id = Number(params.id);
      }
      //
      let callback = async () => {
        await getPageCommonData(store);
        let mainArticleData: any = await ajax_article_query({
          pageSize: 10,
          currentPage,
          column_id,
        });
        store.dispatch({
          type: "Get_mainArticleData",
          payload: mainArticleData,
        });
        store.dispatch({
          type: "Set_pagePaginationData",
          payload: {
            totalCount: mainArticleData.total,
            curPage: mainArticleData.currentPage,
            pageSize: mainArticleData.pageSize,
            baseHref: `/archives/${column_id}/`,
          },
        });
      };
      return callback();
    }
);

export default connect((state) => state)(Home);
