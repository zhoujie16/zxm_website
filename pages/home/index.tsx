import type { NextPage } from "next";
import BaseHead from "./../../components/BaseHead";
import PageHeader from "./PageHeader";
import PageMain from "./PageMain";
import PageFooter from "././../../components/PageFooter";
import { ajax_column_query } from "./../api";
import { Get_Column_List } from "./../../store/actions";
import { wrapper, State } from "./../../store";
import { connect } from "react-redux";

const Home: NextPage = (props) => {
  console.log("props", props);
  return (
    <div className="z_page_wrap">
      <BaseHead />
      <div className="page" id="body-wrap">
        {/* <PageHeader appStore={appStore} /> */}
        <PageMain />
        <PageFooter />
      </div>
    </div>
  );
};

// export default Home;

// export async function getServerSideProps(context: any) {
//   let a = await Get_Column_List();
//   console.log(context);
//   let column = await ajax_column_query();
//   return {
//     props: {
//       appStore: {
//         column,
//       },
//     },
//   };
// }

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }) => {
      console.log(
        "2. Page.getServerSideProps uses the store to dispatch things"
      );
      store.dispatch({ type: "TICK", payload: "was set in other page" });
    }
);

export default connect((state: State) => state)(Home);
