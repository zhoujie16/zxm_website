import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import ArticleHeader from "./../../components/ArticleHeader";
import OtherMain from "./../../components/OtherMain";
import PageFooter from "././../../components/PageFooter";
import { wrapper } from "../../store";
import { getPageCommonData } from "../../utils";
import { connect } from "react-redux";

const Home: NextPage = () => {
  return (
    <div className="z_page_wrap">
      <BaseHead />
      <div className="post" id="body-wrap">
        <ArticleHeader />
        <OtherMain />
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
      };
      return callback();
    }
);

export default connect((state) => state)(Home);
