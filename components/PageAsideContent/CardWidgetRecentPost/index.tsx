// 最近文章
const Index = () => {
  return (
    <div className="card-widget card-recent-post">
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
          <a className="thumbnail" href="/posts/ea33ab97/" title="自定義側邊欄">
            <img
              src="/img/loading.gif"
              data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/aside-diy-cover.png"
              // onerror='this.onerror=null,this.src="/img/404.jpg"'
              alt="自定義側邊欄"
            />
          </a>
          <div className="content">
            <a className="title" href="/posts/ea33ab97/" title="自定義側邊欄">
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
            <a className="title" href="/posts/b37b5fe3/" title="自定義代碼配色">
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
  );
};

export default Index;
