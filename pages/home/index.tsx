import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageHeader from "./PageHeader";
import PageMain from "./PageMain";
import PageFooter from "././../../components/PageFooter";
import { ajax_column_query } from "./../api";

const Home: NextPage = ({ appStore }) => {
  return (
    <div className="z_page_wrap">
      <BaseHead />
      <div className="page" id="body-wrap">
        <PageHeader appStore={appStore} />
        <PageMain />
        <PageFooter />
      </div>
    </div>
  );
};

export default Home;

// export async function getStaticProps() {
//   console.log("getStaticProps");
//   const data = {
//     test1: "test1",
//   };
//   return {
//     props: {
//       test2: "test2",
//     },
//   };
// }

export async function getServerSideProps(context: any) {
  let column = await ajax_column_query({});
  return {
    props: {
      appStore: {
        column,
      },
    },
  };
}
