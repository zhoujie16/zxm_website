import React, { useEffect, useCallback, useState } from "react";
import PageNav from "./../../../components/PageNav";

const Index = () => {
  return (
    <div className="w_article_header">
      <PageNav />
      <div className="w_article_header_inner">
        <div className="w_article_title">分类</div>
        <div className="w_article_meta"></div>
      </div>
    </div>
  );
};

export default Index;
