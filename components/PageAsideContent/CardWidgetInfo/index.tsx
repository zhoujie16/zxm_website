const Index = () => {
  return (
    <div className="card-widget card-info">
      <div className="is-center">
        <div className="avatar-img">
          <img
            src="/img/loading.gif"
            data-lazy-src="/img/avatar.png"
            // onerror='this.onerror=null,this.src="/img/friend_404.gif"'
            alt="avatar"
          />
        </div>
        <div className="author-info__name">Jerry</div>
        <div className="author-info__description">
          A Simple and Card UI Design theme for Hexo
        </div>
      </div>
      <div className="card-info-data">
        <div className="card-info-data-item is-center">
          <a href="/archives/">
            <div className="headline">文章</div>
            <div className="length-num">18</div>
          </a>
        </div>
        <div className="card-info-data-item is-center">
          <a href="/tags/">
            <div className="headline">標籤</div>
            <div className="length-num">15</div>
          </a>
        </div>
        <div className="card-info-data-item is-center">
          <a href="/categories/">
            <div className="headline">分類</div>
            <div className="length-num">6</div>
          </a>
        </div>
      </div>
      <a
        className="button--animated"
        id="card-info-btn"
        target="_blank"
        rel="noopener external nofollow noreferrer"
        href="https://github.com/jerryc127/hexo-theme-butterfly"
      >
        <i className="fab fa-github"></i>
        <span>主題 GitHub</span>
      </a>
      <div className="card-info-social-icons is-center">
        <a
          className="social-icon"
          href="mailto:i@immyw.com"
          rel="external nofollow noreferrer"
          target="_blank"
          title="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a className="social-icon" href="/atom.xml" target="_blank" title="RSS">
          <i className="fas fa-rss"></i>
        </a>
      </div>
    </div>
  );
};

export default Index;
