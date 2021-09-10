import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageFooter from "./../../components/PageFooter";
import ArchivesMain from "./ArchivesMain";
import ArchivesHeader from "./ArchivesHeader";

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
