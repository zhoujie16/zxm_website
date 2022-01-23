import React, { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";
import PageNav from "../PageNav";
import Typed from "typed.js";
import { ajax_getSoulText } from "./../../api/index";
import { scrollToDest, getScript } from "./../../utils";

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

  // 初始化随机语录
  let initSoul = async () => {
    let sText: any = await ajax_getSoulText({});
    if (!sText) {
      return;
    }
    let typedItem = new Typed("#subtitle", {
      strings: [sText.title],
      startDelay: 300,
      typeSpeed: 150,
      loop: !0,
      backSpeed: 50,
      onLastStringBackspaced: async () => {
        typedItem.stop();
        await new Promise((r) => setTimeout(r, 3000));
        typedItem.destroy();
        await new Promise((r) => setTimeout(r, 400));
        initSoul();
      },
    });
  };
  useEffect(() => {
    initSoul();
  });
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
