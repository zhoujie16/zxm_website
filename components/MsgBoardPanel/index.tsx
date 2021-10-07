import PageAsideContent from "./../PageAsideContent";
import { connect } from "react-redux";
import { useEffect } from "react";
import Config from "../../config";

const Index = (props: any) => {
  useEffect(() => {
    let Waline = window.Waline;
    setTimeout(() => {
      Waline({
        el: "#waline",
        serverURL: Config.walineServerURL,
        meta: ["nick", "mail"],
        copyright: false,
      });
    }, 500);
  }, []);
  return <div id="waline"></div>;
};

export default connect((state) => state)(Index);
