// store.ts

import { createStore, AnyAction, Store } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import reducer from "./reducers";

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store>(makeStore, { debug: false });
