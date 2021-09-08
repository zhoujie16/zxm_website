import React, { useEffect, useCallback, useState } from "react";
import PageNavItem from "./PageNavItem";

const Index = () => {
  // type: btn nav link
  let navList = [
    {
      name: "搜索",
      icon: "fas fa-search fa-fw",
      type: "btn",
    },
    {
      name: "首页",
      icon: "fa-fw fas fa-home",
      type: "link",
    },
    {
      name: "目录",
      icon: "fa-fw fas fa-compass",
      type: "drop",
      children: [
        {
          name: "测试测试",
          icon: "fa-fw fas fa-home",
          type: "link",
        },
        {
          name: "测试",
          icon: "fa-fw fas fa-home",
          type: "link",
        },
        {
          name: "测试",
          icon: "fa-fw fas fa-home",
          type: "link",
        },
      ],
    },
    {
      name: "文档",
      icon: "fa-fw fas fa-book",
      type: "drop",
      children: [
        {
          name: "测试",
          icon: "fa-fw fas fa-home",
          type: "link",
        },
        {
          name: "测试",
          icon: "fa-fw fas fa-home",
          type: "link",
        },
        {
          name: "测试",
          icon: "fa-fw fas fa-home",
          type: "link",
        },
      ],
    },
    {
      name: "娱乐",
      icon: "fa-fw fa fa-heartbeat",
      type: "drop",
      children: [
        {
          name: "测试",
          icon: "fa-fw fas fa-home",
          type: "link",
        },
        {
          name: "测试",
          icon: "fa-fw fas fa-home",
          type: "link",
        },
        {
          name: "测试",
          icon: "fa-fw fas fa-home",
          type: "link",
        },
      ],
    },
    {
      name: "留言板",
      icon: "fa-fw fas fa-comment-dots",
      type: "link",
    },
  ];
  return (
    <div className="w_nav_wrap">
      <div className="nav_inner">
        <div className="nav_web_name">nav_web_name</div>
        <div className="nav_menu">
          {navList.map((x) => (
            <PageNavItem itemData={x} key={x.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
//
export default Index;
