import { useSelector } from "react-redux";
import NavigationBar from "../NavigationBar";
import { StateType } from "@/types";
import Typed from "typed.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Image } from "antd";

export default function () {
  const state = useSelector((state: StateType) => state);
  const title = state.pageProps?.appConfig?.w_website_name || "";
  // 初始化随机语录
  let initSoul = async () => {
    const res: any = await axios.get(`/api/getSoulText`);
    let sText = res?.data || false;
    if (!sText) {
      return;
    }
    let typedItem = new Typed("#subtitle", {
      strings: [sText.title],
      startDelay: 300,
      backDelay: 5000,
      typeSpeed: 150,
      loop: !0,
      backSpeed: 50,
      onLastStringBackspaced: async () => {
        typedItem.stop();
        await new Promise((r) => setTimeout(r, 2000));
        typedItem.destroy();
        await new Promise((r) => setTimeout(r, 400));
        initSoul();
      },
    });
  };
  useEffect(() => {
    initSoul();
  }, []);

  return (
    <>
      <header
        className="full_page"
        id="page-header"
        style={{
          backgroundColor: `#666`,
        }}
      >
        <div className="full_page_bg">
          <img className="full_page_bg_img" src={state.backgroundImage} />
        </div>
        <NavigationBar />
        <div id="site-info">
          <div id="site-avatar">
            <Avatar
              size={100}
              src="https://s2.loli.net/2023/05/25/euxWDnAYaGTIBfO.jpg"
            />
          </div>
          <h1 id="site-title">{title}</h1>
          <div className="site-span-hr"></div>
          <div id="site-subtitle">
            <span id="subtitle"></span>
          </div>
        </div>
        <div id="scroll-down">
          <i className="fas fa-angle-down scroll-down-effects"></i>
        </div>
      </header>
    </>
  );
}
