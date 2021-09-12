const Index = () => {
  return (
    <nav className="pagination-post" id="pagination">
      <div className="prev-post pull-left">
        <a href="/posts/dc584b87/">
          <img
            className="prev-cover"
            // src="/img/loading.gif"
            src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-docs-02-cover.png"
            // onerror='onerror=null,src="/img/404.jpg"'
            alt="cover of previous post"
          />
          <div className="pagination-info">
            <div className="label">上一篇</div>
            <div className="prev_info">Butterfly 安裝文檔(二) 主題頁面</div>
          </div>
        </a>
      </div>
      <div className="next-post pull-right">
        <a href="/posts/39b121ef/">
          <img
            className="next-cover"
            // src="/img/loading.gif"
            src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png"
            // onerror='onerror=null,src="/img/404.jpg"'
            alt="cover of next post"
          />
          <div className="pagination-info">
            <div className="label">下一篇</div>
            <div className="next_info">
              Hexo Built-in Tag Plugins (Hexo內置標籤外掛)
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
};
export default Index;
