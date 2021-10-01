import { connect } from "react-redux";
import Config from "../../config";
import { getRandomNumImage } from "./../../utils";
import BaseImage from "./../../components/BaseImage";

const Index = (props) => {
  let { mainArticleDetail } = props;
  let { prev, next } = mainArticleDetail;
  let pullClass = prev && next ? "" : " pull-full";

  const onSpmPrev = (opt) => {
    try {
      let pathname = window.location.pathname;
      let [x, b, id] = pathname.split("/");
      let title = document.querySelector(".post-title").innerText;
      b == "" ? (b = "home") : "";
      window.spm(`${Config.blogCode}.${b}.pagination_btn_prev`, {
        title: title,
        id: id,
        title_prec: opt.title,
        id_prev: opt.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onSpmNext = (opt) => {
    try {
      let pathname = window.location.pathname;
      let [x, b, id] = pathname.split("/");
      let title = document.querySelector(".post-title").innerText;
      b == "" ? (b = "home") : "";
      window.spm(`${Config.blogCode}.${b}.pagination_btn_next`, {
        title: title,
        id: id,
        title_next: opt.title,
        id_next: opt.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="pagination-post" id="pagination">
      {prev ? (
        <div className={`prev-post pull-left${pullClass}`}>
          <a href={`/article/${prev.id}`} onClick={() => onSpmPrev(prev)}>
            <BaseImage className="prev-cover" alt="cover of previous post" />
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
        <div
          className={`next-post pull-right${pullClass}`}
          onClick={() => onSpmNext(next)}
        >
          <a href={`/article/${next.id}`}>
            <BaseImage className="next-cover" alt="cover of next post" />
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
