import { wrapper } from "../store";
import { getPageCommonData } from "../utils";
import { ajax_article_query } from "./api";
import Home from "./home";

const Index = () => {
  return <Home />;
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }): any => {
      let callback = async () => {
        await getPageCommonData(store);
        let mainArticleData = await ajax_article_query({});
        store.dispatch({
          type: "Get_mainArticleData",
          payload: mainArticleData,
        });
      };
      return callback();
    }
);
