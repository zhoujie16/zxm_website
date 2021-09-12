import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageHeader from "./PageHeader";
import PageMain from "./PageMain";
import PageFooter from "././../../components/PageFooter";
import { wrapper } from "./../../store";
import { connect } from "react-redux";
import { getPageCommonData } from "./../../utils";
import { ajax_article_query } from "../../api";

const Home: NextPage = (props) => {
  return (
    <div className="z_page_wrap">
      <BaseHead />
      <div className="page" id="body-wrap">
        <PageHeader />
        <PageMain />
        <PageFooter />
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }): any => {
      //
      let { params } = etc;
      let currentPage = 1;
      if (params && params.page) {
        currentPage = Number(params.page);
      }
      //
      let callback = async () => {
        await getPageCommonData(store);
        let mainArticleData: any = await ajax_article_query({
          pageSize: 10,
          currentPage,
        });
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

export default connect((state) => state)(Home);
