import AsideContainer from "@/components/AsideContainer";
import AppContainer from "@/components/AppContainer";
import TechnicalHeader from "@/components/Technical/TechnicalHeader";
import TechnicalMain from "@/components/Technical/TechnicalMain";
import { useEffect } from "react";
import { record_add } from "@/utils/apiTools";
import { spmLog } from "@/utils";

export default function Home(props: any) {
  const { allColumn } = props;
  useEffect(() => {
    record_add("zxm_blog.technical_page.pv");
    spmLog("zxm_blog.technical_page.enter");
  }, []);
  return (
    <>
      <AppContainer pageProps={props}>
        <div className="page" id="body-wrap">
          <TechnicalHeader />
          <main className="layout" id="content-inner">
            <TechnicalMain allColumn={allColumn} />
            <AsideContainer />
          </main>
        </div>
      </AppContainer>
    </>
  );
}
