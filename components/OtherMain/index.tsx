import React, { useEffect, useCallback, useState } from "react";
import PageAsideContent from "./../PageAsideContent";
import ArticlePostReward from "./../ArticlePostReward";
import ArticlePagination from "./../ArticlePagination";
import ArticleRelatedPosts from "./../ArticleRelatedPosts";
import { connect } from "react-redux";
import PajkUser from "./PajkUser";

const Index = (props: any) => {
  let { mainArticleDetail } = props;
  return (
    <main className="layout" id="content-inner">
      <div id="post">
        <article className="post-content" id="article-container">
          <PajkUser />
        </article>
        {/* <ArticleCopyright /> */}
        {/* <ArticleTagShare /> */}
        {/* <ArticlePostReward /> */}
        {/* <AdsWrap /> */}
        <hr />
        {/* <ArticlePagination /> */}
        {/* <ArticleRelatedPosts /> */}
        {/* <hr /> */}
        {/* <ArticleComment /> */}
      </div>
      <PageAsideContent />
    </main>
  );
};

//
export default connect((state) => state)(Index);
