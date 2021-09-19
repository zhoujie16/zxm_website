const Index = () => {
  return (
    <div className="post-reward">
      <div className="reward-button button--animated">
        <i className="fas fa-qrcode"></i> 打賞
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
