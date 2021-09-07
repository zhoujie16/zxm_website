import React, { useEffect, useCallback, useState } from "react";
import PageNav from "./../PageNav";

class Index extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="w_page_header full_page">
        <PageNav />
        <div className="blog_name_center">111</div>
        <img
          className="w_page_header_bg"
          src="https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg"
        />
      </div>
    );
  }
}

// Demo页面
export default Index;
