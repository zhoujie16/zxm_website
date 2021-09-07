import React, { useEffect, useCallback, useState } from "react";

class Index extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="w_page_footer">
        <img
          className="w_page_footer_bg"
          src="https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg"
        />
        <div className="wpf_copyright">©2019 - 2021 By Jerry</div>
      </div>
    );
  }
}

// Demo页面
export default Index;
