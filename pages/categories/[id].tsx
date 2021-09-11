import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageFooter from "./../../components/PageFooter";
import CategoriesMain from "./CategoriesMain";
import CategoriesHeader from "./CategoriesHeader";
import { ajax_column_query, ajax_column_queryList } from "./../api";

const Home: NextPage = ({ appStore }) => {
  return (
    <div className="z_page_wrap">
      <BaseHead />
      <div className="page" id="body-wrap">
        <CategoriesHeader appStore={appStore} />
        <CategoriesMain appStore={appStore} />
        <PageFooter />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  console.log(context);
  let column = await ajax_column_query();
  let categoriesList = await ajax_column_queryList();
  return {
    props: {
      appStore: {
        column,
        categoriesList,
      },
    },
  };
}
