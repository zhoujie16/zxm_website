import { AppConfigType } from "@/types";
import { useSelector } from "react-redux";

const Index = () => {
  const state: any = useSelector((state) => state);
  const appConfig: AppConfigType = state.pageProps.appConfig;
  return (
    <>
      <div className="card-widget card-webinfo">
        <div className="item-headline">
          <i className="fas fa-chart-line"></i>
          <span>网站资讯</span>
        </div>
        <div className="webinfo">
          <div className="webinfo-item">
            <div className="item-name">文章数量 :</div>
            <div className="item-count">{appConfig?.w_blog_all_count}</div>
          </div>
          {/* <div className="webinfo-item">
            <div className="item-name">已執行時間 :</div>
            <div
              className="item-count"
              id="runtimeshow"
              data-publishdate="2019-11-13T00:00:00.000Z"
            >
              <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
          </div> */}
          {/* <div className="webinfo-item">
            <div className="item-name">本站總字數 :</div>
            <div className="item-count">54.4k</div>
          </div> */}
          {/* <div className="webinfo-item">
            <div className="item-name">本站訪客數 :</div>
            <div className="item-count" id="busuanzi_value_site_uv">
              <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
          </div> */}
          {/* <div className="webinfo-item">
            <div className="item-name">本站總訪問量 :</div>
            <div className="item-count" id="busuanzi_value_site_pv">
              <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
          </div> */}
          {/* <div className="webinfo-item">
            <div className="item-name">最後更新時間 :</div>
            <div
              className="item-count"
              id="last-push-date"
              data-lastpushdate="2023-04-10T13:14:04.585Z"
            >
              <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Index;
