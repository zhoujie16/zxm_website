import AsideContainer from "@/components/AsideContainer";
import AppContainer from "@/components/AppContainer";
import PostBg from "@/components/Post/PostBg";
import PostMain from "@/components/Post/PostMain";
import { GetServerSidePropsContext } from "next";
import { ajax_article_queryDetail, record_add } from "@/utils/apiTools";
import { useEffect } from "react";
import { spmLog } from "@/utils";

export default function Home(props: any) {
  const { postDetail } = props;
  useEffect(() => {
    record_add("zxm_blog.post_page.pv");
    record_add(
      `zxm_blog.post_page.pv.${postDetail.article._id}`,
      postDetail.article.title
    );
    spmLog("zxm_blog.post_page.enter", {
      _id: postDetail.article._id,
      title: postDetail.article.title,
    });
  }, []);
  return (
    <>
      <AppContainer pageProps={props}>
        <div className="page" id="body-wrap">
          <PostBg postDetail={postDetail} />
          <main className="layout" id="content-inner">
            <PostMain postDetail={postDetail} />
            <AsideContainer />
          </main>
        </div>
      </AppContainer>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id;
  const postDetail = await ajax_article_queryDetail({ id });
  // console.log("postDetail", postDetail);
  return {
    props: {
      postDetail,
    },
  };
}
