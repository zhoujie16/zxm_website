import React, { useEffect, useCallback, useState } from "react";
import PageMainAside from "./../PageMainAside";
import RecentPostList from "./../RecentPostList";
class Index extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="w_page_main">
        <div className="page_main_inner">
          <RecentPostList />
          <PageMainAside />
        </div>
      </div>
    );
  }
}

// Demo页面
export default Index;
