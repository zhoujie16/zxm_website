import React, { useEffect, useCallback, useState } from "react";
import PageAsideContent from "./../PageAsideContent";
import ArticlePostReward from "./../ArticlePostReward";
import ArticlePagination from "./../ArticlePagination";
import ArticleRelatedPosts from "./../ArticleRelatedPosts";
import { connect } from "react-redux";
import ArticleComment from "../ArticleComment";
import ArticleCopyright from "../ArticleCopyright";
import ArticleMainVideo from "./ArticleMainVideo";

const Index = (props: any) => {
  let { mainArticleDetail } = props;
  let content_rich = mainArticleDetail.article.content_rich;
  let playInfo = {};
  try {
    let { title, wid } = mainArticleDetail.article;
    let other1 = JSON.parse(mainArticleDetail.article.other1);
    let _playInfo = other1._playInfo;
    let videoMedia = other1.videoMedia;
    playInfo = { ..._playInfo, ...videoMedia, title, wid };
    // console.log("mainArticleDetail.article", playInfo);
  } catch (error) {}

  return (
    <main className="layout" id="content-inner">
      <div id="post">
        {playInfo.playURL ? <ArticleMainVideo playInfo={playInfo} /> : <></>}

        <article
          className="post-content"
          id="article-container"
          dangerouslySetInnerHTML={{ __html: content_rich }}
        ></article>
        <ArticleCopyright />
        {/* <ArticleTagShare /> */}
        <ArticlePostReward />
        {/* <AdsWrap /> */}
        <hr />
        <ArticlePagination />
        <ArticleRelatedPosts />
        <hr />
        <ArticleComment />
      </div>
      <PageAsideContent />
    </main>
  );
};

//
export default connect((state) => state)(Index);
