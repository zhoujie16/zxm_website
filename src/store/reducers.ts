import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { ActionTypes } from "@/types";

export const initState = {
  test: "test",
  pageProps: {},
  backgroundImage: "",
};

const reducer = (state = initState, action: AnyAction) => {
  // console.log(action.type);
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "update_test": {
      return { ...state, test: "update_test" };
    }
    case ActionTypes.Update_PageProps: {
      return { ...state, pageProps: action.payload };
    }
    case ActionTypes.Update_BackgroundImage: {
      return { ...state, backgroundImage: action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
