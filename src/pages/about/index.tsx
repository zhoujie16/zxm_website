import AsideContainer from "@/components/AsideContainer";
import AppContainer from "@/components/AppContainer";
import AboutHeader from "@/components/About/AboutHeader";
import AboutMain from "@/components/About/AboutMain";
import { useEffect } from "react";
import { record_add } from "@/utils/apiTools";
import { spmLog } from "@/utils";

export default function Home(props: any) {
  const { postDetail } = props;
  useEffect(() => {
    record_add("zxm_blog.about_page.pv");
    spmLog("zxm_blog.about_page.enter");
  }, []);
  return (
    <>
      <AppContainer pageProps={props}>
        <div className="page" id="body-wrap">
          <AboutHeader />
          <main className="layout" id="content-inner">
            <AboutMain />
            <AsideContainer />
          </main>
        </div>
      </AppContainer>
    </>
  );
}
