import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import ArticleHeader from "./../../components/ArticleHeader";
import ArticleMain from "./../../components/ArticleMain";
import PageFooter from "././../../components/PageFooter";
import { ajax_article_queryDetail } from "./../../api";
import { wrapper } from "../../store";
import { getPageCommonData } from "../../utils";
import { connect } from "react-redux";

const Home: NextPage = () => {
  return (
    <div className="z_page_wrap">
      <BaseHead />
      <div className="post" id="body-wrap">
        <ArticleHeader />
        <ArticleMain />
        <PageFooter />
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => (ctx: any): any => {
    let callback = async () => {
      await getPageCommonData(store);
      let res: any = await ajax_article_queryDetail({
        id: Number(ctx.params.id),
      });
      // console.log("1111", { id: ctx.params.id }, res);
      let { article, prev, next, related } = res;
      store.dispatch({
        type: "Get_mainArticleDetail",
        payload: res,
      });
    };
    return callback();
  }
);

export default connect((state) => state)(Home);
