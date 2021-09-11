// 网站信息
const Index = () => {
  return (
    <div className="card-widget card-archives">
      <div className="item-headline">
        <i className="fas fa-archive"></i>
        <span>歸檔</span>
        <a className="card-more-btn" href="/archives/" title="檢視更多">
          <i className="fas fa-angle-right"></i>
        </a>
      </div>
      <ul className="card-archive-list">
        <li className="card-archive-list-item">
          <a className="card-archive-list-link" href="/archives/2021/01/">
            <span className="card-archive-list-date">2021年01月</span>
            <span className="card-archive-list-count">1</span>
          </a>
        </li>
        <li className="card-archive-list-item">
          <a className="card-archive-list-link" href="/archives/2020/12/">
            <span className="card-archive-list-date">2020年12月</span>
            <span className="card-archive-list-count">1</span>
          </a>
        </li>
        <li className="card-archive-list-item">
          <a className="card-archive-list-link" href="/archives/2020/10/">
            <span className="card-archive-list-date">2020年10月</span>
            <span className="card-archive-list-count">1</span>
          </a>
        </li>
        <li className="card-archive-list-item">
          <a className="card-archive-list-link" href="/archives/2020/07/">
            <span className="card-archive-list-date">2020年07月</span>
            <span className="card-archive-list-count">1</span>
          </a>
        </li>
        <li className="card-archive-list-item">
          <a className="card-archive-list-link" href="/archives/2020/06/">
            <span className="card-archive-list-date">2020年06月</span>
            <span className="card-archive-list-count">1</span>
          </a>
        </li>
        <li className="card-archive-list-item">
          <a className="card-archive-list-link" href="/archives/2020/05/">
            <span className="card-archive-list-date">2020年05月</span>
            <span className="card-archive-list-count">9</span>
          </a>
        </li>
        <li className="card-archive-list-item">
          <a className="card-archive-list-link" href="/archives/2020/03/">
            <span className="card-archive-list-date">2020年03月</span>
            <span className="card-archive-list-count">1</span>
          </a>
        </li>
        <li className="card-archive-list-item">
          <a className="card-archive-list-link" href="/archives/2020/01/">
            <span className="card-archive-list-date">2020年01月</span>
            <span className="card-archive-list-count">1</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Index;
