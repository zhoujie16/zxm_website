import Config from "../../config";
import BaseImage from "./../../components/BaseImage";
import { connect } from "react-redux";

const Index = (props) => {
  const onhover = () => {
    try {
      let pathname = window.location.pathname;
      let [x, b, id] = pathname.split("/");
      let title = document.querySelector(".post-title").innerText;
      b == "" ? (b = "home") : "";
      window.spm(`${Config.blogCode}.${b}.reward_btn_mouse_enter`, {
        title,
        id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  let w_sponsor_code: any = "";
  let alipay_code = "";
  let weixin_code = "";
  try {
    if (props.pageConfigData.w_sponsor_code) {
      w_sponsor_code = JSON.parse(props.pageConfigData.w_sponsor_code);
      alipay_code = w_sponsor_code.alipay;
      weixin_code = w_sponsor_code.weixin;
    }
  } catch (error) {
    console.log(error);
  }
  return w_sponsor_code ? (
    <div className="post-reward">
      <div className="reward-button button--animated" onMouseEnter={onhover}>
        <i className="fas fa-qrcode"></i> 打赏
      </div>
      <div className="reward-main">
        <ul className="reward-all">
          <li className="reward-item">
            <BaseImage
              className="post-qr-code-img"
              src={weixin_code}
              alt="微信"
            />
            <div className="post-qr-code-desc">微信</div>
          </li>
          <li className="reward-item">
            <BaseImage
              className="post-qr-code-img"
              src={alipay_code}
              alt="支付宝"
            />
            <div className="post-qr-code-desc">支付宝</div>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    ""
  );
};

export default connect((state) => state)(Index);
