import React, { useEffect, useCallback, useState } from "react";
import PageAsideContent from "./../PageAsideContent";
import ArticleCopyright from "./../ArticleCopyright";
import ArticleTagShare from "./../ArticleTagShare";
import ArticlePostReward from "./../ArticlePostReward";
import AdsWrap from "./../AdsWrap";
import ArticlePagination from "./../ArticlePagination";
import ArticleRelatedPosts from "./../ArticleRelatedPosts";
import { connect } from "react-redux";

const Index = (props: any) => {
  let { mainArticleDetail } = props;
  let content_rich = mainArticleDetail.article.content_rich;
  return (
    <main className="layout" id="content-inner">
      <div id="post">
        <article
          className="post-content"
          id="article-container"
          dangerouslySetInnerHTML={{ __html: content_rich }}
        ></article>
        {/* <ArticleCopyright /> */}
        {/* <ArticleTagShare /> */}
        {/* <ArticlePostReward /> */}
        {/* <AdsWrap /> */}
        <ArticlePagination />
        <ArticleRelatedPosts />
      </div>
      <PageAsideContent />
    </main>
  );
};

//
export default connect((state) => state)(Index);
