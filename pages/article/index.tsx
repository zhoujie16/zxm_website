import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import ArticleHeader from "./ArticleHeader";
import ArticleMain from "./ArticleMain";
import PageFooter from "././../../components/PageFooter";

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

export default Home;
