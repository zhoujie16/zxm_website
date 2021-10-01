import { connect } from "react-redux";
import moment from "moment";

const Index = (props) => {
  let w_website_author = "";
  let w_website_create_time = "";
  let website_time_range = "";
  try {
    w_website_author = props.pageConfigData.w_website_author;
    w_website_create_time = props.pageConfigData.w_website_create_time;
    website_time_range =
      moment(Number(w_website_create_time)).format("YYYY") +
      " - " +
      moment().format("YYYY");
  } catch (error) {
    console.log(error);
  }
  return (
    <footer
      id="footer"
      style={{
        backgroundImage:
          "url(https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg)",
      }}
    >
      <div id="footer-wrap">
        <div className="copyright">
          &copy;{website_time_range} By {w_website_author}
        </div>
        <div className="footer_custom_text">
          <div className="img">
            <img
              alt="img"
              className="entered loaded"
              src="https://cdn.jsdelivr.net/gh/Daibi-mua/jsdelivr@1.3/icp.png"
              data-ll-status="loaded"
            />
            <a
              target="_blank"
              rel="noopener external nofollow noreferrer"
              href="http://beian.miit.gov.cn/"
            >
              赣ICP备2021000049号
            </a>
          </div>
        </div>
        {/* <div className="framework-info">
          <span>框架</span>
          <a
            target="_blank"
            rel="noopener external nofollow noreferrer"
            href="https://hexo.io"
          >
            Hexo
          </a>
          <span className="footer-separator">|</span>
          <span>主題</span>
          <a
            target="_blank"
            rel="noopener external nofollow noreferrer"
            href="https://github.com/jerryc127/hexo-theme-butterfly"
          >
            Butterfly
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default connect((state) => state)(Index);
