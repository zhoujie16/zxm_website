import React, { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";
import PageNav from "./../PageNav";
import moment from "moment";

const Index = (props: any) => {
  let mainArticleDetail: any = { title: "", release_time: 0 };
  let title = "";
  let time = "";
  try {
    mainArticleDetail = props.mainArticleDetail;
    title = mainArticleDetail.title;
    time = moment(Number(mainArticleDetail.release_time)).format("YYYY-MM-DD");
  } catch (error) {
    console.log(error);
  }
  return (
    <header
      className="post-bg"
      id="page-header"
      style={{
        backgroundImage:
          "url(https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png)",
      }}
    >
      <PageNav />
      <div id="post-info">
        <h1 className="post-title">
          {title}
          {/* <a
            className="post-edit-link"
            href="https://github.com/jerryc127/butterfly.js.org/edit/main/source/_posts/Butterfly-安裝文檔-一-快速開始.md"
            rel="external nofollow noreferrer"
            title="編輯"
            target="_blank"
          >
            <i className="fas fa-pencil-alt"></i>
          </a> */}
        </h1>
        <div id="post-meta">
          <div className="meta-firstline">
            <span className="post-meta-date">
              <i className="fa-fw post-meta-icon far fa-calendar-alt"></i>
              <span className="post-meta-label">发表于</span>
              <time
              // datetime="2020-05-28T14:31:46.000Z"
              // title="undefined 2020-05-28 22:31:46"
              >
                {time}
              </time>
            </span>
            {/* <span className="post-meta-categories">
              <span className="post-meta-separator">|</span>
              <i className="fas fa-inbox fa-fw post-meta-icon"></i>
              <a
                className="post-meta-categories"
                href="/categories/Docs%E6%96%87%E6%AA%94/"
              >
                Docs文檔
              </a>
            </span> */}
          </div>
          {/* <div className="meta-secondline">
            <span className="post-meta-separator">|</span>
            <span className="post-meta-wordcount">
              <i className="far fa-file-word fa-fw post-meta-icon"></i>
              <span className="post-meta-label">字數總計:</span>
              <span className="word-count">983</span>
              <span className="post-meta-separator">|</span>
              <i className="far fa-clock fa-fw post-meta-icon"></i>
              <span className="post-meta-label">閱讀時長:</span>
              <span>3分鐘</span>
            </span>
            <span className="post-meta-separator">|</span>
            <span
              className="post-meta-pv-cv"
              data-flag-title="Butterfly 安裝文檔(一) 快速開始"
            >
              <i className="far fa-eye fa-fw post-meta-icon"></i>
              <span className="post-meta-label">閱讀量:</span>
              <span id="busuanzi_value_page_pv"></span>
            </span>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default connect((state) => state)(Index);
