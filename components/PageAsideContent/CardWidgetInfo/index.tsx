// 博主信息
const Index = () => {
  return (
    <div className="card-widget card-info">
      <div className="is-center">
        <div className="avatar-img">
          <img
            src="https://gitee.com/zz16/upic/raw/master/2020/04/1586355398747.jpg"
            // src="/img/avatar.png"
            // onerror='this.onerror=null,this.src="/img/friend_404.gif"'
            alt="avatar"
          />
        </div>
        <div className="author-info__name">周小米</div>
        <div className="author-info__description">
          没有高深的知识，没有进阶的技巧。只是，万丈高楼平地起，千里之行始于足下，千里长提溃于蚁穴。能把简单的做好就是不简单，你能走多远，不是在于你有多聪明，而是取决于你有多勤奋，共勉。
        </div>
      </div>
      <div className="card-info-data">
        <div className="card-info-data-item is-center">
          <a href="/archives/">
            <div className="headline">文章</div>
            <div className="length-num">18</div>
          </a>
        </div>
        {/* <div className="card-info-data-item is-center">
          <a href="/tags/">
            <div className="headline">標籤</div>
            <div className="length-num">15</div>
          </a>
        </div> */}
        <div className="card-info-data-item is-center">
          <a href="/categories/">
            <div className="headline">分类</div>
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
        <span>Follow Me</span>
      </a>
      {/* <div className="card-info-social-icons is-center">
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
      </div> */}
    </div>
  );
};

export default Index;
