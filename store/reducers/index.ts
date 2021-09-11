import { actionTypes } from "./../actionTypes";

import { createStore, AnyAction, Store } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";

export const initState = {
  columnList: [],
  mainCategoriesList: [],
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
    default:
      return state;
  }
};

export default reducer;
