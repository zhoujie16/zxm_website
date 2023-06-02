import { useEffect, useState } from "react";
import MainContainer from "../MainContainer";
import MainFooter from "../MainFooter";
import UA from "ua-device";
import AsideContainer from "../AsideContainer";
import { scrollFn } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, PagePropsType, StateType } from "./../../types";
import axios from "axios";
import { record_add } from "@/utils/apiTools";

type IProps = {
  children: any;
  pageProps?: PagePropsType | any;
};

const Index = ({ children, pageProps = {} }: IProps) => {
  const dispatch = useDispatch();
  const state: StateType = useSelector((state: StateType) => state);
  // 处理页面滚动
  useEffect(() => {
    setTimeout(() => {
      if ((window as any).scrollFn) {
        return;
      }
      (window as any).scrollFn = true;
      scrollFn();
    }, 1500);
  }, []);
  // 处理 pageProps
  useEffect(() => {
    // console.log("pageProps", pageProps);
    dispatch({
      type: ActionTypes.Update_PageProps,
      payload: pageProps,
    });
  }, []);
  useEffect(() => {
    // console.log("state 数据发生改变", state);
  }, [state]);

  /**
   * 背景图逻辑
   */
  useEffect(() => {
    axios.get("/api/getBingPictures").then(({ data }) => {
      dispatch({
        type: ActionTypes.Update_BackgroundImage,
        payload:
          data ||
          "https://file.crazywong.com/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg",
      });
    });
  }, []);

  useEffect(() => {
    record_add("zxm_blog.all_page.pv");
  }, []);
  return (
    <>
      <div className="page" id="body-wrap">
        {children}
      </div>
      <MainFooter />
    </>
  );
};

export default Index;
