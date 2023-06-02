import AsideContainer from "@/components/AsideContainer";
import AppContainer from "@/components/AppContainer";
import ArchivesContent from "@/components/Archives/ArchivesContent";
import ArchivesHeader from "@/components/Archives/ArchivesHeader";
import { GetServerSidePropsContext } from "next";
import { ajax_article_query } from "@/utils/apiTools";

export default function Index(props: any) {
  const { archivesData, category_id } = props;
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
  const { category_id, page } = context.query;
  const archivesData = await ajax_article_query({
    category_id: category_id,
    currentPage: page,
    sort: 1,
  });
  // console.log("postDetail", postDetail);
  return {
    props: {
      archivesData,
      category_id,
    },
  };
}
