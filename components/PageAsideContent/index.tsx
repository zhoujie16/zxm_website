import CardWidgetInfo from "./CardWidgetInfo";
import CardWidgetCannouncement from "./CardWidgetCannouncement";

const Index = () => {
  return (
    <div className="aside-content" id="aside-content">
      <CardWidgetInfo />
      <CardWidgetCannouncement />

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
  </div>
   */}
      <div className="sticky_layout">
        {/* <div className="card-widget card-recent-post">
      <div className="item-headline">
        <i className="fas fa-history"></i>
        <span>最新文章</span>
      </div>
      <div className="aside-list">
        <div className="aside-list-item">
          <a
            className="thumbnail"
            href="/posts/7670b080/"
            title="Butterfly 美化/優化/魔改 教程合集"
          >
            <img
              src="/img/loading.gif"
              data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-diy-cover.png"
              // onerror='this.onerror=null,this.src="/img/404.jpg"'
              alt="Butterfly 美化/優化/魔改 教程合集"
            />
          </a>
          <div className="content">
            <a
              className="title"
              href="/posts/7670b080/"
              title="Butterfly 美化/優化/魔改 教程合集"
            >
              Butterfly 美化/優化/魔改 教程合集
            </a>
            <time
              // datetime="2021-01-02T10:11:22.000Z"
              title="發表於 2021-01-02 18:11:22"
            >
              2021-01-02
            </time>
          </div>
        </div>
        <div className="aside-list-item">
          <a
            className="thumbnail"
            href="/posts/ea33ab97/"
            title="自定義側邊欄"
          >
            <img
              src="/img/loading.gif"
              data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/aside-diy-cover.png"
              // onerror='this.onerror=null,this.src="/img/404.jpg"'
              alt="自定義側邊欄"
            />
          </a>
          <div className="content">
            <a
              className="title"
              href="/posts/ea33ab97/"
              title="自定義側邊欄"
            >
              自定義側邊欄
            </a>
            <time
              // datetime="2020-12-30T13:48:10.000Z"
              title="發表於 2020-12-30 21:48:10"
            >
              2020-12-30
            </time>
          </div>
        </div>
        <div className="aside-list-item">
          <a
            className="thumbnail"
            href="/posts/c9711c19/"
            title="當設置 top_img 為 false 時"
          >
            <img
              src="/img/loading.gif"
              data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png"
              // onerror='this.onerror=null,this.src="/img/404.jpg"'
              alt="當設置 top_img 為 false 時"
            />
          </a>
          <div className="content">
            <a
              className="title"
              href="/posts/c9711c19/"
              title="當設置 top_img 為 false 時"
            >
              當設置 top_img 為 false 時
            </a>
            <time
              // datetime="2020-10-28T06:15:34.000Z"
              title="發表於 2020-10-28 14:15:34"
            >
              2020-10-28
            </time>
          </div>
        </div>
        <div className="aside-list-item">
          <a
            className="thumbnail"
            href="/posts/507c070f/"
            title="Butterfly添加全局吸底Aplayer教程"
          >
            <img
              src="/img/loading.gif"
              data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-add-aplayer-cover.png"
              // onerror='this.onerror=null,this.src="/img/404.jpg"'
              alt="Butterfly添加全局吸底Aplayer教程"
            />
          </a>
          <div className="content">
            <a
              className="title"
              href="/posts/507c070f/"
              title="Butterfly添加全局吸底Aplayer教程"
            >
              Butterfly添加全局吸底Aplayer教程
            </a>
            <time
              // datetime="2020-07-31T11:02:28.000Z"
              title="發表於 2020-07-31 19:02:28"
            >
              2020-07-31
            </time>
          </div>
        </div>
        <div className="aside-list-item">
          <a
            className="thumbnail"
            href="/posts/b37b5fe3/"
            title="自定義代碼配色"
          >
            <img
              src="/img/loading.gif"
              data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/CODE-COLOR-COVER.png"
              // onerror='this.onerror=null,this.src="/img/404.jpg"'
              alt="自定義代碼配色"
            />
          </a>
          <div className="content">
            <a
              className="title"
              href="/posts/b37b5fe3/"
              title="自定義代碼配色"
            >
              自定義代碼配色
            </a>
            <time
              // datetime="2020-06-13T12:41:59.000Z"
              title="發表於 2020-06-13 20:41:59"
            >
              2020-06-13
            </time>
          </div>
        </div>
      </div>
    </div>
     */}
        {/* <div className="card-widget ads-wrap">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8919908724705274"
        data-ad-slot="8108145410"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
     */}
        {/* <div className="card-widget" id="card-newest-comments">
      <div className="item-headline">
        <i className="fas fa-comment-dots"></i>
        <span>最新評論</span>
      </div>
      <div className="aside-list">
        <span>正在載入中...</span>
      </div>
    </div>
     */}
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
     */}
        <div className="card-widget card-tags">
          <div className="item-headline">
            <i className="fas fa-tags"></i>
            <span>標籤</span>
          </div>
          <div className="card-tag-cloud">
            <a
              href="/tags/%E6%95%99%E7%A8%8B/"
              style={{ fontSize: "1.35em", color: "#1a3709" }}
            >
              教程
            </a>
            <a
              href="/tags/Hexo/"
              style={{ fontSize: "1.35em", color: "#192ec0" }}
            >
              Hexo
            </a>
            <a
              href="/tags/%E4%B8%BB%E9%A1%8C/"
              style={{ fontSize: "1.35em", color: "#a47297" }}
            >
              主題
            </a>
            <a
              href="/tags/butterfly/"
              style={{ fontSize: "1.45em", color: "#ba97b3" }}
            >
              butterfly
            </a>
            <a
              href="/tags/%E6%89%93%E8%B3%9E/"
              style={{ fontSize: "1.15em", color: "#6ca143" }}
            >
              打賞
            </a>
            <a
              href="/tags/Aplayer/"
              style={{ fontSize: "1.15em", color: "#a37c4b" }}
            >
              Aplayer
            </a>
            <a
              href="/tags/Butterfly/"
              style={{ fontSize: "1.15em", color: "#242657" }}
            >
              Butterfly
            </a>
            <a
              href="/tags/%E7%BE%8E%E5%8C%96/"
              style={{ fontSize: "1.15em", color: "#467534" }}
            >
              美化
            </a>
            <a
              href="/tags/%E5%84%AA%E5%8C%96/"
              style={{ fontSize: "1.15em", color: "#091929" }}
            >
              優化
            </a>
            <a
              href="/tags/%E9%AD%94%E6%94%B9/"
              style={{ fontSize: "1.15em", color: "#971122" }}
            >
              魔改
            </a>
            <a
              href="/tags/highlight/"
              style={{ fontSize: "1.25em", color: "#4a6b47" }}
            >
              highlight
            </a>
            <a
              href="/tags/%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B/"
              style={{ fontSize: "1.25em", color: "#9c490a" }}
            >
              標籤外掛
            </a>
            <a
              href="/tags/demo/"
              style={{ fontSize: "1.15em", color: "#66a15b" }}
            >
              demo
            </a>
            <a
              href="/tags/top-img/"
              style={{ fontSize: "1.15em", color: "#514643" }}
            >
              top_img
            </a>
            <a
              href="/tags/Bar/"
              style={{ fontSize: "1.15em", color: "#13b73a" }}
            >
              Bar
            </a>
          </div>
        </div>

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
     */}
        <div className="card-widget card-webinfo">
          <div className="item-headline">
            <i className="fas fa-chart-line"></i>
            <span>網站資訊</span>
          </div>
          <div className="webinfo">
            <div className="webinfo-item">
              <div className="item-name">文章數目 :</div>
              <div className="item-count">18</div>
            </div>
            <div className="webinfo-item">
              <div className="item-name">已運行時間 :</div>
              <div
                className="item-count"
                id="runtimeshow"
                data-publishdate="2019-11-13T00:00:00.000Z"
              ></div>
            </div>
            <div className="webinfo-item">
              <div className="item-name">本站總字數 :</div>
              <div className="item-count">50.6k</div>
            </div>
            <div className="webinfo-item">
              <div className="item-name">本站訪客數 :</div>
              <div className="item-count" id="busuanzi_value_site_uv"></div>
            </div>
            <div className="webinfo-item">
              <div className="item-name">本站總訪問量 :</div>
              <div className="item-count" id="busuanzi_value_site_pv"></div>
            </div>
            <div className="webinfo-item">
              <div className="item-name">最後更新時間 :</div>
              <div
                className="item-count"
                id="last-push-date"
                data-lastpushdate="2021-09-09T09:59:12.006Z"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
