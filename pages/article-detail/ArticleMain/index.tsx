import React, { useEffect, useCallback, useState } from "react";
import ArticleContent from "./../ArticleContent";

const Index = () => {
  return (
    <main className="layout" id="content-inner">
      <div id="post">
        <article className="post-content" id="article-container">
          <div className="note blue icon flat">
            <i className="note-icon fas fa-bullhorn"></i>
            <p>
              📖 本教程更新於 2021 年 07 月 30 日，教程的內容針對最新
              <strong>穩定版</strong>
              而更新（如果你是舊版，教程會有些出入，請留意）
            </p>
            <p>
              🦋 Butterfly 已經更新到
              <a
                target="_blank"
                rel="noopener external nofollow noreferrer"
                href="https://github.com/jerryc127/hexo-theme-butterfly/releases/tag/3.8.3"
              >
                3.8.3
              </a>
            </p>
          </div>
          <div className="note green icon flat">
            <i className="note-icon fas fa-rocket"></i>
            <p>📚 文檔目錄</p>
            <p>
              <a href="/posts/21cfbf15/" title="🚀 快速開始">
                🚀 快速開始
              </a>{" "}
              -
              <a href="/posts/dc584b87/" title="📑 主題頁面">
                📑 主題頁面
              </a>{" "}
              -
              <a href="/posts/4aa8abbe/" title="🛠 主題配置-1">
                🛠 主題配置-1
              </a>
              -
              <a href="/posts/ceeb73f/" title="⚔️ 主題配置-2">
                ⚔️ 主題配置-2
              </a>
              -
              <a href="/posts/98d20436/" title="❓ 主題問答">
                ❓ 主題問答
              </a>{" "}
              -
              <a href="/posts/4073eda/" title="⚡️ 進階教程">
                ⚡️ 進階教程
              </a>
              -
              <a href="/posts/198a4240/" title="✨ 更新日誌">
                ✨ 更新日誌
              </a>{" "}
              -
              <a href="/posts/6ad51b4/" title="🤞 打賞">
                🤞 打賞
              </a>
            </p>
          </div>
          <div className="note orange icon flat">
            <i className="note-icon fas fa-magic"></i>
            <p>
              你可以通過右下角的 <strong>簡</strong> 按鈕切換為簡體顯示
            </p>
          </div>
          <hr />
          <p>
            <code>hexo-theme-butterfly</code>是基於
            <a
              target="_blank"
              rel="noopener external nofollow noreferrer"
              href="https://github.com/Molunerfinn/hexo-theme-melody"
            >
              hexo-theme-melody
            </a>
            的基礎上進行開發的。
          </p>
          <h2 id="安裝">
            <a href="#安裝" className="headerlink" title="安裝"></a>安裝
          </h2>
          <div className="tabs" id="butterfly-install">
            <ul className="nav-tabs">
              <li className="tab active">
                <button type="button" data-href="#butterfly-install-1">
                  <i className="fab fa-github-square"></i>Git安裝 (Github)
                </button>
              </li>
              <li className="tab">
                <button type="button" data-href="#butterfly-install-2">
                  <i className="fab fa-git-square"></i>Git安裝 (Gitee)
                </button>
              </li>
              <li className="tab">
                <button type="button" data-href="#butterfly-install-3">
                  <i className="fab fa-npm"></i>npm安裝
                </button>
              </li>
            </ul>
            <div className="tab-contents">
              <div className="tab-item-content active" id="butterfly-install-1">
                <p>
                  <strong>穩定版【建議】</strong>
                </p>
                <p>在你的 Hexo 根目錄裏</p>
                <figure className="highlight powershell">
                  <table>
                    <tr>
                      <td className="gutter">
                        <pre>
                          <span className="line">1</span>
                          <br />
                        </pre>
                      </td>
                      <td className="code">
                        <pre>
                          <span className="line">
                            git clone <span className="literal">-b</span> master
                            https://github.com/jerryc127/hexo
                            <span className="literal">-theme</span>
                            <span className="literal">-butterfly</span>.git
                            themes/butterfly
                          </span>
                          <br />
                        </pre>
                      </td>
                    </tr>
                  </table>
                </figure>
                <p>
                  <strong>測試版</strong>
                </p>
                <blockquote>
                  <p>測試版可能存在 bug，追求穩定的請安裝穩定版</p>
                </blockquote>
                <p>如果想要安裝比較新的 dev 分支，可以</p>
                <figure className="highlight powershell">
                  <table>
                    <tr>
                      <td className="gutter">
                        <pre>
                          <span className="line">1</span>
                          <br />
                        </pre>
                      </td>
                      <td className="code">
                        <pre>
                          <span className="line">
                            git clone <span className="literal">-b</span> dev
                            https://github.com/jerryc127/hexo
                            <span className="literal">-theme</span>
                            <span className="literal">-butterfly</span>.git
                            themes/butterfly
                          </span>
                          <br />
                        </pre>
                      </td>
                    </tr>
                  </table>
                </figure>
                <div className="note info flat">
                  <p>
                    升級方法：在主題目錄下，運行 <code>git pull</code>
                  </p>
                </div>
                <button
                  type="button"
                  className="tab-to-top"
                  aria-label="scroll to top"
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>
              <div className="tab-item-content" id="butterfly-install-2">
                <p>
                  <strong>穩定版【建議】</strong>
                </p>
                <p>在你的 Hexo 根目錄裏</p>
                <figure className="highlight powershell">
                  <table>
                    <tr>
                      <td className="gutter">
                        <pre>
                          <span className="line">1</span>
                          <br />
                        </pre>
                      </td>
                      <td className="code">
                        <pre>
                          <span className="line">
                            git clone <span className="literal">-b</span> master
                            https://gitee.com/iamjerryw/hexo
                            <span className="literal">-theme</span>
                            <span className="literal">-butterfly</span>.git
                            themes/butterfly
                          </span>
                          <br />
                        </pre>
                      </td>
                    </tr>
                  </table>
                </figure>
                <p>
                  <strong>測試版</strong>
                </p>
                <blockquote>
                  <p>測試版可能存在Bugs，追求穩定的請安裝穩定版</p>
                </blockquote>
                <p>如果想要安裝比較新的dev分支，可以</p>
                <figure className="highlight powershell">
                  <table>
                    <tr>
                      <td className="gutter">
                        <pre>
                          <span className="line">1</span>
                          <br />
                        </pre>
                      </td>
                      <td className="code">
                        <pre>
                          <span className="line">
                            git clone <span className="literal">-b</span> dev
                            https://gitee.com/iamjerryw/hexo
                            <span className="literal">-theme</span>
                            <span className="literal">-butterfly</span>.git
                            themes/butterfly
                          </span>
                          <br />
                        </pre>
                      </td>
                    </tr>
                  </table>
                </figure>
                <div className="note info flat">
                  <p>
                    升級方法：在主題目錄下，運行<code>git pull</code>
                  </p>
                </div>
                <button
                  type="button"
                  className="tab-to-top"
                  aria-label="scroll to top"
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>
              <div className="tab-item-content" id="butterfly-install-3">
                <blockquote>
                  <p>此方法只支持 Hexo 5.0.0 以上版本</p>
                  <p>
                    <em>
                      <strong>
                        通過 npm 安裝並不會在 themes 裏生成主題文件夾，而是在
                        node_modules 裏生成
                      </strong>
                    </em>
                  </p>
                </blockquote>
                <p>在你的 Hexo 根目錄裏</p>
                <figure className="highlight powershell">
                  <table>
                    <tr>
                      <td className="gutter">
                        <pre>
                          <span className="line">1</span>
                          <br />
                        </pre>
                      </td>
                      <td className="code">
                        <pre>
                          <span className="line">
                            npm i hexo
                            <span className="literal">-theme</span>
                            <span className="literal">-butterfly</span>
                          </span>
                          <br />
                        </pre>
                      </td>
                    </tr>
                  </table>
                </figure>
                <div className="note info flat">
                  <p>
                    升級方法：在 Hexo 根目錄下，運行
                    <code>npm update hexo-theme-butterfly</code>
                  </p>
                </div>
                <button
                  type="button"
                  className="tab-to-top"
                  aria-label="scroll to top"
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>
            </div>
          </div>
          <h2 id="應用主題">
            <a href="#應用主題" className="headerlink" title="應用主題"></a>
            應用主題
          </h2>
          <p>
            修改 Hexo 根目錄下的 <code>_config.yml</code>，把主題改為
            <code>butterfly</code>
          </p>
          <figure className="highlight yaml">
            <table>
              <tr>
                <td className="gutter">
                  <pre>
                    <span className="line">1</span>
                    <br />
                  </pre>
                </td>
                <td className="code">
                  <pre>
                    <span className="line">
                      <span className="attr">theme:</span>{" "}
                      <span className="string">butterfly</span>
                    </span>
                    <br />
                  </pre>
                </td>
              </tr>
            </table>
          </figure>
          <h2 id="安裝插件">
            <a href="#安裝插件" className="headerlink" title="安裝插件"></a>
            安裝插件
          </h2>
          <p>如果你沒有 pug 以及 stylus 的渲染器，請下載安裝：</p>
          <figure className="highlight powershell">
            <table>
              <tr>
                <td className="gutter">
                  <pre>
                    <span className="line">1</span>
                    <br />
                  </pre>
                </td>
                <td className="code">
                  <pre>
                    <span className="line">
                      npm install hexo
                      <span className="literal">-renderer</span>
                      <span className="literal">-pug</span> hexo
                      <span className="literal">-renderer</span>
                      <span className="literal">-stylus</span> -
                      <span className="literal">-save</span>
                    </span>
                    <br />
                  </pre>
                </td>
              </tr>
            </table>
          </figure>
          <h2 id="升級建議">
            <a href="#升級建議" className="headerlink" title="升級建議"></a>
            升級建議
          </h2>
          <div className="note blue icon flat">
            <i className="note-icon fas fa-train"></i>
            <p>
              升級完成後，請到 Github 的
              <a
                target="_blank"
                rel="noopener external nofollow noreferrer"
                href="https://github.com/jerryc127/hexo-theme-butterfly/releases"
              >
                Releases
              </a>
              界面 或者
              <a href="https://butterfly.js.org/posts/198a4240/">文檔七</a>
              查看新版的更新內容。
            </p>
            <p>
              裏面有標注
              <code>_config</code>
              文件的變更內容（如有），請根據實際情況更新你的配置內容。
            </p>
          </div>
          <p>
            為了減少升級主題後帶來的不便，請使用以下方法（
            <strong>建議，可以不做</strong>）。
          </p>
          <div className="tabs" id="update-suggestion">
            <ul className="nav-tabs">
              <li className="tab active">
                <button type="button" data-href="#update-suggestion-1">
                  _config.butterfly.yml
                </button>
              </li>
              <li className="tab">
                <button type="button" data-href="#update-suggestion-2">
                  butterfly.yml【已棄用】
                </button>
              </li>
            </ul>
            <div className="tab-contents">
              <div className="tab-item-content active" id="update-suggestion-1">
                <blockquote>
                  <p>此方法只支持 Hexo 5.0.0 以上版本，建議使用。</p>
                  <p>
                    如果已經在 <code>source/_data/</code> 創建了
                    <code>butterfly.yml</code>，請記得<strong>刪除</strong>
                    掉。
                  </p>
                </blockquote>
                <p>
                  在 hexo 的根目錄創建一個文件
                  <code>_config.butterfly.yml</code>，並把主題目錄的
                  <code>_config.yml</code> <strong>内容</strong>複製到
                  <code>_config.butterfly.yml</code> 去。
                </p>
                <blockquote>
                  <p>
                    <strong>注意：</strong> 不要把主題目錄的
                    <code>_config.yml</code> 刪掉
                  </p>
                </blockquote>
                <p>
                  以後只需要在
                  <code>_config.butterfly.yml</code>進行配置就行。
                </p>
                <p>
                  Hexo會自動<strong>合併</strong>主題中的
                  <code>_config.yml</code>和<code>_config.butterfly.yml</code>
                  裏的配置，如果存在同名配置，會使用
                  <code>_config.butterfly.yml</code>的配置，其優先度較高。
                </p>
                <p>
                  <img
                    src="/img/loading.gif"
                    data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-install-suggestion-1.png"
                    alt="image-20200805191531090"
                  />
                </p>
                <button
                  type="button"
                  className="tab-to-top"
                  aria-label="scroll to top"
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>
              <div className="tab-item-content" id="update-suggestion-2">
                <div className="note pink icon flat">
                  <i className="note-icon fas fa-bahai"></i>
                  <p>從 3.3.0 開始，這種方法不再支持</p>
                </div>
                <p>
                  <del>
                    為了減少升級主題後帶來的不便,
                    <code>Butterfly</code> 使用了
                    <a
                      target="_blank"
                      rel="noopener external nofollow noreferrer"
                      href="https://hexo.io/docs/data-files.html"
                    >
                      data files
                    </a>
                    特性。
                  </del>
                </p>
                <p>
                  <del>
                    推薦把<strong>主題</strong>默認的配置文件
                    <code>_config.yml</code>
                    複製到 Hexo 根目錄下的<code>source/_data/</code>
                    目錄下，然後將文件名改為
                    <code>butterfly.yml</code>（如果
                    <code>source/_data/</code>
                    的目錄不存在就創建一個）。
                  </del>
                </p>
                <div className="note warning flat">
                  <p>
                    <del>
                      注意，如果你創建了<code>butterfly.yml</code>,
                      它將會替換主題默認配置文件<code>_config.yml</code>
                      裏的配置項 (
                    </del>
                    不是合併而是替換<del>，3.1.0開始將會是合併)</del>
                  </p>
                  <p>
                    <del>
                      採用<code>butterfly.yml</code>
                      的目的是，因為升級主題的時候，有可能會覆蓋到配置文件，以至於每次更新的時候都需要重新配置文件。如果使用
                      <code>butterfly.yml</code>，就算主題目錄下的
                      <code>_config.yml</code>被覆蓋，主題只會去
                      <code>butterfly.yml</code>讀取配置。
                    </del>
                  </p>
                  <p>
                    <del>
                      由於主題在添加功能或者修復Bugs的情況下，可能會涉及到
                      <strong>配置文件</strong>
                      的修改。這時候，如果升級主題，需要把新增加的配置添加到
                      <code>butterfly.yml</code>
                      去，不然很大機會會出現報錯。（ 3.1.0
                      之後，應該不會出現這種情況）
                    </del>
                  </p>
                </div>
                <button
                  type="button"
                  className="tab-to-top"
                  aria-label="scroll to top"
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>
            </div>
          </div>
          <a
            className="btn-beautify button--animated block right larger"
            href="/posts/dc584b87/"
            title="📑 Butterfly 安裝文檔(二) 主題頁面"
          >
            <i className="far fa-hand-point-right"></i>
            <span>📑 Butterfly 安裝文檔(二) 主題頁面</span>
          </a>
        </article>
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
        <div className="post-reward">
          <div className="reward-button button--animated">
            <i className="fas fa-qrcode"></i> 打賞
          </div>
          <div className="reward-main">
            <ul className="reward-all">
              <li className="reward-item">
                <a
                  href="https://cdn.jsdelivr.net/gh/jerryc127/CDN/Photo/wechat.jpg"
                  rel="external nofollow noreferrer"
                  target="_blank"
                >
                  <img
                    className="post-qr-code-img"
                    src="/img/loading.gif"
                    data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/Photo/wechat.jpg"
                    alt="微信"
                  />
                </a>
                <div className="post-qr-code-desc">微信</div>
              </li>
              <li className="reward-item">
                <a
                  href="https://cdn.jsdelivr.net/gh/jerryc127/CDN/Photo/alipay.jpg"
                  rel="external nofollow noreferrer"
                  target="_blank"
                >
                  <img
                    className="post-qr-code-img"
                    src="/img/loading.gif"
                    data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/Photo/alipay.jpg"
                    alt="支付寶"
                  />
                </a>
                <div className="post-qr-code-desc">支付寶</div>
              </li>
              <li className="reward-item">
                <a
                  href="https://cdn.jsdelivr.net/gh/jerryc127/CDN/Photo/alipayhk.jpg"
                  rel="external nofollow noreferrer"
                  target="_blank"
                >
                  <img
                    className="post-qr-code-img"
                    src="/img/loading.gif"
                    data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/Photo/alipayhk.jpg"
                    alt="支付寶香港"
                  />
                </a>
                <div className="post-qr-code-desc">支付寶香港</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="ads-wrap">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-fb+5w+4e-db+86"
            data-ad-client="ca-pub-8919908724705274"
            data-ad-slot="5978969231"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
        <nav className="pagination-post" id="pagination">
          <div className="prev-post pull-left">
            <a href="/posts/dc584b87/">
              <img
                className="prev-cover"
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-docs-02-cover.png"
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
                src="/img/loading.gif"
                data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png"
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
        <div className="relatedPosts">
          <div className="headline">
            <i className="fas fa-thumbs-up fa-fw"></i> <span>相關推薦</span>
          </div>
          <div className="relatedPosts-list">
            <div>
              <a
                href="/posts/dc584b87/"
                title="Butterfly 安裝文檔(二) 主題頁面"
              >
                <img
                  className="cover"
                  src="/img/loading.gif"
                  data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-docs-02-cover.png"
                  alt="cover"
                />
                <div className="content is-center">
                  <div className="date">
                    <i className="far fa-calendar-alt fa-fw"></i> 2020-05-28
                  </div>
                  <div className="title">Butterfly 安裝文檔(二) 主題頁面</div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="/posts/98d20436/"
                title="Butterfly 安裝文檔(五) 主題問答"
              >
                <img
                  className="cover"
                  src="/img/loading.gif"
                  data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-doc-05-cover.png"
                  alt="cover"
                />
                <div className="content is-center">
                  <div className="date">
                    <i className="far fa-calendar-alt fa-fw"></i> 2020-05-28
                  </div>
                  <div className="title">Butterfly 安裝文檔(五) 主題問答</div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="/posts/507c070f/"
                title="Butterfly添加全局吸底Aplayer教程"
              >
                <img
                  className="cover"
                  src="/img/loading.gif"
                  data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-add-aplayer-cover.png"
                  alt="cover"
                />
                <div className="content is-center">
                  <div className="date">
                    <i className="far fa-calendar-alt fa-fw"></i> 2020-07-31
                  </div>
                  <div className="title">Butterfly添加全局吸底Aplayer教程</div>
                </div>
              </a>
            </div>
            <div>
              <a href="/posts/ea33ab97/" title="自定義側邊欄">
                <img
                  className="cover"
                  src="/img/loading.gif"
                  data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/aside-diy-cover.png"
                  alt="cover"
                />
                <div className="content is-center">
                  <div className="date">
                    <i className="far fa-calendar-alt fa-fw"></i> 2020-12-30
                  </div>
                  <div className="title">自定義側邊欄</div>
                </div>
              </a>
            </div>
            <div>
              <a href="/posts/b37b5fe3/" title="自定義代碼配色">
                <img
                  className="cover"
                  src="/img/loading.gif"
                  data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/CODE-COLOR-COVER.png"
                  alt="cover"
                />
                <div className="content is-center">
                  <div className="date">
                    <i className="far fa-calendar-alt fa-fw"></i> 2020-06-13
                  </div>
                  <div className="title">自定義代碼配色</div>
                </div>
              </a>
            </div>
            <div>
              <a href="/posts/4073eda/" title="Butterfly 安裝文檔(六) 進階教程">
                <img
                  className="cover"
                  src="/img/loading.gif"
                  data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-06-cover.png"
                  alt="cover"
                />
                <div className="content is-center">
                  <div className="date">
                    <i className="far fa-calendar-alt fa-fw"></i> 2020-05-28
                  </div>
                  <div className="title">Butterfly 安裝文檔(六) 進階教程</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="aside-content" id="aside-content">
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
            <a
              className="social-icon"
              href="/atom.xml"
              target="_blank"
              title="RSS"
            >
              <i className="fas fa-rss"></i>
            </a>
          </div>
        </div>
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
        <div className="card-widget card-docs card-categories">
          <div className="item-headline">
            <i className="fas fa-car-side"></i>
            <span>文檔目錄</span>
          </div>
          <div className="item-content">
            <ul className="card-category-list">
              <li className="card-category-list-item">
                <a className="card-category-list-link" href="/posts/21cfbf15/">
                  🚀 快速開始
                </a>
              </li>
              <li className="card-category-list-item">
                <a className="card-category-list-link" href="/posts/dc584b87/">
                  📑 主題頁面
                </a>
              </li>
              <li className="card-category-list-item">
                <a className="card-category-list-link" href="/posts/4aa8abbe/">
                  🛠 主題配置-1
                </a>
              </li>
              <li className="card-category-list-item">
                <a className="card-category-list-link" href="/posts/ceeb73f/">
                  ⚔️ 主題配置-2
                </a>
              </li>
              <li className="card-category-list-item">
                <a className="card-category-list-link" href="/posts/98d20436/">
                  ❓ 主題問答
                </a>
              </li>
              <li className="card-category-list-item">
                <a className="card-category-list-link" href="/posts/4073eda/">
                  ⚡️ 進階教程
                </a>
              </li>
              <li className="card-category-list-item">
                <a className="card-category-list-link" href="/posts/198a4240/">
                  ✨ 更新日誌
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sticky_layout">
          <div className="card-widget" id="card-toc">
            <div className="item-headline">
              <i className="fas fa-stream"></i>
              <span>目錄</span>
            </div>
            <div className="toc-content">
              <ol className="toc">
                <li className="toc-item toc-level-2">
                  <a className="toc-link" href="#%E5%AE%89%E8%A3%9D">
                    <span className="toc-number">1.</span>
                    <span className="toc-text">安裝</span>
                  </a>
                </li>
                <li className="toc-item toc-level-2">
                  <a
                    className="toc-link"
                    href="#%E6%87%89%E7%94%A8%E4%B8%BB%E9%A1%8C"
                  >
                    <span className="toc-number">2.</span>
                    <span className="toc-text">應用主題</span>
                  </a>
                </li>
                <li className="toc-item toc-level-2">
                  <a
                    className="toc-link"
                    href="#%E5%AE%89%E8%A3%9D%E6%8F%92%E4%BB%B6"
                  >
                    <span className="toc-number">3.</span>
                    <span className="toc-text">安裝插件</span>
                  </a>
                </li>
                <li className="toc-item toc-level-2">
                  <a
                    className="toc-link"
                    href="#%E5%8D%87%E7%B4%9A%E5%BB%BA%E8%AD%B0"
                  >
                    <span className="toc-number">4.</span>
                    <span className="toc-text">升級建議</span>
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="card-widget card-recent-post">
            <div className="item-headline">
              <i className="fas fa-history"></i>
              <span>最新文章</span>
            </div>
            <div className="aside-list">
              <div className="aside-list-item">
                <a
                  className="thumbnail"
                  href="/posts/7670b080/"
                  title="Butterfly 美化/優化/魔改 教程合集"
                >
                  <img
                    src="/img/loading.gif"
                    data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-diy-cover.png"
                    // onerror='this.onerror=null,this.src="/img/404.jpg"'
                    alt="Butterfly 美化/優化/魔改 教程合集"
                  />
                </a>
                <div className="content">
                  <a
                    className="title"
                    href="/posts/7670b080/"
                    title="Butterfly 美化/優化/魔改 教程合集"
                  >
                    Butterfly 美化/優化/魔改 教程合集
                  </a>
                  <time
                    // datetime="2021-01-02T10:11:22.000Z"
                    title="發表於 2021-01-02 18:11:22"
                  >
                    2021-01-02
                  </time>
                </div>
              </div>
              <div className="aside-list-item">
                <a
                  className="thumbnail"
                  href="/posts/ea33ab97/"
                  title="自定義側邊欄"
                >
                  <img
                    src="/img/loading.gif"
                    data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/aside-diy-cover.png"
                    // onerror='this.onerror=null,this.src="/img/404.jpg"'
                    alt="自定義側邊欄"
                  />
                </a>
                <div className="content">
                  <a
                    className="title"
                    href="/posts/ea33ab97/"
                    title="自定義側邊欄"
                  >
                    自定義側邊欄
                  </a>
                  <time
                    // datetime="2020-12-30T13:48:10.000Z"
                    title="發表於 2020-12-30 21:48:10"
                  >
                    2020-12-30
                  </time>
                </div>
              </div>
              <div className="aside-list-item">
                <a
                  className="thumbnail"
                  href="/posts/c9711c19/"
                  title="當設置 top_img 為 false 時"
                >
                  <img
                    src="/img/loading.gif"
                    data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/when-set-the-top-img-to-false.png"
                    // onerror='this.onerror=null,this.src="/img/404.jpg"'
                    alt="當設置 top_img 為 false 時"
                  />
                </a>
                <div className="content">
                  <a
                    className="title"
                    href="/posts/c9711c19/"
                    title="當設置 top_img 為 false 時"
                  >
                    當設置 top_img 為 false 時
                  </a>
                  <time
                    // datetime="2020-10-28T06:15:34.000Z"
                    title="發表於 2020-10-28 14:15:34"
                  >
                    2020-10-28
                  </time>
                </div>
              </div>
              <div className="aside-list-item">
                <a
                  className="thumbnail"
                  href="/posts/507c070f/"
                  title="Butterfly添加全局吸底Aplayer教程"
                >
                  <img
                    src="/img/loading.gif"
                    data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-add-aplayer-cover.png"
                    // onerror='this.onerror=null,this.src="/img/404.jpg"'
                    alt="Butterfly添加全局吸底Aplayer教程"
                  />
                </a>
                <div className="content">
                  <a
                    className="title"
                    href="/posts/507c070f/"
                    title="Butterfly添加全局吸底Aplayer教程"
                  >
                    Butterfly添加全局吸底Aplayer教程
                  </a>
                  <time
                    // datetime="2020-07-31T11:02:28.000Z"
                    title="發表於 2020-07-31 19:02:28"
                  >
                    2020-07-31
                  </time>
                </div>
              </div>
              <div className="aside-list-item">
                <a
                  className="thumbnail"
                  href="/posts/b37b5fe3/"
                  title="自定義代碼配色"
                >
                  <img
                    src="/img/loading.gif"
                    data-lazy-src="https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/CODE-COLOR-COVER.png"
                    // onerror='this.onerror=null,this.src="/img/404.jpg"'
                    alt="自定義代碼配色"
                  />
                </a>
                <div className="content">
                  <a
                    className="title"
                    href="/posts/b37b5fe3/"
                    title="自定義代碼配色"
                  >
                    自定義代碼配色
                  </a>
                  <time
                    // datetime="2020-06-13T12:41:59.000Z"
                    title="發表於 2020-06-13 20:41:59"
                  >
                    2020-06-13
                  </time>
                </div>
              </div>
            </div>
          </div>
          <div className="card-widget ads-wrap">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-8919908724705274"
              data-ad-slot="8108145410"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </div>
        </div>
      </div>
    </main>
  );
};

//
export default Index;
