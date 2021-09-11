import React, { useEffect, useCallback, useState } from "react";
import PageNav from "./../../../components/PageNav";

const Index = ({ appStore }) => {
  return (
    <header
      className="full_page"
      id="page-header"
      style={{
        backgroundImage:
          "url(https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg)",
      }}
    >
      <PageNav appStore={appStore} />
      <div id="site-info">
        <h1 id="site-title">Butterfly</h1>
        <div id="site-subtitle">
          <span id="subtitle"></span>
        </div>
        <div id="site_social_icons">
          <a
            className="social-icon"
            href="mailto:i@immyw.com"
            rel="external nofollow noreferrer"
            target="_blank"
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            className="social-icon"
            href="/atom.xml"
            target="_blank"
            title="RSS"
          >
            <i className="fas fa-rss"></i>
          </a>
        </div>
      </div>
      <div id="scroll-down">
        <i className="fas fa-angle-down scroll-down-effects"></i>
      </div>
    </header>
  );
};
export default Index;
