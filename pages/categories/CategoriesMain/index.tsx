import PageAsideContent from "./../../../components/PageAsideContent";
import Link from "next/link";
import { connect } from "react-redux";

const Index = (props: any) => {
  let { mainCategoriesList } = props;
  console.log("categoriesList", mainCategoriesList);
  return (
    <main className="layout" id="content-inner">
      <div id="page">
        <div className="category-lists">
          <div className="category-title is-center">
            分類 - <span className="category-amount">6</span>
          </div>
          <div>
            <ul className="category-list">
              {mainCategoriesList.map((item) => (
                <li className="category-list-item">
                  <Link
                    href={{
                      pathname: "/categories/[id]",
                      query: { id: item.id },
                    }}
                  >
                    <a className="category-list-link">{item.title}</a>
                  </Link>
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
