import PageAsideContent from "./../PageAsideContent";
import { connect } from "react-redux";
import { useEffect } from "react";

const Index = (props: any) => {
  useEffect(() => {
    let Waline = window.Waline;
    setTimeout(() => {
      Waline({
        el: "#waline",
        serverURL: "http://127.0.0.1:8360",
        meta: ["nick", "mail"],
        copyright: false,
      });
    }, 0);
  }, []);
  return <div id="waline"></div>;
};

export default connect((state) => state)(Index);
