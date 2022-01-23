// 网站信息
import { connect } from "react-redux";
import moment from "moment";

const Index = (props) => {
  let pageConfigData = props.pageConfigData;
  let {
    w_article_all_count,
    w_column_all_count,
    w_last_update_time,
    w_pv_all_count,
    w_uv_all_count,
    w_website_create_time,
    w_uv_week_count,
    w_pv_week_count,
  } = pageConfigData;
  try {
    w_website_create_time =
      moment().diff(moment(Number(w_website_create_time)), "day") + "天";
    w_last_update_time = moment(Number(w_last_update_time)).format(
      "YYYY-MM-DD"
    );
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="card-widget card-webinfo">
      <div className="item-headline">
        <i className="fas fa-chart-line"></i>
        <span>网站资讯</span>
      </div>
      <div className="webinfo">
        <div className="webinfo-item">
          <div className="item-name">文章数目 :</div>
          <div className="item-count">{w_article_all_count}</div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">已运行时间 :</div>
          <div
            className="item-count"
            id="runtimeshow"
            data-publishdate="2019-11-13T00:00:00.000Z"
          >
            {w_website_create_time}
          </div>
        </div>
        {/* <div className="webinfo-item">
          <div className="item-name">本站总字数 :</div>
          <div className="item-count">50.6k</div>
        </div> */}
        {/* <div className="webinfo-item">
          <div className="item-name">总访客数 :</div>
          <div className="item-count" id="busuanzi_value_site_uv">
            {w_uv_all_count}
          </div>
        </div> */}
        {/* <div className="webinfo-item">
          <div className="item-name">总访问量 :</div>
          <div className="item-count" id="busuanzi_value_site_pv">
            {w_pv_all_count}
          </div>
        </div> */}
        {/* <div className="webinfo-item">
          <div className="item-name">周访客数 :</div>
          <div className="item-count" id="busuanzi_value_site_uv">
            {w_uv_week_count}
          </div>
        </div> */}
        <div className="webinfo-item">
          <div className="item-name">周访问量 :</div>
          <div className="item-count" id="busuanzi_value_site_pv">
            {w_pv_week_count}
          </div>
        </div>
        {/* <div className="webinfo-item">
          <div className="item-name">最后更新时间 :</div>
          <div
            className="item-count"
            id="last-push-date"
            data-lastpushdate="2021-09-09T09:59:12.006Z"
          >
            {w_last_update_time}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default connect((state) => state)(Index);
