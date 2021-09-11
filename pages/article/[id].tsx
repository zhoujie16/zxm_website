import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import ArticleHeader from "./ArticleHeader";
import ArticleMain from "./ArticleMain";
import PageFooter from "././../../components/PageFooter";
import { ajax_column_query, ajax_article_queryDetail } from "./../api";

const Home: NextPage = ({ appStore }) => {
  return (
    <div className="z_page_wrap">
      <BaseHead />
      <div className="post" id="body-wrap">
        <ArticleHeader appStore={appStore} />
        <ArticleMain appStore={appStore} />
        <PageFooter />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  let column = await ajax_column_query();
  let articleDetail = await ajax_article_queryDetail({ id: 3 });
  return {
    props: {
      appStore: {
        column,
        article: articleDetail,
      },
    },
  };
}
