import { useEffect } from "react";

const Index = () => {
  useEffect(()=>{

  },[])
  return (
    <div id="post-comment">
      <div className="comment-head">
        <div className="comment-headline">
          <i className="fas fa-comments fa-fw"></i> <span>評論</span>
        </div>
      </div>
      <div className="comment-wrap">
        <div>
          <div id="twikoo-wrap"></div>
        </div>
      </div>
    </div>
  );
};
export default Index;
