import React, { useEffect, useCallback, useState } from "react";
import ArticleContent from "./../ArticleContent";
import PageMainAside from "./../../../components/PageMainAside";

const Index = () => {
  return (
    <div className="w_article_main">
      <div className="page_main_inner">
        <ArticleContent />
        <PageMainAside />
      </div>
    </div>
  );
};

//
export default Index;
