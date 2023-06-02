import AsideContainer from "@/components/AsideContainer";
import AppContainer from "@/components/AppContainer";
import { useEffect } from "react";
import { record_add } from "@/utils/apiTools";
import { spmLog } from "@/utils";
import InterviewMain from "@/components/Interview/InterviewMain";
import InterviewHeader from "@/components/Interview/InterviewHeader";

export default function Home(props: any) {
  const { allColumn } = props;
  useEffect(() => {
    record_add("zxm_blog.interview_page.pv");
    spmLog("zxm_blog.interview_page.enter");
  }, []);
  return (
    <>
      <AppContainer pageProps={props}>
        <div className="page" id="body-wrap">
          <InterviewHeader />
          <main className="layout" id="content-inner">
            <InterviewMain allColumn={allColumn} />
            <AsideContainer />
          </main>
        </div>
      </AppContainer>
    </>
  );
}
