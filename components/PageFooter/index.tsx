const Index = () => {
  return (
    <footer
      id="footer"
      style={{
        backgroundImage:
          "url(https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg)",
      }}
    >
      <div id="footer-wrap">
        <div className="copyright">&copy;2019 - 2021 By Jerry</div>
        <div className="framework-info">
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
        </div>
      </div>
    </footer>
  );
};

export default Index;
