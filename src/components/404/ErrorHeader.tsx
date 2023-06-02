import { useSelector } from "react-redux";
import NavigationBar from "../NavigationBar";
import { StateType } from "@/types";

export default function () {
  const state = useSelector((state: StateType) => state);
  return (
    <>
      <header
        className="not-top-img"
        id="page-header"
        style={{
          backgroundColor: `#666`,
          backgroundImage: `url('${state.backgroundImage}')`,
        }}
      >
        <NavigationBar />
      </header>
    </>
  );
}
