import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageFooter from "./../../components/PageFooter";
import ArchivesMain from "./ArchivesMain";
import ArchivesHeader from "./ArchivesHeader";
import { ajax_article_query } from "./../api";
import { wrapper } from "../../store";
import { getPageCommonData } from "../../utils";
import { connect } from "react-redux";

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }): any => {
      let callback = async () => {
        await getPageCommonData(store);
        let mainArticleData = await ajax_article_query({});
        store.dispatch({
          type: "Get_mainArticleData",
          payload: mainArticleData,
        });
      };
      return callback();
    }
);

export default connect((state) => state)(Home);
