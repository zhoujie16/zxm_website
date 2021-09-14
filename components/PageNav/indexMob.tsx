import { useState } from "react";
import { getCategoriesTreeList } from "utils";
import { connect } from "react-redux";

const Index = (props: any) => {
  let columnList = props.mainCategoriesList;
  columnList = columnList.filter((x: any) => x.is_banner == true);
  columnList = getCategoriesTreeList(columnList);
  let isOpen = props.isOpen;
  let toggerClick = props.toggerClick;

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
    <div id="sidebar">
      <div id="menu-mask" style={maskStyle} onClick={maskClick}></div>
      <div id="sidebar-menus" className={mClass}>
        <div className="avatar-img is-center">
          <img
            src="https://gitee.com/zz16/upic/raw/master/2020/04/1586355398747.jpg"
            // data-lazy-src="/img/avatar.png"
            alt="avatar"
            data-ll-status="loaded"
            className="entered loaded"
          />
        </div>
        <div className="site-data">
          <div className="data-item is-center">
            <div className="data-item-link">
              <a href="/archives/" data-pjax-state="">
                <div className="headline">文章</div>
                <div className="length-num">18</div>
              </a>
            </div>
          </div>
          <div className="data-item is-center">
            <div className="data-item-link">
              <a href="/tags/" data-pjax-state="">
                <div className="headline">標籤</div>
                <div className="length-num">15</div>
              </a>
            </div>
          </div>
          <div className="data-item is-center">
            <div className="data-item-link">
              <a href="/categories/" data-pjax-state="">
                <div className="headline">分類</div>
                <div className="length-num">6</div>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="menus_items">
          {columnList.map((item: any) => {
            return (
              <div className="menus_item" key={item.id}>
                <a className="site-page" href={item.route}>
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

          {/* <div className="menus_item">
            <a className="site-page" href="/" data-pjax-state="">
              <i className="fa-fw fas fa-home"></i> <span>首頁</span>
            </a>
          </div>
          <div className="menus_item">
            <a
              className="site-page"
              href="javascript:void(0);"
              rel="external nofollow noreferrer"
              data-pjax-state="external"
            >
              <i className="fa-fw fas fa-compass"></i> <span>目錄</span>
              <i className="fas fa-chevron-down expand hide"></i>
            </a>
            <ul className="menus_item_child" style={{ display: "none" }}>
              <li>
                <a
                  className="site-page child"
                  href="/archives/"
                  data-pjax-state=""
                >
                  <i className="fa-fw fas fa-archive"></i> <span>歸檔</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/tags/" data-pjax-state="">
                  <i className="fa-fw fas fa-tags"></i> <span>標籤</span>
                </a>
              </li>
              <li>
                <a
                  className="site-page child"
                  href="/categories/"
                  data-pjax-state=""
                >
                  <i className="fa-fw fas fa-folder-open"></i> <span>分類</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menus_item">
            <a
              className="site-page"
              href="javascript:void(0);"
              rel="external nofollow noreferrer"
              data-pjax-state="external"
            >
              <i className="fa-fw fas fa-book"></i> <span>文檔</span>
              <i className="fas fa-chevron-down expand hide"></i>
            </a>
            <ul className="menus_item_child" style={{ display: "none" }}>
              <li>
                <a
                  className="site-page child"
                  href="/posts/21cfbf15/"
                  data-pjax-state=""
                >
                  <span>🚀 快速開始</span>
                </a>
              </li>
              <li>
                <a
                  className="site-page child"
                  href="/posts/dc584b87/"
                  data-pjax-state=""
                >
                  <span>📑 主題頁面</span>
                </a>
              </li>
              <li>
                <a
                  className="site-page child"
                  href="/posts/4aa8abbe/"
                  data-pjax-state=""
                >
                  <span>🛠 主題配置-1</span>
                </a>
              </li>
              <li>
                <a
                  className="site-page child"
                  href="/posts/ceeb73f/"
                  data-pjax-state=""
                >
                  <span>⚔️ 主題配置-2</span>
                </a>
              </li>
              <li>
                <a
                  className="site-page child"
                  href="/posts/98d20436/"
                  data-pjax-state=""
                >
                  <span>❓ 主題問答</span>
                </a>
              </li>
              <li>
                <a
                  className="site-page child"
                  href="/posts/4073eda/"
                  data-pjax-state=""
                >
                  <span>⚡️ 進階教程</span>
                </a>
              </li>
              <li>
                <a
                  className="site-page child"
                  href="/posts/198a4240/"
                  data-pjax-state=""
                >
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
              data-pjax-state="external"
            >
              <i className="fa-fw fa fa-heartbeat"></i> <span>娛樂</span>
              <i className="fas fa-chevron-down expand hide"></i>
            </a>
            <ul className="menus_item_child" style={{ display: "block" }}>
              <li>
                <a
                  className="site-page child"
                  href="/Gallery/"
                  data-pjax-state=""
                >
                  <i className="fa-fw fas fa-images"></i> <span>圖庫</span>
                </a>
              </li>
              <li>
                <a
                  className="site-page child"
                  href="/movies/"
                  data-pjax-state=""
                >
                  <i className="fa-fw fas fa-video"></i> <span>電影</span>
                </a>
              </li>
              <li>
                <a className="site-page child" href="/talking/">
                  <i className="fa-fw fas fa-cubes"></i> <span>自言自語</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menus_item">
            <a className="site-page" href="/messageboard/" data-pjax-state="">
              <i className="fa-fw fas fa-comment-dots"></i> <span>留言板</span>
            </a>
          </div>
          <div className="menus_item">
            <a className="site-page" href="/link/" data-pjax-state="">
              <i className="fa-fw fas fa-thumbs-up"></i> <span>示例</span>
            </a>
          </div>
         */}
        </div>
      </div>
    </div>
  );
};

export default connect((state) => state)(Index);
