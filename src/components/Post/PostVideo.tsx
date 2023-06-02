import { spmLog } from "@/utils";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { useEffect } from "react";

const Index = (props: any) => {
  let coverImgURL = "";
  let playURL = "";
  let title = "";
  let fileId = "plyr-play-" + Math.random().toString(36).substr(2);

  try {
    let { playInfo } = props;
    title = playInfo.title;
    coverImgURL = playInfo.coverImgURL;
    playURL = playInfo.playURL;
    fileId = `plyr_play_${playInfo.wid}`;
  } catch (error) {}
  useEffect(() => {
    let plryItem = new Plyr(`#${fileId}`, {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "fullscreen",
        "settings",
      ],
      settings: ["captions", "quality", "speed", "loop"],
      i18n: {
        speed: "速度",
        normal: "正常",
      },
    });
    plryItem.on("play", (event) => {
      spmLog("zxm_blog.post.video_on_play", {
        title,
      });
    });
  }, []);
  return (
    <div className="post_video">
      <video className="plry-play" poster={coverImgURL} id={fileId}>
        <source src={playURL} type="video/mp4" />
      </video>
      <hr></hr>
    </div>
  );
};
export default Index;
