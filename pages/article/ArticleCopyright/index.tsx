const Index = () => {
  return (
    <div className="post-copyright">
      <div className="post-copyright__author">
        <span className="post-copyright-meta">文章作者:</span>
        <span className="post-copyright-info">
          <a href="mailto:undefined" rel="external nofollow noreferrer">
            Jerry
          </a>
        </span>
      </div>
      <div className="post-copyright__type">
        <span className="post-copyright-meta">文章連結:</span>
        <span className="post-copyright-info">
          <a href="https://butterfly.js.org/posts/21cfbf15/">
            https://butterfly.js.org/posts/21cfbf15/
          </a>
        </span>
      </div>
      <div className="post-copyright__notice">
        <span className="post-copyright-meta">版權聲明:</span>
        <span className="post-copyright-info">
          本部落格所有文章除特別聲明外，均採用
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            rel="external nofollow noreferrer"
            target="_blank"
          >
            CC BY-NC-SA 4.0
          </a>
          許可協議。轉載請註明來自
          <a href="https://butterfly.js.org" target="_blank">
            Butterfly
          </a>
          ！
        </span>
      </div>
    </div>
  );
};
export default Index;
