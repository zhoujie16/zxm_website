import React, { useEffect, useCallback, useState } from "react";

const Index = () => {
  return (
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
  );
};

export default Index;
