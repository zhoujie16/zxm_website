import { ajax_column_queryWithClient } from "./../api";

export const getPageCommonData = async (store: any) => {
  let mainCategoriesList = await ajax_column_queryWithClient();
  store.dispatch({
    type: "Get_mainCategoriesList",
    payload: mainCategoriesList,
  });
};

// 菜单转为树形结构
export function getCategoriesTreeList(meunList: any) {
  const result_query = meunList.map((x: any) => {
    x.label = x.title;
    x.value = x.id;
    x.text = x.title;
    return x;
  });

  const _menus_f: any = {
    id: 0,
    title: "全部分类",
    label: "全部分类",
    text: "全部分类",
    value: 0,
  };

  const tt = (menu_item: any) => {
    const children = result_query.filter(
      (x: any) => x.parent_id === menu_item.id
    );

    if (children.length > 0) {
      menu_item.children = children;
      children.forEach((x: any) => {
        tt(x);
      });
    }
  };

  tt(_menus_f);
  return _menus_f.children;
}
