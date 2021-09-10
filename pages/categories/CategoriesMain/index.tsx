import PageAsideContent from "./../../../components/PageAsideContent";

const Index = () => {
  return (
    <main className="layout" id="content-inner">
      <div id="page">
        <div className="category-lists">
          <div className="category-title is-center">
            分類 - <span className="category-amount">6</span>
          </div>
          <div>
            <ul className="category-list">
              <li className="category-list-item">
                <a className="category-list-link" href="/categories/Demo/">
                  Demo
                </a>
                <span className="category-list-count">5</span>
              </li>
              <li className="category-list-item">
                <a
                  className="category-list-link"
                  href="/categories/Docs%E6%96%87%E6%AA%94/"
                >
                  Docs文檔
                </a>
                <span className="category-list-count">7</span>
              </li>
              <li className="category-list-item">
                <a className="category-list-link" href="/categories/Markdown/">
                  Markdown
                </a>
                <span className="category-list-count">1</span>
              </li>
              <li className="category-list-item">
                <a className="category-list-link" href="/categories/Thx/">
                  Thx
                </a>
                <span className="category-list-count">1</span>
              </li>
              <li className="category-list-item">
                <a
                  className="category-list-link"
                  href="/categories/%E5%90%88%E9%9B%86/"
                >
                  合集
                </a>
                <span className="category-list-count">1</span>
              </li>
              <li className="category-list-item">
                <a
                  className="category-list-link"
                  href="/categories/%E9%80%B2%E9%9A%8E%E6%95%99%E7%A8%8B/"
                >
                  進階教程
                </a>
                <span className="category-list-count">3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <PageAsideContent />
    </main>
  );
};

export default Index;
