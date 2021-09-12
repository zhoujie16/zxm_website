import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageFooter from "./../../components/PageFooter";
import ArchivesMain from "components/ArchivesMain";
import ArchivesHeader from "components/ArchivesHeader";
import { ajax_article_query } from "./../../api";
import { wrapper } from "../../store";
import { getPageCommonData } from "../../utils";
import { connect } from "react-redux";

const Home: NextPage = () => {
  return (
    <div className="z_page_wrap">
      <BaseHead />
      <div className="page" id="body-wrap">
        <ArchivesHeader />
        <ArchivesMain />
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
      let column_id = 0;
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
