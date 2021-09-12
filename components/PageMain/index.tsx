import { connect } from "react-redux";
import PageAsideContent from "components/PageAsideContent";
import RecentPostItem from "./RecentPostItem";
import PagePagination from "components/PagePagination";

const Index = (props: any) => {
  let mainArticleData: any = { items: [] };
  try {
    mainArticleData = props.mainArticleData;
  } catch (error) {
    console.log(error);
  }

  return (
    <main className="layout" id="content-inner">
      <div className="recent-posts" id="recent-posts">
        {mainArticleData.items.map((x: any, i: number) => (
          <RecentPostItem itemInfo={x} curIndex={i} key={x.id} />
        ))}

        {/*
        <div className="recent-post-item">
          <div className="post_cover left_radius">
            <a href="/posts/21cfbf15/" title="Butterfly 安裝文檔(一) 快速開始">
              <img
                className="post_bg"
                // src="/img/loading.gif"
                src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
                alt="Butterfly 安裝文檔(一) 快速開始"
              />
            </a>
          </div>
          <div className="recent-post-info">
            <a
              className="article-title"
              href="/posts/21cfbf15/"
              title="Butterfly 安裝文檔(一) 快速開始"
            >
              Butterfly 安裝文檔(一) 快速開始
            </a>
            <div className="article-meta-wrap">
              <span className="article-meta">
                <i className="fas fa-thumbtack sticky"></i>
                <span className="sticky">置頂</span>
                <span className="article-meta__separator">|</span>
              </span>
              <span className="post-meta-date">
                <i className="far fa-calendar-alt"></i>
                <span className="article-meta-label">發表於</span>
                <time
                  // datetime="2020-05-28T14:31:46.000Z"
                  title="發表於 2020-05-28 22:31:46"
                >
                  2020-05-28
                </time>
              </span>
              <span className="article-meta">
                <span className="article-meta__separator">|</span>
                <i className="fas fa-inbox"></i>
                <a
                  className="article-meta__categories"
                  href="/categories/Docs%E6%96%87%E6%AA%94/"
                >
                  Docs文檔
                </a>
              </span>
              <span className="article-meta">
                <span className="article-meta__separator">|</span>
                <i className="fas fa-comments"></i>
                <a
                  className="twikoo-count"
                  href="/posts/21cfbf15/#post-comment"
                ></a>
                <span className="article-meta-label">條評論</span>
              </span>
            </div>
            <div className="content">
              📖 本教程更新於 2021 年 07 月 30
              日，教程的內容針對最新穩定版而更新（如果你是舊版，教程會有些出入，請留意）
              🦋 Butterfly 已經更新到 3.8.3 📚 文檔目錄 🚀 快速開始 - 📑
              主題頁面 - 🛠 主題配置-1 - ⚔️ 主題配置-2 - ❓ 主題問答 - ⚡️
              進階教程 - ✨ 更新日誌 - 🤞 打賞 你可以通過右下角的 簡
              按鈕切換為簡體顯示 hexo-theme-butterfly是基於 hexo-theme-melody
              的基礎上進行開發的。 安裝Git安裝 (Github)Git安裝
              (Gitee)npm安裝穩定版【建議】 在你的 Hexo 根目錄裏 1git clone -b
              master https://github.com/jerryc127/hexo-theme-butterfly.git
              themes/butterfly 測試版 測試版可能存在 bug，追求穩定的請安裝穩定版
              如果想要安裝比較新的 dev 分支，可以 1git clone -b dev
              https://github.com/je ...
            </div>
          </div>
        </div>
        <div className="recent-post-item">
          <div className="post_cover right_radius">
            <a
              href="/posts/7670b080/"
              title="Butterfly 美化/優化/魔改 教程合集"
            >
              <img
                className="post_bg"
                // src="/img/loading.gif"
                src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-diy-cover.png"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
                alt="Butterfly 美化/優化/魔改 教程合集"
              />
            </a>
          </div>
          <div className="recent-post-info">
            <a
              className="article-title"
              href="/posts/7670b080/"
              title="Butterfly 美化/優化/魔改 教程合集"
            >
              Butterfly 美化/優化/魔改 教程合集
            </a>
            <div className="article-meta-wrap">
              <span className="post-meta-date">
                <i className="far fa-calendar-alt"></i>
                <span className="article-meta-label">發表於</span>
                <time
                  // datetime="2021-01-02T10:11:22.000Z"
                  title="發表於 2021-01-02 18:11:22"
                >
                  2021-01-02
                </time>
              </span>
              <span className="article-meta">
                <span className="article-meta__separator">|</span>
                <i className="fas fa-inbox"></i>
                <a
                  className="article-meta__categories"
                  href="/categories/%E5%90%88%E9%9B%86/"
                >
                  合集
                </a>
              </span>
              <span className="article-meta">
                <span className="article-meta__separator">|</span>
                <i className="fas fa-comments"></i>
                <a
                  className="twikoo-count"
                  href="/posts/7670b080/#post-comment"
                ></a>
                <span className="article-meta-label">條評論</span>
              </span>
            </div>
            <div className="content">
              以下教程並未經過測試，如過遇到問題，請聯係相應的作者。不建議沒 DIY
              經驗的使用者操作。 如果你想加入自己的文章到表格，你可以
              確保你的文章跟 Butterfly 主題有關 點擊這個鏈接 按要求新增 作者 +
              文章連結 | Jerry | [教程a](https://butterfly.js.org) 點擊下面的
              Commit changes ，合併到 butterfly.js.org 倉庫 作者 連結 Jerry
              自定義側邊欄 小康 优雅魔改 Lete 乐特 Butterfly主题美化-无修改源码
              (持续更新中...) Akilar Hexo博客访问优化日记 Akilar
              基于Butterfly主题的美化日记 Akilar 平滑升级魔改后的Hexo主题
              小冰博客 小冰插件包 butterfly-orchid 1.0 小嘉的部落格 关于我
              Butterfly 主题的所有美化 唐先森の博客 Hexo+Butterfly主题美化
              guole&#39;s Blog Butterfly美化日记/页面美化/插件美化/踩坑经历 ...
            </div>
          </div>
        </div>
        <div className="recent-post-item">
          <div className="post_cover left_radius">
            <a href="/posts/ea33ab97/" title="自定義側邊欄">
              <img
                className="post_bg"
                // src="/img/loading.gif"
                src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/aside-diy-cover.png"
                // onerror='this.onerror=null,this.src="/img/404.jpg"'
                alt="自定義側邊欄"
              />
            </a>
          </div>
          <div className="recent-post-info">
            <a
              className="article-title"
              href="/posts/ea33ab97/"
              title="自定義側邊欄"
            >
              自定義側邊欄
            </a>
            <div className="article-meta-wrap">
              <span className="post-meta-date">
                <i className="far fa-calendar-alt"></i>
                <span className="article-meta-label">發表於</span>
                <time
                  // datetime="2020-12-30T13:48:10.000Z"
                  title="發表於 2020-12-30 21:48:10"
                >
                  2020-12-30
                </time>
              </span>
              <span className="article-meta">
                <span className="article-meta__separator">|</span>
                <i className="fas fa-inbox"></i>
                <a
                  className="article-meta__categories"
                  href="/categories/%E9%80%B2%E9%9A%8E%E6%95%99%E7%A8%8B/"
                >
                  進階教程
                </a>
              </span>
              <span className="article-meta">
                <span className="article-meta__separator">|</span>
                <i className="fas fa-comments"></i>
                <a
                  className="twikoo-count"
                  href="/posts/ea33ab97/#post-comment"
                ></a>
                <span className="article-meta-label">條評論</span>
              </span>
            </div>
            <div className="content">
              適用於 &gt;= 3.8.0 側邊欄現在支持自定義了，可以添加自己喜歡的
              widget。 可添加自己的 widget，也可以對現有的 widget
              進行排序（博客資料和 公告這兩個固定，其它的能排序） widget
              排序只需要配置 sort_order就行。（使用了 Flex 佈局的 order
              屬性，具體可查看 mozilla
              文檔。簡單來講，就是配置數字來實現排序，如果不配置，則默認為
              0。數字越小，排序越靠前。 12345678910111213141516aside: ...
              card_recent_post: sort_order: # Don&#x27;t modify the setting
              unless you know how it works card_categories: sort_order: #
              Don&#x27;t modify the setting unless you know how it works
              card_tags: sort_order: # Don&#x27;t modify the setting unle ...
            </div>
          </div>
        </div>
        <div className="recent-post-item ads-wrap">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-fb+5w+4e-db+86"
            data-ad-client="ca-pub-8919908724705274"
            data-ad-slot="1538867630"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
         */}
        <PagePagination />
      </div>
      <PageAsideContent />
    </main>
  );
};

export default connect((state) => state)(Index);
