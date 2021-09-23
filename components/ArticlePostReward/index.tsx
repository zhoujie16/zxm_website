import Config from "../../config";

const Index = () => {
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
  return (
    <div className="post-reward">
      <div className="reward-button button--animated" onMouseEnter={onhover}>
        <i className="fas fa-qrcode"></i> 打赏
      </div>
      <div className="reward-main">
        <ul className="reward-all">
          <li className="reward-item">
            <img
              className="post-qr-code-img"
              // src="/img/loading.gif"
              src="https://i.loli.net/2021/09/19/6D1Ht4LRiyh2Vor.jpg"
              alt="微信"
            />
            <div className="post-qr-code-desc">微信</div>
          </li>
          <li className="reward-item">
            <img
              className="post-qr-code-img"
              // src="/img/loading.gif"
              src="https://i.loli.net/2021/09/19/Dx584Xlf1enGbBo.jpg"
              alt="支付宝"
            />
            <div className="post-qr-code-desc">支付宝</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Index;
