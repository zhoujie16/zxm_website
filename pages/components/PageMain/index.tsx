import React, { useEffect, useCallback, useState } from "react";
import CardWidgeWebInfo from "./../CardWidgeWebInfo";
import CardWidgeAnnouncement from "./../CardWidgeAnnouncement";
import RecentPostItem from "./../RecentPostItem";

class Index extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="w_page_main">
        <div className="page_main_inner">
          <div className="recent_posts">
            <RecentPostItem />
            <RecentPostItem />
            <RecentPostItem />
            <RecentPostItem />
          </div>
          <div className="aside_content">
            <CardWidgeWebInfo />
            <CardWidgeAnnouncement />
          </div>
        </div>
      </div>
    );
  }
}

// Demo页面
export default Index;
