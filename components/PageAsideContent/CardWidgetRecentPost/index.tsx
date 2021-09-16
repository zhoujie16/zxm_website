import { connect } from "react-redux";
import { getRandomNumImage } from "./../../../utils";
import moment from "moment";
// 最近文章
const Index = (props) => {
  let recentArticleData: any = { items: [] };
  try {
    recentArticleData = props.recentArticleData;
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="card-widget card-recent-post">
      <div className="item-headline">
        <i className="fas fa-history"></i>
        <span>最新文章</span>
      </div>
      <div className="aside-list">
        {recentArticleData.items.map((item) => (
          <div className="aside-list-item">
            <a
              className="thumbnail"
              href={`/article/${item.id}`}
              title={item.title}
            >
              <img
                // src="/img/loading.gif"
                src={getRandomNumImage()}
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
                alt={item.title}
              />
            </a>
            <div className="content">
              <a
                className="title"
                href={`/article/${item.id}`}
                title={item.title}
              >
                {item.title}
              </a>
              <time
              // datetime="2021-01-02T10:11:22.000Z"
              // title="發表於 2021-01-02 18:11:22"
              >
                {moment(Number(item.release_time)).format("YYYY-MM-DD")}
              </time>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect((state) => state)(Index);
