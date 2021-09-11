import { actionTypes } from "./../actionTypes";

import { createStore, AnyAction, Store } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";

export const initState = {
  columnList: [],
  mainCategoriesList: [],
  mainArticleData: {}, //归档也列表数据
  mainArticleDetail: {}, // 文章详细的数据
};

// create your reducer
const reducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE REDUCE");
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
    default:
      return state;
  }
};

export default reducer;
