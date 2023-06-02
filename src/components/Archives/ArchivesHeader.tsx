import { useEffect } from "react";
import NavigationBar from "../NavigationBar";
import { CategoriesListItemType, StateType } from "@/types";
import { useSelector } from "react-redux";

export default function ({ category_id = "" }: { category_id: string }) {
  const state = useSelector((state: StateType) => state);
  const allColumn: CategoriesListItemType[] = state.pageProps?.allColumn || [];
  const curItem: CategoriesListItemType | any = allColumn.find(
    (x: CategoriesListItemType) => x.category_id == category_id
  );
  return (
    <>
      <header
        className="not-home-page"
        id="page-header"
        style={{
          backgroundColor: `#666`,
          backgroundImage: `url('${state.backgroundImage}')`,
        }}
      >
        <NavigationBar />
        <div id="page-site-info">
          <h1 id="site-title">{curItem?.title}</h1>
        </div>
      </header>
    </>
  );
}
