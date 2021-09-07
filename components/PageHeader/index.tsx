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
      </div>
    );
  }
}

// Demo页面
export default Index;
