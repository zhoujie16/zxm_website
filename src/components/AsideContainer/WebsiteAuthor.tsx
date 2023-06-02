import { AppConfigType } from "@/types";
import { spmLog } from "@/utils";
import { useSelector } from "react-redux";

const Index = () => {
  const state: any = useSelector((state: any) => state);
  const appConfig: AppConfigType = state.pageProps.appConfig;
  return (
    <>
      <div className="card-widget card-info">
        <div className="is-center">
          <div className="avatar-img">
            <img
              src="https://s2.loli.net/2023/05/25/euxWDnAYaGTIBfO.jpg"
              alt="avatar"
            />
          </div>
          <div className="author-info__name">{appConfig?.w_website_author}</div>
          <div className="author-info__description">
            {appConfig?.w_website_description}
          </div>
        </div>
        <div className="card-info-data site-data is-center">
          <a href="/archives/">
            <div className="headline">文章</div>
            <div className="length-num">{appConfig?.w_blog_all_count}</div>
          </a>
          {/* <a href="/tags/">
            <div className="headline">標籤</div>
            <div className="length-num">11</div>
          </a> */}
          {/* <a href="/categories/">
            <div className="headline">分类</div>
            <div className="length-num">{appConfig?.w_blog_all_count}</div>
          </a> */}
        </div>
        <a
          id="card-info-btn"
          href={appConfig?.w_website_git}
          target="_blank"
          rel="noopener external nofollow noreferrer"
          onClick={() => {
            spmLog("zxm_blog.home.github_btn_click");
          }}
        >
          <i className="fab fa-github"></i>
          <span>GitHub</span>
        </a>
        {/* <div className="card-info-social-icons is-center">
          <a
            className="social-icon"
            href="mailto:my@crazywong.com"
            rel="external nofollow noreferrer"
            target="_blank"
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            className="social-icon"
            href="/atom.xml"
            target="_blank"
            title="RSS"
          >
            <i className="fas fa-rss"></i>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default Index;
