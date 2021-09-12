import Link from "next/link";
import { connect } from "react-redux";
import { getCategoriesTreeList } from "./../../utils";

const Index = (props: any) => {
  let columnList = getCategoriesTreeList(props.mainCategoriesList);
  return (
    <nav id="nav">
      <span id="blog_name">
        <a id="site-name" href="/">
          Butterfly
        </a>
      </span>
      <div id="menus">
        <div id="search-button">
          <a className="site-page social-icon search">
            <i className="fas fa-search fa-fw"></i> <span>搜尋</span>
          </a>
        </div>
        <div className="menus_items">
          {columnList.map((item: any) => {
            return (
              <div className="menus_item" key={item.id}>
                <a
                  className="site-page"
                  rel="external nofollow noreferrer"
                  href={item.route}
                >
                  <i className={item.tips}></i>
                  <span>{item.title}</span>
                  {item.children ? (
                    <i className="fas fa-chevron-down expand"></i>
                  ) : (
                    ""
                  )}
                </a>

                {item.children ? (
                  <ul className="menus_item_child">
                    {item.children.map((x: any) => {
                      return (
                        <li key={x.id}>
                          <a className="site-page child" href={x.route}>
                            <i className={x.tips}></i> <span>{x.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            );
          })}
          {/*
          <div className="menus_item">
            <a className="site-page" href="/">
              <i className="fa-fw fas fa-home"></i> <span>首頁</span>
            </a>
          </div>
          <div className="menus_item">
            <a
              className="site-page"
              href="javascript:void(0);"
              rel="external nofollow noreferrer"
            >
              <i className="fa-fw fas fa-compass"></i> <span>目錄</span>
              <i className="fas fa-chevron-down expand"></i>
            </a>
            <ul className="menus_item_child">
              <li>
                <a className="site-page child" href="/archives/">
                  <i className="fa-fw fas fa-archive"></i> <span>歸檔</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/tags/">
                  <i className="fa-fw fas fa-tags"></i> <span>標籤</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/categories/">
                  <i className="fa-fw fas fa-folder-open"></i>
                  <span>分類</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menus_item">
            <a
              className="site-page"
              href="javascript:void(0);"
              rel="external nofollow noreferrer"
            >
              <i className="fa-fw fas fa-book"></i> <span>文檔</span>
              <i className="fas fa-chevron-down expand"></i>
            </a>
            <ul className="menus_item_child">
              <li>
                <a className="site-page child" href="/posts/21cfbf15/">
                  <span>🚀 快速開始</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/posts/dc584b87/">
                  <span>📑 主題頁面</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/posts/4aa8abbe/">
                  <span>🛠 主題配置-1</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/posts/ceeb73f/">
                  <span>⚔️ 主題配置-2</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/posts/98d20436/">
                  <span>❓ 主題問答</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/posts/4073eda/">
                  <span>⚡️ 進階教程</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/posts/198a4240/">
                  <span>✨ 更新日誌</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menus_item">
            <a
              className="site-page"
              href="javascript:void(0);"
              rel="external nofollow noreferrer"
            >
              <i className="fa-fw fa fa-heartbeat"></i> <span>娛樂</span>
              <i className="fas fa-chevron-down expand"></i>
            </a>
            <ul className="menus_item_child">
              <li>
                <a className="site-page child" href="/Gallery/">
                  <i className="fa-fw fas fa-images"></i> <span>圖庫</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/movies/">
                  <i className="fa-fw fas fa-video"></i> <span>電影</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/talking/">
                  <i className="fa-fw fas fa-cubes"></i>
                  <span>自言自語</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menus_item">
            <a className="site-page" href="/messageboard/">
              <i className="fa-fw fas fa-comment-dots"></i>
              <span>留言板</span>
            </a>
          </div>
          <div className="menus_item">
            <a className="site-page" href="/link/">
              <i className="fa-fw fas fa-thumbs-up"></i> <span>示例</span>
            </a>
          </div>
        */}
        </div>
        <div id="toggle-menu">
          <a className="site-page">
            <i className="fas fa-bars fa-fw"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default connect((state) => state)(Index);
