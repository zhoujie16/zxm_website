import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { useEffect } from "react";
import Config from "./../../config";

const Index = (props) => {
  let coverImgURL = "";
  let playURL = "";
  let title = "";
  let wid = "";
  let fileId = "plyr-play-" + Math.random().toString(36).substr(2);

  try {
    let { playInfo } = props; 
    title = playInfo.title;
    wid = playInfo.wid;
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
      // console.log("play");
      try {
        let pathname = window.location.pathname;
        let [x, b] = pathname.split("/");
        b == "" ? (b = "home") : "";
        window.spm(`${Config.blogCode}.${b}.video_on_play`, {
          title,
          wid,
        });
      } catch (error) {
        console.log(error);
      }
    });
  });
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
