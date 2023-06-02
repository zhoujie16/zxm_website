import { ArticleType } from "@/types";
import dayjs from "dayjs";
import BaseImage from "../BaseImage";
/**
 * 首页 列表 卡片
 */
export default function ({
  item = {},
  layout = "left",
}: {
  item: ArticleType | any;
  layout?: string;
}) {
  const _url: string = `/post/${item._id}`;

  return (
    <>
      <div className="recent-post-item">
        <div className={`post_cover ${layout}`}>
          <a href={_url} title={item.title}>
            <BaseImage className="post-bg" src={item.images} />
          </a>
        </div>
        <div className="recent-post-info">
          <a className="article-title" href={_url} title={item.title}>
            {item.title}
          </a>
          <div className="article-meta-wrap">
            {/* <span className="article-meta">
              <i className="fas fa-thumbtack sticky"></i>
              <span className="sticky">置頂</span>
              <span className="article-meta-separator">|</span>
            </span> */}
            <span className="post-meta-date">
              <i className="far fa-calendar-alt"></i>
              <span className="article-meta-label">发表于</span>
              <span>{dayjs(item.release_time).format("YYYY-MM-DD")}</span>
            </span>
            {/* <span className="article-meta">
              <span className="article-meta-separator">|</span>
              <i className="fas fa-inbox"></i>
              <a
                className="article-meta__categories"
                href="/categories/Docs%E6%96%87%E6%AA%94/"
              >
                Docs文檔
              </a>
            </span> */}
            {/* <span className="article-meta">
              <span className="article-meta-separator">|</span>
              <i className="fas fa-comments"></i>
              <a href="/posts/21cfbf15/#post-comment">
                <span className="waline-comment-count" id="/posts/21cfbf15/">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </span>
              </a>
              <span className="article-meta-label">條評論</span>
            </span> */}
          </div>
          <div className="content">{item.sub_title}</div>
        </div>
      </div>
    </>
  );
}
