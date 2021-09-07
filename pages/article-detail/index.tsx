import type { NextPage } from "next";
import ArticleHeader from "./ArticleHeader";
import ArticleMain from "./ArticleMain";
import PageFooter from "./../../components/PageFooter";

const Home: NextPage = () => {
  return (
    <div className="z_page_wrap">
      <ArticleHeader />
      <ArticleMain />
      <PageFooter />
    </div>
  );
};

export default Home;
