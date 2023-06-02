import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { StateType } from "@/types";

export default function () {
  let [devicetype, setDevicetype] = useState<any>("pc");
  useEffect(() => {
    // 定义要执行的方法
    function onScreenSizeChange(matches: any) {
      if (matches) {
        // 当屏幕宽度小于800时执行的代码
        // console.log("屏幕宽度小于800");
        setDevicetype("mobile");
      } else {
        // 当屏幕宽度大于或等于800时执行的代码
        // console.log("屏幕宽度大于或等于800");
        setDevicetype("pc");
      }
    }

    // 监听屏幕宽度的变化
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    mediaQuery.addEventListener("change", (e) => onScreenSizeChange(e.matches));

    // 初始状态下检查屏幕宽度
    onScreenSizeChange(mediaQuery.matches);
  }, []);

  let [isOpen, setIsOpen] = useState(false);
  const toggleMenuClickFn = () => {
    // console.log("toggleMenuClickFn");
    setIsOpen(true);
  };

  const state = useSelector((state: StateType) => state);
  const title = state.pageProps?.appConfig?.w_website_name || "";

  return (
    <>
      <nav
        id="nav"
        className={`show${devicetype === "mobile" ? " hide-menu" : ""}`}
      >
        <span id="blog-info">
          <a href="/" title={title}>
            <span className="site-name">{title}</span>
          </a>
        </span>
        <div id="menus">
          {/* <div id="search-button">
            <a
              className="site-page social-icon search"
              href="javascript:void(0);"
              rel="external nofollow noreferrer"
            >
              <i className="fas fa-search fa-fw"></i> <span>搜索</span>
            </a>
          </div> */}
          <div className="menus_items">
            <div className="menus_item">
              <a className="site-page" href="/">
                <i className="fa-fw fas fa-home"></i> <span>首页</span>
              </a>
            </div>
            <div className="menus_item">
              <a className="site-page" href="/one">
                <i className="fa-fw fas fa-compass"></i>
                <span>阅读</span>
              </a>
            </div>
            {/* <div className="menus_item">
              <a className="site-page" href="/interview">
                <i className="fa-fw fas fa-compass"></i>
                <span>前端系统进阶笔记</span>
              </a>
            </div> */}
            <div className="menus_item">
              <a className="site-page" href="/technical">
                <i className="fa-fw fas fa-book"></i> <span>技术专栏</span>
              </a>
            </div>
            <div className="menus_item">
              <a className="site-page" href="/about">
                <i className="fa-fw fas fa-thumbs-up"></i> <span>关于</span>
              </a>
            </div>
            {/* <div className="menus_item">
              <a
                className="site-page group"
                href="javascript:void(0);"
                rel="external nofollow noreferrer"
              >
                <i className="fa-fw fas fa-compass"></i> <span>目錄</span>
                <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="menus_item_child">
                <li>
                  <a className="site-page child" href="/archives/">
                    <i className="fa-fw fas fa-archive"></i>
                    <span>歸檔</span>
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
            </div> */}
            {/* <div className="menus_item">
              <a
                className="site-page group"
                href="javascript:void(0);"
                rel="external nofollow noreferrer"
              >
                <i className="fa-fw fas fa-book"></i> <span>文檔</span>
                <i className="fas fa-chevron-down"></i>
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
            </div> */}
            {/* <div className="menus_item">
              <a
                className="site-page group"
                href="javascript:void(0);"
                rel="external nofollow noreferrer"
              >
                <i className="fa-fw fa fa-heartbeat"></i> <span>娛樂</span>
                <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="menus_item_child">
                <li>
                  <a className="site-page child" href="/Gallery/">
                    <i className="fa-fw fas fa-images"></i> <span>圖庫</span>
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div className="menus_item">
              <a className="site-page" href="/messageboard/">
                <i className="fa-fw fas fa-comment-dots"></i>
                <span>留言板</span>
              </a>
            </div> */}
            {/* <div className="menus_item">
              <a className="site-page" href="/link/">
                <i className="fa-fw fas fa-thumbs-up"></i>
                <span>示例</span>
              </a>
            </div> */}
          </div>
          <div id="toggle-menu" onClick={toggleMenuClickFn}>
            <a
              className="site-page"
              href="javascript:void(0);"
              rel="external nofollow noreferrer"
            >
              <i className="fas fa-bars fa-fw"></i>
            </a>
          </div>
        </div>
      </nav>
      <SideBar isOpen={isOpen} toggerClick={setIsOpen} />
    </>
  );
}
