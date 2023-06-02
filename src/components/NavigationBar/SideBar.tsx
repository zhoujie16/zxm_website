export default function ({ isOpen = false, toggerClick = () => {} }: any) {
  let maskStyle = isOpen
    ? {
        display: "block",
        animation: "0.5s ease 0s 1 normal none running to_show",
      }
    : {
        display: "none",
      };
  let mClass = isOpen ? "open" : "";
  let maskClick = () => {
    toggerClick(false);
  };

  return (
    <>
      <div id="sidebar">
        <div id="menu-mask" style={maskStyle} onClick={maskClick}></div>
        <div id="sidebar-menus" className={mClass}>
          <div className="avatar-img is-center">
            <img
              src="https://s2.loli.net/2023/05/25/euxWDnAYaGTIBfO.jpg"
              alt="avatar"
            />
          </div>
          {/* <div className="sidebar-site-data site-data is-center">
            <a href="/archives/">
              <div className="headline">文章</div>
              <div className="length-num">17</div>
            </a>
            <a href="/tags/">
              <div className="headline">標籤</div>
              <div className="length-num">11</div>
            </a>
            <a href="/categories/">
              <div className="headline">分類</div>
              <div className="length-num">5</div>
            </a>
          </div> */}
          <hr />
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
        </div>
      </div>
    </>
  );
}
