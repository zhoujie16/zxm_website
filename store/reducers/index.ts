import { actionTypes } from "./../actionTypes";

import { createStore, AnyAction, Store } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";

export const initState = {
  columnList: [],
  mainCategoriesList: [],
  mainArticleData: {}, //归档也列表数据
  mainArticleDetail: {}, // 文章详细的数据
  pagePaginationData: {
    totalCount: 0,
    pageSize: 0,
    curPage: 0,
    baseHref: "/home/page/",
  }, // 分页数据
  pageCategoriesData: {
    parent_id: 0,
  }, // 页面分类数据
};

// create your reducer
const reducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "Get_Column_List":
      return {
        ...state,
        columnList: action.payload,
      };
    case "Get_mainCategoriesList":
      return {
        ...state,
        mainCategoriesList: action.payload,
      };
    case "Get_mainArticleData":
      return {
        ...state,
        mainArticleData: action.payload,
      };
    case "Get_mainArticleDetail":
      return {
        ...state,
        mainArticleDetail: action.payload,
      };
    case "Set_pagePaginationData":
      return {
        ...state,
        pagePaginationData: action.payload,
      };
    case "Set_pageCategoriesData":
      return {
        ...state,
        pageCategoriesData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
