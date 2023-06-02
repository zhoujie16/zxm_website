import { useSelector } from "react-redux";
import NavigationBar from "../NavigationBar";
import { StateType } from "@/types";

export default function () {
  const state = useSelector((state: StateType) => state);
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
          <h1 id="site-title">关于</h1>
        </div>
      </header>
    </>
  );
}
