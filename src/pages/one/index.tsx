import AsideContainer from "@/components/AsideContainer";
import AppContainer from "@/components/AppContainer";
import ArchivesContent from "@/components/Archives/ArchivesContent";
import ArchivesHeader from "@/components/Archives/ArchivesHeader";
import { GetServerSidePropsContext } from "next";
import { ajax_article_query, record_add } from "@/utils/apiTools";
import { useEffect } from "react";
import { spmLog } from "@/utils";

export default function Index(props: any) {
  const { archivesData, category_id } = props;
  useEffect(() => {
    record_add("zxm_blog.one_page.pv");
    spmLog("zxm_blog.one_page.enter");
  }, []);
  return (
    <>
      <AppContainer pageProps={props}>
        <div className="page" id="body-wrap">
          <ArchivesHeader category_id={category_id} />
          <main className="layout" id="content-inner">
            <ArchivesContent archivesData={archivesData} />
            <AsideContainer />
          </main>
        </div>
      </AppContainer>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { page } = context.query;
  const category_id = "one";
  const archivesData = await ajax_article_query({
    category_id,
    currentPage: page,
    sort: -1,
  });
  return {
    props: {
      archivesData,
      category_id,
    },
  };
}
