import PageAsideContent from "./../PageAsideContent";
import { connect } from "react-redux";
import { useEffect } from "react";
import Config from "../../config";
let timer = null;
const Index = (props: any) => {
  let initWaline = () => {
    let initFn = () => {
      console.log("initFn");
      let Waline = window.Waline;
      if (Config.walineServerURL) {
        let walineDiv = document.getElementById("waline");
        if (Waline && walineDiv) {
          clearTimeout(timer);
          Waline({
            el: "#waline",
            serverURL: Config.walineServerURL,
            meta: ["nick", "mail"],
            copyright: false,
          });
        } else {
          timer = setTimeout(() => {
            initFn();
          }, 1000);
        }
      }
    };
    setTimeout(() => {
      initFn();
    }, 2000);
  };
  useEffect(() => {
    initWaline();
  }, []);
  return <div id="waline"></div>;
};

export default connect((state) => state)(Index);
