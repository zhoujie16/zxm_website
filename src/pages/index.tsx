import AppContainer from "@/components/AppContainer";
import AsideContainer from "@/components/AsideContainer";
import FullPage from "@/components/Home/FullPage";
import RecentPosts from "@/components/Home/RecentPosts";
import { spmLog } from "@/utils";
import { ajax_article_query, record_add } from "@/utils/apiTools";
import { GetServerSidePropsContext } from "next";
import { useEffect } from "react";

export default function Home(props: any) {
  const { postsData } = props;
  useEffect(() => {
    record_add("zxm_blog.home_page.pv");
    spmLog("zxm_blog.home_page.enter");
  }, []);
  return (
    <>
      <AppContainer pageProps={props}>
        <FullPage />
        <main className="layout" id="content-inner">
          <RecentPosts postsData={postsData} />
          <AsideContainer />
        </main>
      </AppContainer>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { page = 1 } = context.query;
  const postsData = await ajax_article_query({
    category_id: "",
    currentPage: page,
    sort: -1,
  });
  return {
    props: {
      postsData,
    },
  };
}
