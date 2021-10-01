import { connect } from "react-redux";
// 网站公告
const Index = (props) => {
  let w_website_announcement = "";
  try {
    w_website_announcement = props.pageConfigData.w_website_announcement;
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="card-widget card-announcement">
      <div className="item-headline">
        <i className="fas fa-bullhorn card-announcement-animation"></i>
        <span>公告</span>
      </div>
      <div className="announcement_content">{w_website_announcement}</div>
    </div>
  );
};

export default connect((state) => state)(Index);
