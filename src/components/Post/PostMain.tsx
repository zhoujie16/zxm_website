import dayjs from "dayjs";
import PostCopyright from "./PostCopyright";
import PostVideo from "./PostVideo";
import PostReward from "./PostReward";
import RelatedPosts from "./RelatedPosts";
import PostPagination from "./PostPagination";
import Comments from "../Comments";
import { useEffect, useState } from "react";
import { ajax_blog_queryPostRelated } from "@/utils/apiTools";

/**
 * 文章页 主体
 */
export default function ({ postDetail }: any) {
  const post = postDetail.article;
  const [playInfo, setPlayInfo] = useState<any>({});
  const [postContent, setPostContent] = useState("");
  const [postRelated, setPostRelated] = useState<any>({});

  useEffect(() => {
    console.log("post", post.content_rich);
    setPostContent(post.content_rich);
    // 视频
    let { title, wid, wkey } = post;
    try {
      if (wkey == "LG_COURSE_LESSON") {
        let other1 = JSON.parse(post.other1);
        let _playInfo = other1._playInfo;
        let videoMedia = other1.videoMedia;
        const playInfo = { ..._playInfo, ...videoMedia, title, wid };
        setPlayInfo(playInfo);
      }
      if (wkey == "ONE") {
        const domString = post.content_rich;
        const parser = new DOMParser();
        const doc = parser.parseFromString(domString, "text/html");
        const videoBox: any = doc.querySelector(".one-video-box");
        const coverUrl = videoBox.getAttribute("data-cover-url");
        const url = videoBox.getAttribute("data-url");
        const type = videoBox.getAttribute("data-type");
        if (type == "VIDEO") {
          const playInfo = { coverImgURL: coverUrl, playURL: url, title, wid };
          setPlayInfo(playInfo);
        }
      }
    } catch (error) {
      console.log(error);
    }

    // 查询 相关推荐
    ajax_blog_queryPostRelated({
      id: post._id,
      category_id: post.category_id,
    }).then((res) => {
      setPostRelated(res?.data?.data);
    });
  }, []);

  return (
    <>
      <div id="post">
        <article className="post-content" id="article-container">
          {playInfo.playURL ? <PostVideo playInfo={playInfo} /> : <></>}
          <div
            className="post-content-inner"
            dangerouslySetInnerHTML={{
              __html: postContent,
            }}
          ></div>
        </article>
        <PostCopyright post={post} />
        {/* <div className="tag_share">
          <div className="post-meta__tag-list">
            <a className="post-meta__tags" href="/tags/%E6%95%99%E7%A8%8B/">
              教程
            </a>
            <a className="post-meta__tags" href="/tags/Hexo/">
              Hexo
            </a>
            <a className="post-meta__tags" href="/tags/%E4%B8%BB%E9%A1%8C/">
              主題
            </a>
            <a className="post-meta__tags" href="/tags/butterfly/">
              butterfly
            </a>
          </div>
        </div> */}
        {/* <PostReward /> */}
        <PostPagination postRelated={postRelated} />
        <RelatedPosts postRelated={postRelated} />
        <hr></hr>
        <Comments article={post} />
      </div>
    </>
  );
}
