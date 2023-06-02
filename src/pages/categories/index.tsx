import AsideContainer from "@/components/AsideContainer";
import AppContainer from "@/components/AppContainer";
import PostBg from "@/components/Post/PostBg";
import CategoriesContent from "@/components/Categories/CategoriesContent";
import CategoriesHeader from "@/components/Categories/CategoriesHeader";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { record_add } from "@/utils/apiTools";
import { spmLog } from "@/utils";

export default function Home(props: any) {
  const state = useSelector((state: any) => state);
  useEffect(() => {
    console.log({ state, props });
  }, []);
  useEffect(() => {
    record_add("zxm_blog.categories_page.pv");
    spmLog("zxm_blog.categories_page.enter");
  }, []);
  return (
    <>
      <AppContainer>
        <div className="page" id="body-wrap">
          <CategoriesHeader />
          <main className="layout" id="content-inner">
            <CategoriesContent />
            <AsideContainer />
          </main>
        </div>
      </AppContainer>
    </>
  );
}
