import React, { useEffect, useCallback, useState } from "react";

const Index = () => {
  let categoryList = [
    {
      name: "Demo",
      url: "",
      count: 10,
    },
    {
      name: "Demo",
      url: "",
      count: 10,
    },
    {
      name: "Demo",
      url: "",
      count: 10,
    },
    {
      name: "Demo",
      url: "",
      count: 10,
    },
  ];
  return (
    <div className="w_article_content">
      <div className="w_article_content_inner">
        <div className="wac_content wac_content_category">
          <div className="category_list">
            {categoryList.map((x) => (
              <div className="category_list_item">
                <a
                  className="category_list_link"
                  href="/categories/"
                  data-pjax-state=""
                >
                  {x.name}
                </a>
                <span className="category_list_count"> （{x.count}）</span>
              </div>
            ))}
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Index;
