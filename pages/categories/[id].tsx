import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageFooter from "./../../components/PageFooter";
import CategoriesMain from "./CategoriesMain";
import CategoriesHeader from "./CategoriesHeader";
import { ajax_column_query, ajax_column_queryList } from "./../api";
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
      let callback = async () => {
        await getPageCommonData(store);
      };
      return callback();
    }
);

export default connect((state) => state)(Home);
