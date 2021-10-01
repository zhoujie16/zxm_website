import { connect } from "react-redux";
import { getRandomNumImage } from "./../../utils";
import moment from "moment";
import Config from "../../config";
import BaseImage from "./../../components/BaseImage";

const Index = (props) => {
  let { mainArticleDetail } = props;
  let { related } = mainArticleDetail;

  let spmFn = (opt) => {
    try {
      let pathname = window.location.pathname;
      let [x, b, id] = pathname.split("/");
      let title = document.querySelector(".post-title").innerText;
      b == "" ? (b = "home") : "";
      window.spm(`${Config.blogCode}.${b}.article_related_posts_btn`, {
        title: opt.title,
        id: opt.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relatedPosts">
      <div className="headline">
        <i className="fas fa-thumbs-up fa-fw"></i> <span>相关推荐</span>
      </div>
      <div className="relatedPosts-list">
        {related.map((item: any) => (
          <div>
            <a
              href={`/article/${item.id}`}
              title={item.title}
              onClick={() => spmFn(item)}
            >
              <BaseImage className="cover" alt="cover" />
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
