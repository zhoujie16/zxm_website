import type { NextPage } from "next";
import PageHeader from "./../../components/PageHeader";
import PageMain from "./../../components/PageMain";
import PageFooter from "./../../components/PageFooter";

const Home: NextPage = () => {
  return (
    <div className="z_page_wrap">
      <PageHeader />
      <PageMain />
      <PageFooter />
    </div>
  );
};

export default Home;
