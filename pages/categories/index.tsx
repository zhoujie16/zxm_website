import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageFooter from "./../../components/PageFooter";
import CategoriesMain from "./CategoriesMain";
import CategoriesHeader from "./CategoriesHeader";
import { ajax_column_query, ajax_column_queryList } from "./../api";
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
      let callback = async () => {
        await getPageCommonData(store);
      };
      return callback();
    }
);

export default connect((state) => state)(Home);
