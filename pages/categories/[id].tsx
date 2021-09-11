import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageFooter from "./../../components/PageFooter";
import CategoriesMain from "./CategoriesMain";
import CategoriesHeader from "./CategoriesHeader";
import { ajax_column_query, ajax_column_queryList } from "./../api";

const Home: NextPage = () => {
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

export default Home;
