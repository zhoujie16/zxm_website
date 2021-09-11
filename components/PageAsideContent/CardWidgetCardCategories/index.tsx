// 文档目录
const Index = () => {
  return (
    <div className="card-widget card-docs card-categories">
      <div className="item-headline">
        <i className="fas fa-car-side"></i>
        <span>文檔目錄</span>
      </div>
      <div className="item-content">
        <ul className="card-category-list">
          <li className="card-category-list-item">
            <a className="card-category-list-link" href="/posts/21cfbf15/">
              🚀 快速開始
            </a>
          </li>
          <li className="card-category-list-item">
            <a className="card-category-list-link" href="/posts/dc584b87/">
              📑 主題頁面
            </a>
          </li>
          <li className="card-category-list-item">
            <a className="card-category-list-link" href="/posts/4aa8abbe/">
              🛠 主題配置-1
            </a>
          </li>
          <li className="card-category-list-item">
            <a className="card-category-list-link" href="/posts/ceeb73f/">
              ⚔️ 主題配置-2
            </a>
          </li>
          <li className="card-category-list-item">
            <a className="card-category-list-link" href="/posts/98d20436/">
              ❓ 主題問答
            </a>
          </li>
          <li className="card-category-list-item">
            <a className="card-category-list-link" href="/posts/4073eda/">
              ⚡️ 進階教程
            </a>
          </li>
          <li className="card-category-list-item">
            <a className="card-category-list-link" href="/posts/198a4240/">
              ✨ 更新日誌
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
