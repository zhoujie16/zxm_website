import type { NextPage } from "next";
import Head from "next/head";
import PageHeader from "./PageHeader";
import PageMain from "./PageMain";
import PageFooter from "././../../components/PageFooter";

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
      <div className="page" id="body-wrap">
        <PageHeader />
        <PageMain />
        <PageFooter />
      </div>
    </div>
  );
};

export default Home;

// export async function getStaticProps() {
//   console.log("getStaticProps");
//   // Get external data from the file system, API, DB, etc.
//   const data = {
//     test1: "test1",
//   };

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: {
//       test2: "test2",
//     },
//   };
// }

export async function getServerSideProps(context: any) {
  console.log("getServerSideProps", context);
  return {
    props: {
      // props for your component
    },
  };
}
