import { connect } from "react-redux";
import { getCategoriesTreeList } from "./../../utils";

const Index = (props: any) => {
  let columnList = props.mainCategoriesList;
  columnList = columnList.filter((x: any) => x.is_banner == true);
  columnList = getCategoriesTreeList(columnList);
  console.log(columnList);
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
