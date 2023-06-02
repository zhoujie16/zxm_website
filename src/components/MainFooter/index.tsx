import { StateType } from "@/types";
import { useSelector } from "react-redux";

const Index = () => {
  const state = useSelector((state: StateType) => state);
  return (
    <>
      <footer
        id="footer"
        style={{
          backgroundImage: `url('${state.backgroundImage}')`,
        }}
      >
        <div id="footer-wrap">
          <div className="copyright">©2016 - 2023 By 周小米</div>
          <div className="framework-info">
            <img
              alt="img"
              className="entered loaded"
              src="https://cdn.jsdelivr.net/gh/Daibi-mua/jsdelivr@1.3/icp.png"
              data-ll-status="loaded"
              style={{ marginRight: "5px" }}
            />
            <a
              target="_blank"
              rel="noopener external nofollow noreferrer"
              href="https://beian.miit.gov.cn/"
            >
              皖ICP备19002262号-2
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
