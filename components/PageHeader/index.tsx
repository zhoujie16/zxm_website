import React, { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";
import PageNav from "../PageNav";
import { scrollToDest } from "./../../utils";

const Index = (props) => {
  const scrollDownInIndex = () => {
    scrollToDest(document.getElementById("content-inner").offsetTop, 300);
  };
  let w_website_name = "";
  let w_website_bg = "";
  try {
    w_website_name = props.pageConfigData.w_website_name;
    w_website_bg = props.pageConfigData.w_website_bg;
  } catch (error) {
    console.log(error);
  }
  return (
    <header
      className="full_page"
      id="page-header"
      style={{
        backgroundImage: `url(${w_website_bg})`,
      }}
    >
      <PageNav />
      <div id="site-info">
        <h1 id="site-title">{w_website_name}</h1>
        <div id="site-subtitle">
          <span id="subtitle"></span>
        </div>
        {/* <div id="site_social_icons">
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
        </div> */}
      </div>
      <div id="scroll-down" onClick={scrollDownInIndex}>
        <i className="fas fa-angle-down scroll-down-effects"></i>
      </div>
    </header>
  );
};

export default connect((state) => state)(Index);
