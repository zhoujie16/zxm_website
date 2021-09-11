import PageAsideContent from "./../../../components/PageAsideContent";
import { connect } from "react-redux";
import ArticleSortItem from "./ArticleSortItem";

const Index = (props: any) => {
  let mainArticleData: any = {};
  mainArticleData = props.mainArticleData;
  let total = mainArticleData.total;
  console.log("mainArticleData", mainArticleData);
  return (
    <main className="layout" id="content-inner">
      <div id="archive">
        <div className="article-sort-title">文章总览 - {total}</div>
        <div className="article-sort">
          {mainArticleData.items.map((x: any) => (
            <ArticleSortItem itemInfo={x} />
          ))}
          {/*
          <div className="article-sort-item year">2021</div>
          <div className="article-sort-item">
            <a
              className="article-sort-item-img"
              href="/posts/7670b080/"
              title="Butterfly 美化/優化/魔改 教程合集"
            >
              <img
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-diy-cover.png"
                alt="Butterfly 美化/優化/魔改 教程合集"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
              />
            </a>
            <div className="article-sort-item-info">
              <div className="article-sort-item-time">
                <i className="far fa-calendar-alt"></i>
                <time
                  className="post-meta-date-created"
                  // datetime="2021-01-02T10:11:22.000Z"
                  title="發表於 2021-01-02 18:11:22"
                >
                  2021-01-02
                </time>
              </div>
              <a
                className="article-sort-item-title"
                href="/posts/7670b080/"
                title="Butterfly 美化/優化/魔改 教程合集"
              >
                Butterfly 美化/優化/魔改 教程合集
              </a>
            </div>
          </div>
          <div className="article-sort-item year">2020</div>
          <div className="article-sort-item">
            <a
              className="article-sort-item-img"
              href="/posts/ea33ab97/"
              title="自定義側邊欄"
            >
              <img
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/aside-diy-cover.png"
                alt="自定義側邊欄"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
              />
            </a>
            <div className="article-sort-item-info">
              <div className="article-sort-item-time">
                <i className="far fa-calendar-alt"></i>
                <time
                  className="post-meta-date-created"
                  // datetime="2020-12-30T13:48:10.000Z"
                  title="發表於 2020-12-30 21:48:10"
                >
                  2020-12-30
                </time>
              </div>
              <a
                className="article-sort-item-title"
                href="/posts/ea33ab97/"
                title="自定義側邊欄"
              >
                自定義側邊欄
              </a>
            </div>
          </div>
          <div className="article-sort-item">
            <a
              className="article-sort-item-img"
              href="/posts/c9711c19/"
              title="當設置 top_img 為 false 時"
            >
              <img
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png"
                alt="當設置 top_img 為 false 時"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
              />
            </a>
            <div className="article-sort-item-info">
              <div className="article-sort-item-time">
                <i className="far fa-calendar-alt"></i>
                <time
                  className="post-meta-date-created"
                  // datetime="2020-10-28T06:15:34.000Z"
                  title="發表於 2020-10-28 14:15:34"
                >
                  2020-10-28
                </time>
              </div>
              <a
                className="article-sort-item-title"
                href="/posts/c9711c19/"
                title="當設置 top_img 為 false 時"
              >
                當設置 top_img 為 false 時
              </a>
            </div>
          </div>
          <div className="article-sort-item">
            <a
              className="article-sort-item-img"
              href="/posts/507c070f/"
              title="Butterfly添加全局吸底Aplayer教程"
            >
              <img
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-add-aplayer-cover.png"
                alt="Butterfly添加全局吸底Aplayer教程"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
              />
            </a>
            <div className="article-sort-item-info">
              <div className="article-sort-item-time">
                <i className="far fa-calendar-alt"></i>
                <time
                  className="post-meta-date-created"
                  // datetime="2020-07-31T11:02:28.000Z"
                  title="發表於 2020-07-31 19:02:28"
                >
                  2020-07-31
                </time>
              </div>
              <a
                className="article-sort-item-title"
                href="/posts/507c070f/"
                title="Butterfly添加全局吸底Aplayer教程"
              >
                Butterfly添加全局吸底Aplayer教程
              </a>
            </div>
          </div>
          <div className="article-sort-item">
            <a
              className="article-sort-item-img"
              href="/posts/b37b5fe3/"
              title="自定義代碼配色"
            >
              <img
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/CODE-COLOR-COVER.png"
                alt="自定義代碼配色"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
              />
            </a>
            <div className="article-sort-item-info">
              <div className="article-sort-item-time">
                <i className="far fa-calendar-alt"></i>
                <time
                  className="post-meta-date-created"
                  // datetime="2020-06-13T12:41:59.000Z"
                  title="發表於 2020-06-13 20:41:59"
                >
                  2020-06-13
                </time>
              </div>
              <a
                className="article-sort-item-title"
                href="/posts/b37b5fe3/"
                title="自定義代碼配色"
              >
                自定義代碼配色
              </a>
            </div>
          </div>
          <div className="article-sort-item">
            <a
              className="article-sort-item-img"
              href="/posts/6ad51b4/"
              title="Butterfly 打賞"
            >
              <img
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-donate-cover.png"
                alt="Butterfly 打賞"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
              />
            </a>
            <div className="article-sort-item-info">
              <div className="article-sort-item-time">
                <i className="far fa-calendar-alt"></i>
                <time
                  className="post-meta-date-created"
                  // datetime="2020-05-28T14:42:48.000Z"
                  title="發表於 2020-05-28 22:42:48"
                >
                  2020-05-28
                </time>
              </div>
              <a
                className="article-sort-item-title"
                href="/posts/6ad51b4/"
                title="Butterfly 打賞"
              >
                Butterfly 打賞
              </a>
            </div>
          </div>
          <div className="article-sort-item">
            <a
              className="article-sort-item-img"
              href="/posts/198a4240/"
              title="Butterfly 安裝文檔(七) 更新日誌"
            >
              <img
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-docs-07-cover.png"
                alt="Butterfly 安裝文檔(七) 更新日誌"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
              />
            </a>
            <div className="article-sort-item-info">
              <div className="article-sort-item-time">
                <i className="far fa-calendar-alt"></i>
                <time
                  className="post-meta-date-created"
                  // datetime="2020-05-28T14:41:59.000Z"
                  title="發表於 2020-05-28 22:41:59"
                >
                  2020-05-28
                </time>
              </div>
              <a
                className="article-sort-item-title"
                href="/posts/198a4240/"
                title="Butterfly 安裝文檔(七) 更新日誌"
              >
                Butterfly 安裝文檔(七) 更新日誌
              </a>
            </div>
          </div>
          <div className="article-sort-item">
            <a
              className="article-sort-item-img"
              href="/posts/4073eda/"
              title="Butterfly 安裝文檔(六) 進階教程"
            >
              <img
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-06-cover.png"
                alt="Butterfly 安裝文檔(六) 進階教程"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
              />
            </a>
            <div className="article-sort-item-info">
              <div className="article-sort-item-time">
                <i className="far fa-calendar-alt"></i>
                <time
                  className="post-meta-date-created"
                  // datetime="2020-05-28T14:39:25.000Z"
                  title="發表於 2020-05-28 22:39:25"
                >
                  2020-05-28
                </time>
              </div>
              <a
                className="article-sort-item-title"
                href="/posts/4073eda/"
                title="Butterfly 安裝文檔(六) 進階教程"
              >
                Butterfly 安裝文檔(六) 進階教程
              </a>
            </div>
          </div>
          <div className="article-sort-item">
            <a
              className="article-sort-item-img"
              href="/posts/98d20436/"
              title="Butterfly 安裝文檔(五) 主題問答"
            >
              <img
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-doc-05-cover.png"
                alt="Butterfly 安裝文檔(五) 主題問答"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
              />
            </a>
            <div className="article-sort-item-info">
              <div className="article-sort-item-time">
                <i className="far fa-calendar-alt"></i>
                <time
                  className="post-meta-date-created"
                  // datetime="2020-05-28T14:38:21.000Z"
                  title="發表於 2020-05-28 22:38:21"
                >
                  2020-05-28
                </time>
              </div>
              <a
                className="article-sort-item-title"
                href="/posts/98d20436/"
                title="Butterfly 安裝文檔(五) 主題問答"
              >
                Butterfly 安裝文檔(五) 主題問答
              </a>
            </div>
          </div>
          <div className="article-sort-item">
            <a
              className="article-sort-item-img"
              href="/posts/ceeb73f/"
              title="Butterfly 安裝文檔(四) 主題配置-2"
            >
              <img
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-docs-04-cover.png"
                alt="Butterfly 安裝文檔(四) 主題配置-2"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
              />
            </a>
            <div className="article-sort-item-info">
              <div className="article-sort-item-time">
                <i className="far fa-calendar-alt"></i>
                <time
                  className="post-meta-date-created"
                  // datetime="2020-05-28T14:38:11.000Z"
                  title="發表於 2020-05-28 22:38:11"
                >
                  2020-05-28
                </time>
              </div>
              <a
                className="article-sort-item-title"
                href="/posts/ceeb73f/"
                title="Butterfly 安裝文檔(四) 主題配置-2"
              >
                Butterfly 安裝文檔(四) 主題配置-2
              </a>
            </div>
          </div>
          */}
        </div>
        <nav id="pagination">
          <div className="pagination">
            <span className="page-number current">1</span>
            <a className="page-number" href="/archives/page/2/">
              2
            </a>
            <a className="extend next" rel="next" href="/archives/page/2/">
              <i className="fas fa-chevron-right fa-fw"></i>
            </a>
          </div>
        </nav>
      </div>
      <PageAsideContent />
    </main>
  );
};

export default connect((state) => state)(Index);
