const Index = () => {
  return (
    <div className="tag_share">
      <div className="post-meta__tag-list">
        <a className="post-meta__tags" href="/tags/%E6%95%99%E7%A8%8B/">
          教程
        </a>
        <a className="post-meta__tags" href="/tags/Hexo/">
          Hexo
        </a>
        <a className="post-meta__tags" href="/tags/%E4%B8%BB%E9%A1%8C/">
          主題
        </a>
        <a className="post-meta__tags" href="/tags/butterfly/">
          butterfly
        </a>
      </div>
      <div className="post_share">
        <div
          className="social-share"
          data-image="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png"
          data-sites="facebook,twitter,wechat,weibo,qq"
        ></div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/social-share.js/dist/css/share.min.css"
          media="print"
          // onload='this.media="all"'
        />
        <script
          src="https://cdn.jsdelivr.net/npm/social-share.js/dist/js/social-share.min.js"
          defer
        ></script>
      </div>
    </div>
  );
};
export default Index;
