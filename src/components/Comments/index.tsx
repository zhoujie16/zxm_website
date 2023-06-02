import { useEffect, useState } from "react";
import CommentsInput from "./CommentsInput";
import CommentsItem from "./CommentsItem";
import { ArticleType } from "@/types";
import { ajax_comment_add, ajax_comment_queryByClient } from "@/utils/apiTools";

const Index = ({ article }: { article: ArticleType }) => {
  const commemtsSubmit = async (content: string) => {
    // console.log("content", content);
    const res: any = await ajax_comment_add({
      link: article._id,
      content: content,
      nick_name: "匿名",
    });
    init();
    return !!res._id;
  };

  const [commentsList, setCommentsList] = useState([]);

  const init = async () => {
    const commentsResult: any = await ajax_comment_queryByClient({
      link: article._id,
    });
    setCommentsList(commentsResult?.data?.data || []);
  };
  useEffect(() => {
    setTimeout(() => {
      init();
    }, 500);
  }, [article]);
  return (
    <>
      <div className="comments_wrap">
        <div className="comments_title">评论</div>
        <CommentsInput onSubmit={commemtsSubmit} />
        {commentsList.length ? (
          <>
            <div className="comments_title">全部评论</div>
            {commentsList.map((x: any) => (
              <CommentsItem commentsItem={x} key={x._id} />
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Index;
