import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageFooter from "./../../components/PageFooter";
import CategoriesMain from "./../../components/CategoriesMain";
import CategoriesHeader from "./../../components/CategoriesHeader";
import { wrapper } from "./../../store";
import { connect } from "react-redux";
import { getPageCommonData } from "./../../utils";

const Home: NextPage = (props) => {
  return (
    <div className="z_page_wrap">
      <BaseHead />
      <div className="page" id="body-wrap">
        <CategoriesHeader />
        <CategoriesMain />
        <PageFooter />
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }): any => {
      let { params } = etc;
      let parent_id: any = 0;
      if (params && params.id) {
        parent_id = params.id;
      }
      store.dispatch({
        type: "Set_pageCategoriesData",
        payload: {
          parent_id,
        },
      });
      let callback = async () => {
        await getPageCommonData(store);
      };
      return callback();
    }
);

export default connect((state) => state)(Home);
