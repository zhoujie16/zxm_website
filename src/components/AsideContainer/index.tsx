import Announcement from "./Announcement";
import CardToc from "./CardToc";
import FirstCard from "./FirstCard";
import RecentPost from "./RecentPost";
import WebsiteAuthor from "./WebsiteAuthor";
import WebsiteInfo from "./WebsiteInfo";

/**
 * 页面 右侧 窄栏
 */
const Index = () => {
  return (
    <>
      <div className="aside-content" id="aside-content">
        {/* <FirstCard /> */}
        {/* 网站信息 */}
        <WebsiteAuthor />
        {/* 公告栏 */}
        {/* <Announcement /> */}

        {/* <div className="card-widget card-docs card-categories">
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
        </div> */}
        <div className="sticky_layout">
          <CardToc />
          <RecentPost />
          {/* <div className="card-widget ads-wrap">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-8919908724705274"
              data-ad-slot="8108145410"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({})</script>
          </div> */}
          {/* <div className="card-widget" id="card-newest-comments">
            <div className="item-headline">
              <i className="fas fa-comment-dots"></i>
              <span>最新評論</span>
            </div>
            <div className="aside-list">
              <span>正在載入中...</span>
            </div>
          </div> */}
          {/* <div className="card-widget card-categories">
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
                <a
                  className="card-category-list-link"
                  href="/categories/Markdown/"
                >
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
                  href="/categories/%E9%80%B2%E9%9A%8E%E6%95%99%E7%A8%8B/"
                >
                  <span className="card-category-list-name">進階教程</span>
                  <span className="card-category-list-count">3</span>
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div className="card-widget card-tags">
            <div className="item-headline">
              <i className="fas fa-tags"></i>
              <span>標籤</span>
            </div>
            <div className="card-tag-cloud">
              <a
                href="/tags/%E6%95%99%E7%A8%8B/"
                style={{ fontSize: "1.35em", color: "#771b97" }}
              >
                教程
              </a>
              <a
                href="/tags/Hexo/"
                style={{ fontSize: "1.35em", color: "#a75d4f" }}
              >
                Hexo
              </a>
              <a
                href="/tags/%E4%B8%BB%E9%A1%8C/"
                style={{ fontSize: "1.35em", color: "#094297" }}
              >
                主題
              </a>
              <a
                href="/tags/butterfly/"
                style={{ fontSize: "1.45em", color: "#b49251" }}
              >
                butterfly
              </a>
              <a
                href="/tags/%E6%89%93%E8%B3%9E/"
                style={{ fontSize: "1.15em", color: "#7d7d9a" }}
              >
                打賞
              </a>
              <a
                href="/tags/Aplayer/"
                style={{ fontSize: "1.15em", color: "#039d7b" }}
              >
                Aplayer
              </a>
              <a
                href="/tags/highlight/"
                style={{ fontSize: "1.25em", color: "#99a29f" }}
              >
                highlight
              </a>
              <a
                href="/tags/%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B/"
                style={{ fontSize: "1.25em", color: "#5b1e68" }}
              >
                標籤外掛
              </a>
              <a
                href="/tags/demo/"
                style={{ fontSize: "1.15em", color: "#108305" }}
              >
                demo
              </a>
              <a
                href="/tags/Bar/"
                style={{ fontSize: "1.15em", color: "#c20248" }}
              >
                Bar
              </a>
              <a
                href="/tags/top-img/"
                style={{ fontSize: "1.15em", color: "#854b36" }}
              >
                top_img
              </a>
            </div>
          </div> */}

          {/* <div className="card-widget card-archives">
            <div className="item-headline">
              <i className="fas fa-archive"></i>
              <span>歸檔</span>
              <a className="card-more-btn" href="/archives/" title="檢視更多">
                <i className="fas fa-angle-right"></i>
              </a>
            </div>
            <ul className="card-archive-list">
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
              <li className="card-archive-list-item">
                <a className="card-archive-list-link" href="/archives/2019/07/">
                  <span className="card-archive-list-date">2019年07月</span>
                  <span className="card-archive-list-count">1</span>
                </a>
              </li>
            </ul>
          </div> */}
          {/* <WebsiteInfo /> */}
        </div>
      </div>
    </>
  );
};

export default Index;
