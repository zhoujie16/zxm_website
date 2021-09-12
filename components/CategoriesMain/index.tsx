import PageAsideContent from "./../PageAsideContent";
import { connect } from "react-redux";

const Index = (props: any) => {
  let { mainCategoriesList, pageCategoriesData } = props;
  let { parent_id } = pageCategoriesData;
  let pageCategoriesList = mainCategoriesList.filter(
    (x: any) => x.parent_id == Number(parent_id)
  );

  let categoriesListCount = pageCategoriesList.length;

  const pushPage = (item: any) => {
    let arr = mainCategoriesList.filter(
      (x: any) => x.parent_id == Number(item.id)
    );
    if (arr.length) {
      window.location.href = `/categories/${item.id}`;
    } else {
      window.location.href = `/archives/${item.id}`;
    }
  };

  return (
    <main className="layout" id="content-inner">
      <div id="page">
        <div className="category-lists">
          <div className="category-title is-center">
            分类 -{" "}
            <span className="category-amount">{categoriesListCount}</span>
          </div>
          <div>
            <ul className="category-list">
              {pageCategoriesList.map((item: any) => (
                <li className="category-list-item" key={item.id}>
                  <a
                    className="category-list-link"
                    onClick={() => pushPage(item)}
                  >
                    {item.title}
                  </a>
                  <span className="category-list-count">5</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <PageAsideContent />
    </main>
  );
};

export default connect((state) => state)(Index);
