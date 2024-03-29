/**
 * 打赏部分
 * @returns
 */
export default function () {
  return (
    <>
      <div className="post-reward">
        <div className="reward-button">
          <i className="fas fa-qrcode"></i> 打賞
        </div>
        <div className="reward-main">
          <ul className="reward-all">
            <li className="reward-item">
              <a
                href="https://file.crazywong.com/gh/jerryc127/CDN/Photo/wechat.jpg"
                rel="external nofollow noreferrer"
                target="_blank"
              >
                <img
                  className="post-qr-code-img"
                  src="/img/loading.gif"
                  data-lazy-src="https://file.crazywong.com/gh/jerryc127/CDN/Photo/wechat.jpg"
                  alt="微信"
                />
              </a>
              <div className="post-qr-code-desc">微信</div>
            </li>
            <li className="reward-item">
              <a
                href="https://file.crazywong.com/gh/jerryc127/CDN/Photo/alipay.jpg"
                rel="external nofollow noreferrer"
                target="_blank"
              >
                <img
                  className="post-qr-code-img"
                  src="/img/loading.gif"
                  data-lazy-src="https://file.crazywong.com/gh/jerryc127/CDN/Photo/alipay.jpg"
                  alt="支付寶"
                />
              </a>
              <div className="post-qr-code-desc">支付寶</div>
            </li>
            <li className="reward-item">
              <a
                href="https://file.crazywong.com/gh/jerryc127/CDN/Photo/alipayhk.jpg"
                rel="external nofollow noreferrer"
                target="_blank"
              >
                <img
                  className="post-qr-code-img"
                  src="/img/loading.gif"
                  data-lazy-src="https://file.crazywong.com/gh/jerryc127/CDN/Photo/alipayhk.jpg"
                  alt="支付寶香港"
                />
              </a>
              <div className="post-qr-code-desc">支付寶香港</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
