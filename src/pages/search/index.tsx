import AsideContainer from "@/components/AsideContainer";
import AppContainer from "@/components/AppContainer";
import CommonPageHeader from "@/components/CommonPageHeader";
import SearchPanel from "@/components/Search/SearchPanel";
import { useEffect } from "react";
import { record_add } from "@/utils/apiTools";
import { spmLog } from "@/utils";

export default function Home(props: any) {
  useEffect(() => {
    record_add("zxm_blog.search_page.pv");
    spmLog("zxm_blog.search_page.enter");
  }, []);
  return (
    <>
      <AppContainer>
        <div className="page" id="body-wrap">
          <CommonPageHeader title="搜索" />
          <main className="layout" id="content-inner">
            <SearchPanel />
            <AsideContainer />
          </main>
        </div>
      </AppContainer>
    </>
  );
}
