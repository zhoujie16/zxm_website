import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageFooter from "./../../components/PageFooter";
import ArchivesMain from "./ArchivesMain";
import ArchivesHeader from "./ArchivesHeader";
import { ajax_column_query } from "./../api";

const Home: NextPage = () => {
  return (
    <div className="z_page_wrap">
      <BaseHead />
      <div className="page" id="body-wrap">
        <ArchivesHeader />
        <ArchivesMain />
        <PageFooter />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  let column = await ajax_column_query();
  return {
    props: {
      appStore: {
        column,
      },
    },
  };
}
