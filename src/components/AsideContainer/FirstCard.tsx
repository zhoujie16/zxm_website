import { AppConfigType } from "@/types";
import { spmLog } from "@/utils";
import { ajax_one_queryOneLatestChannel } from "@/utils/apiTools";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const [oneChannel, setOneChannel] = useState<any>({});
  useEffect(() => {
    ajax_one_queryOneLatestChannel({}).then((res) => {
      // console.log("ajax_one_queryOneLatestChannel", res);
      setOneChannel(res);
    });
  }, []);
  return (
    <>
      <div className="card-widget card-info">
        <div className="is-center">
          <img
            style={{ width: "100%" }}
            src={oneChannel?.data?.img_url}
            alt="avatar"
          />
          {/* <div className="author-info__name">2023-03-20</div> */}
          <div className="author-info__description">
            {oneChannel?.data?.forward}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
