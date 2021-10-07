import { useEffect } from "react";
import MsgBoardPanel from "./../MsgBoardPanel";

const Index = () => {
  useEffect(() => {}, []);
  return (
    <div id="post-comment">
      <div style={{ height: "1rem" }}></div>
      <div className="comment-head">
        <div className="comment-headline">
          <i className="fas fa-comments fa-fw"></i> <span>评论</span>
        </div>
      </div>
      <div className="comment-wrap">
        <MsgBoardPanel />
      </div>
    </div>
  );
};
export default Index;
