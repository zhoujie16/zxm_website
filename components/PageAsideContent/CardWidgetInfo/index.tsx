import BaseImage from "./../../../components/BaseImage";

// 博主信息
import { connect } from "react-redux";

const Index = (props) => {
  let w_website_author = "";
  let w_website_description = "";
  let w_article_all_count = 0;
  let w_column_all_count = 0;
  let w_website_git = "";
  try {
    w_website_author = props.pageConfigData.w_website_author;
    w_website_description = props.pageConfigData.w_website_description;
    w_article_all_count = props.pageConfigData.w_article_all_count;
    w_column_all_count = props.pageConfigData.w_column_all_count;
    w_website_git = props.pageConfigData.w_website_git;
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="card-widget card-info">
      <div className="is-center">
        <div className="avatar-img">
          <BaseImage
            src="https://s2.loli.net/2022/01/02/91jamn6KisqRQBV.jpg"
            alt="avatar"
          />
        </div>
        <div className="author-info__name">{w_website_author}</div>
        <div className="author-info__description">{w_website_description}</div>
      </div>
      <div className="card-info-data">
        <div className="card-info-data-item is-center">
          <a href="javascript:;">
            <div className="headline">文章</div>
            <div className="length-num">{w_article_all_count}</div>
          </a>
        </div>
        {/* <div className="card-info-data-item is-center">
          <a href="/tags/">
            <div className="headline">標籤</div>
            <div className="length-num">15</div>
          </a>
        </div> */}
        <div className="card-info-data-item is-center">
          <a href="javascript:;">
            <div className="headline">分类</div>
            <div className="length-num">{w_column_all_count}</div>
          </a>
        </div>
      </div>
      {w_website_git ? (
        <a
          className="button--animated"
          id="card-info-btn"
          target="_blank"
          rel="noopener external nofollow noreferrer"
          href={w_website_git}
        >
          <i className="fab fa-github"></i>
          <span>Follow Me</span>
        </a>
      ) : (
        ""
      )}

      {/* <div className="card-info-social-icons is-center">
        <a
          className="social-icon"
          href="mailto:i@immyw.com"
          rel="external nofollow noreferrer"
          target="_blank"
          title="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a className="social-icon" href="/atom.xml" target="_blank" title="RSS">
          <i className="fas fa-rss"></i>
        </a>
      </div> */}
    </div>
  );
};

export default connect((state) => state)(Index);
