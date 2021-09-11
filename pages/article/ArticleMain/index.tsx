import React, { useEffect, useCallback, useState } from "react";
import PageAsideContent from "./../../../components/PageAsideContent";
import ArticleCopyright from "./../ArticleCopyright";
import ArticleTagShare from "./../ArticleTagShare";
import ArticlePostReward from "./../ArticlePostReward";
import AdsWrap from "./../AdsWrap";
import ArticlePagination from "./../ArticlePagination";
import ArticleRelatedPosts from "./../ArticleRelatedPosts";

const Index = ({ appStore }) => {
  let { article } = appStore;
  return (
    <main className="layout" id="content-inner">
      <div id="post">
        <article
          className="post-content"
          id="article-container"
          dangerouslySetInnerHTML={{ __html: article.content_rich }}
        ></article>
        <ArticleCopyright />
        <ArticleTagShare />
        <ArticlePostReward />
        <AdsWrap />
        <ArticlePagination />
        <ArticleRelatedPosts />
      </div>
      <PageAsideContent />
    </main>
  );
};

//
export default Index;
