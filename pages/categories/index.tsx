import type { NextPage } from "next";
import Head from "next/head";
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
      <PageFooter />
    </div>
  );
};

export default Home;
