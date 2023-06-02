import { AppConfigType } from "@/types";
import { useSelector } from "react-redux";

const Index = () => {
  const state: any = useSelector((state) => state);
  const appConfig: AppConfigType = state.pageProps.appConfig;
  return (
    <>
      <div className="card-widget card-announcement">
        <div className="item-headline">
          <i className="fas fa-bullhorn fa-shake"></i>
          <span>公告</span>
        </div>
        <div className="announcement_content">
          {appConfig?.w_website_announcement}
        </div>
      </div>
    </>
  );
};

export default Index;
