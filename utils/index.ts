import { ajax_column_query, ajax_column_queryList } from "./../pages/api";

export const getPageCommonData = async (store: any) => {
  let res = await ajax_column_query();
  let mainCategoriesList = await ajax_column_queryList();
  store.dispatch({ type: "Get_Column_List", payload: res });
  store.dispatch({
    type: "Get_mainCategoriesList",
    payload: mainCategoriesList,
  });
};
