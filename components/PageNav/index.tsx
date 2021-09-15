import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategoriesTreeList } from "./../../utils";
import { scrollFn, getDevicetype } from "./../../utils";
import PageNavMob from "./indexMob";
import SearchPanel from "./../SearchPanel";
import Config from "./../../config";

const Index = (props: any) => {
  let columnList = props.mainCategoriesList;
  columnList = columnList.filter((x: any) => x.is_banner == true);
  columnList = getCategoriesTreeList(columnList);

  let [dType, setDYype] = useState("pc");
  let [showMobNav, setShowMobNav] = useState(false);

  useEffect(() => {
    let devicetype = getDevicetype();
    setDYype(devicetype);
    setTimeout(() => {
      setShowMobNav(true);
      if (window.scrollFn) {
        return;
      }
      window.scrollFn = true;
      scrollFn();
    }, 1500);
  }, []);

  let nclass = ``;
  if (dType === "mobile") {
    nclass = `hide-menu show`;
  }

  let [isOpen, setIsOpen] = useState(false);
  let [isOpenSearch, setIsOpenSearch] = useState(false);

  let searchBtnClickFn = () => {
    try {
      let pathname = window.location.pathname;
      let [x, b] = pathname.split("/");
      b == "" ? (b = "home") : "";
      window.spm(`${Config.blogCode}.${b}.search_panel_open`);
    } catch (error) {
      console.log(error);
    }
    setIsOpenSearch(true);
  };

  let searchBtnCloseFn = () => {
    try {
      let pathname = window.location.pathname;
      let [x, b] = pathname.split("/");
      b == "" ? (b = "home") : "";
      window.spm(`${Config.blogCode}.${b}.search_panel_close`);
    } catch (error) {
      console.log(error);
    }
    setIsOpenSearch(false);
  };

  let toggleMenuClickFn = () => {
    try {
      let pathname = window.location.pathname;
      let [x, b] = pathname.split("/");
      b == "" ? (b = "home") : "";
      window.spm(`${Config.blogCode}.${b}.nav_menu_open`);
    } catch (error) {
      console.log(error);
    }
    setIsOpen(true);
  };

  return (
    <>
      {showMobNav ? (
        <>
          <PageNavMob isOpen={isOpen} toggerClick={setIsOpen} />
          <SearchPanel
            isOpenSearch={isOpenSearch}
            toggerClick={searchBtnCloseFn}
          />
        </>
      ) : (
        ""
      )}

      <nav id="nav" className={nclass}>
        <span id="blog_name">
          <a id="site-name" href="/">
            {Config.blogName}
          </a>
        </span>
        <div id="menus">
          <div id="search-button" onClick={searchBtnClickFn}>
            <a className="site-page social-icon search">
              <i className="fas fa-search fa-fw"></i> <span>搜索</span>
            </a>
          </div>
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
          </div>
          <div id="toggle-menu" onClick={toggleMenuClickFn}>
            <a className="site-page">
              <i className="fas fa-bars fa-fw"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default connect((state) => state)(Index);
