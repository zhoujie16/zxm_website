import moment from "moment";

const Index = (props: any) => {
  let { itemInfo, curIndex } = props;
  let postClass = `post_cover${
    curIndex % 2 === 0 ? " left_radius" : " right_radius"
  }`;
  let title = itemInfo.title;
  let timeStr = moment(Number(itemInfo.release_time)).format("YYYY-MM-DD");
  let content_rich = itemInfo.content_rich;
  return (
    <div className="recent-post-item">
      <div className={postClass}>
        <a href="/posts/21cfbf15/" title={title}>
          <img
            className="post_bg"
            src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png"
            // src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png"
            // onerror='this.onerror=null,this.src="/img/404.jpg"'
            alt={title}
          />
        </a>
      </div>
      <div className="recent-post-info">
        <a className="article-title" href="/posts/21cfbf15/" title={title}>
          {title}
        </a>
        <div className="article-meta-wrap">
          {/* <span className="article-meta">
            <i className="fas fa-thumbtack sticky"></i>
            <span className="sticky">置頂</span>
            <span className="article-meta__separator">|</span>
          </span> */}
          <span className="post-meta-date">
            <i className="far fa-calendar-alt"></i>
            <span className="article-meta-label">发表于</span>
            <time
            // datetime="2020-05-28T14:31:46.000Z"
            // title="發表於 2020-05-28 22:31:46"
            >
              {timeStr}
            </time>
          </span>
          {/* <span className="article-meta">
            <span className="article-meta__separator">|</span>
            <i className="fas fa-inbox"></i>
            <a
              className="article-meta__categories"
              href="/categories/Docs%E6%96%87%E6%AA%94/"
            >
              Docs文檔
            </a>
          </span> */}
          {/* <span className="article-meta">
            <span className="article-meta__separator">|</span>
            <i className="fas fa-comments"></i>
            <a
              className="twikoo-count"
              href="/posts/21cfbf15/#post-comment"
            ></a>
            <span className="article-meta-label">條評論</span>
          </span> */}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content_rich }}
        ></div>
      </div>
    </div>
  );
};

export default Index;
