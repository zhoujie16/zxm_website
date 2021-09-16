import { connect } from "react-redux";
import { getRandomNumImage } from "./../../utils";

const Index = (props) => {
  let { mainArticleDetail } = props;
  let { prev, next } = mainArticleDetail;
  let pullClass = prev && next ? "" : " pull-full";

  return (
    <nav className="pagination-post" id="pagination">
      {prev ? (
        <div className={`prev-post pull-left${pullClass}`}>
          <a href={`/article/${prev.id}`}>
            <img
              className="prev-cover"
              // src="/img/loading.gif"
              src={getRandomNumImage()}
              // src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-docs-02-cover.png"
              // onerror='onerror=null,src="/img/404.jpg"'
              alt="cover of previous post"
            />
            <div className="pagination-info">
              <div className="label">上一篇</div>
              <div className="prev_info">{prev.title}</div>
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
      {next ? (
        <div className={`next-post pull-right${pullClass}`}>
          <a href={`/article/${next.id}`}>
            <img
              className="next-cover"
              // src="/img/loading.gif"
              src={getRandomNumImage()}
              // src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png"
              // onerror='onerror=null,src="/img/404.jpg"'
              alt="cover of next post"
            />
            <div className="pagination-info">
              <div className="label">下一篇</div>
              <div className="next_info">{next.title}</div>
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default connect((state) => state)(Index);
