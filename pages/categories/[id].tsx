import type { NextPage } from "next";
import { wrapper } from "../../store";
import { getPageCommonData } from "../../utils";
import { connect } from "react-redux";
import MyPage from "./index";

const Home: NextPage = () => {
  return <MyPage />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }): any => {
      let { params } = etc;
      // console.log(params);
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
