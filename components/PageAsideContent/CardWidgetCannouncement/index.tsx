const Index = () => {
  return (
    <div className="card-widget card-announcement">
      <div className="item-headline">
        <i className="fas fa-bullhorn card-announcement-animation"></i>
        <span>公告</span>
      </div>
      <div className="announcement_content">
        如果你在使用中遇到問題，請到
        <a
          target="_blank"
          rel="noopener external nofollow noreferrer"
          href="https://github.com/jerryc127/hexo-theme-butterfly/issues"
          style={{ color: "#49b1f5" }}
        >
          Github Issues
        </a>
        或者
        <a href="/messageboard/" style={{ color: "#49b1f5" }}>
          留言板
        </a>
        進行反饋，你也可以加入 QQ 群（由於 QQ
        群只能有500人，會定時清理潛水的人）
        <div className="social-button">
          <a
            className="button--animated"
            href="https://jq.qq.com/?_wv=1027&k=KU9105XR"
            rel="external nofollow noreferrer"
            target="_blank"
          >
            QQ 1 群 👍
          </a>
          <a
            className="button--animated"
            href="https://jq.qq.com/?_wv=1027&k=r1nK0DQz"
            rel="external nofollow noreferrer"
            target="_blank"
          >
            QQ 2 群 👍
          </a>
          <a
            className="button--animated"
            href="https://t.me/bu2fly"
            rel="external nofollow noreferrer"
            target="_blank"
          >
            Telegram 👍
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
