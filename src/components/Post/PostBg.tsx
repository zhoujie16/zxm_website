import dayjs from "dayjs";
import NavigationBar from "../NavigationBar";
import { useSelector } from "react-redux";
import { StateType } from "@/types";

/**
 * 文章页 头部
 */
export default function ({ postDetail }: any) {
  const state = useSelector((state: StateType) => state);
  const { article } = postDetail;
  return (
    <>
      <header
        className="post-bg"
        id="page-header"
        style={{
          backgroundImage: `url('${state.backgroundImage}')`,
        }}
      >
        <NavigationBar />
        <div id="post-info">
          <h1 className="post-title">
            {article.title}
            {/* <a
              className="post-edit-link"
              href="https://github.com/jerryc127/butterfly.js.org/edit/main/source/_posts/Butterfly-安裝文檔-一-快速開始.md"
              rel="external nofollow noreferrer"
              title="編輯"
              target="_blank"
            >
              <i className="fas fa-pencil-alt"></i>
            </a> */}
          </h1>
          <div id="post-meta">
            <div className="meta-firstline">
              <span className="post-meta-date">
                <i className="fa-fw post-meta-icon far fa-calendar-alt"></i>
                <span className="post-meta-label">发表于</span>
                <span>{dayjs(article.release_time).format("YYYY-MM-DD")}</span>
              </span>
              {/* <span className="post-meta-categories">
                <span className="post-meta-separator">|</span>
                <i className="fas fa-inbox fa-fw post-meta-icon"></i>
                <a
                  className="post-meta-categories"
                  href="/categories/Docs%E6%96%87%E6%AA%94/"
                >
                  Docs文檔
                </a>
              </span> */}
            </div>
            {/* <div className="meta-secondline">
              <span className="post-meta-separator">|</span>
              <span className="post-meta-wordcount">
                <i className="far fa-file-word fa-fw post-meta-icon"></i>
                <span className="post-meta-label">字數總計:</span>
                <span className="word-count">687</span>
                <span className="post-meta-separator">|</span>
                <i className="far fa-clock fa-fw post-meta-icon"></i>
                <span className="post-meta-label">閱讀時長:</span>
                <span>2分鐘</span>
              </span>
              <span className="post-meta-separator">|</span>
              <span
                className="post-meta-pv-cv"
                data-flag-title="Butterfly 安裝文檔(一) 快速開始"
              >
                <i className="far fa-eye fa-fw post-meta-icon"></i>
                <span className="post-meta-label">閱讀量:</span>
                <span id="busuanzi_value_page_pv">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </span>
              </span>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
