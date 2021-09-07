import type { NextPage } from "next";
import Head from "next/head";
import ArticleHeader from "./ArticleHeader";
import ArticleMain from "./ArticleMain";
import PageFooter from "./../../components/PageFooter";

const Home: NextPage = () => {
  return (
    <div className="z_page_wrap">
      <Head>
        <title>Create Next App</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </Head>
      <ArticleHeader />
      <ArticleMain />
      <PageFooter />
    </div>
  );
};

export default Home;
