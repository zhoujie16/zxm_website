import AppContainer from "@/components/AppContainer";
import { useEffect } from "react";
import { record_add } from "@/utils/apiTools";
import { spmLog } from "@/utils";
import ErrorHeader from "@/components/404/ErrorHeader";

export default function Home(props: any) {
  useEffect(() => {
    record_add("zxm_blog.404_page.pv");
    spmLog("zxm_blog.404_page.enter");
  }, []);
  return (
    <>
      <AppContainer pageProps={props}>
        <div className="error404" id="body-wrap">
          <ErrorHeader />
          <div id="error-wrap" style={{ top: "40%" }}>
            <div className="error-content">
              <div className="error-img">
                <img
                  src="https://i.loli.net/2020/05/19/aKOcLiyPl2JQdFD.png"
                  alt="Page not found"
                />
              </div>
              <div className="error-info">
                <h1 className="error_title">404</h1>
                <div className="error_subtitle">頁面沒有找到</div>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </>
  );
}
