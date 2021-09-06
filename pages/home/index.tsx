import type { NextPage } from "next";
import PageHeader from "./../components/PageHeader";
import PageMain from "./../components/PageMain";

const Home: NextPage = () => {
  return (
    <div className="z_page_wrap">
      <PageHeader />
      <PageMain />
    </div>
  );
};

export default Home;
