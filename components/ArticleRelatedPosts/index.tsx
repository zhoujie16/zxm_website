import { connect } from "react-redux";
import { getRandomNumImage } from "./../../utils";
import moment from "moment";

const Index = (props) => {
  let { mainArticleDetail } = props;
  let { related } = mainArticleDetail;
  return (
    <div className="relatedPosts">
      <div className="headline">
        <i className="fas fa-thumbs-up fa-fw"></i> <span>相关推荐</span>
      </div>
      <div className="relatedPosts-list">
        {related.map((item: any) => (
          <div>
            <a href={`/article/${item.id}`} title={item.title}>
              <img
                className="cover"
                src={getRandomNumImage()}
                // src="/img/loading.gif"
                // src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-docs-02-cover.png"
                alt="cover"
              />
              <div className="content is-center">
                <div className="date">
                  <i className="far fa-calendar-alt fa-fw"></i>{" "}
                  {moment(Number(item.release_time)).format("YYYY-MM-DD")}
                </div>
                <div className="title">{item.title}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect((state) => state)(Index);
