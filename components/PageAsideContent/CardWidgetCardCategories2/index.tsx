// 网站信息
const Index = () => {
  return (
    <div className="card-widget card-categories">
      <div className="item-headline">
        <i className="fas fa-folder-open"></i> <span>分類</span>
      </div>
      <ul className="card-category-list" id="aside-cat-list">
        <li className="card-category-list-item">
          <a className="card-category-list-link" href="/categories/Demo/">
            <span className="card-category-list-name">Demo</span>
            <span className="card-category-list-count">5</span>
          </a>
        </li>
        <li className="card-category-list-item">
          <a
            className="card-category-list-link"
            href="/categories/Docs%E6%96%87%E6%AA%94/"
          >
            <span className="card-category-list-name">Docs文檔</span>
            <span className="card-category-list-count">7</span>
          </a>
        </li>
        <li className="card-category-list-item">
          <a className="card-category-list-link" href="/categories/Markdown/">
            <span className="card-category-list-name">Markdown</span>
            <span className="card-category-list-count">1</span>
          </a>
        </li>
        <li className="card-category-list-item">
          <a className="card-category-list-link" href="/categories/Thx/">
            <span className="card-category-list-name">Thx</span>
            <span className="card-category-list-count">1</span>
          </a>
        </li>
        <li className="card-category-list-item">
          <a
            className="card-category-list-link"
            href="/categories/%E5%90%88%E9%9B%86/"
          >
            <span className="card-category-list-name">合集</span>
            <span className="card-category-list-count">1</span>
          </a>
        </li>
        <li className="card-category-list-item">
          <a
            className="card-category-list-link"
            href="/categories/%E9%80%B2%E9%9A%8E%E6%95%99%E7%A8%8B/"
          >
            <span className="card-category-list-name">進階教程</span>
            <span className="card-category-list-count">3</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Index;
