import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { ajax_task_queryAllUserState } from "./../../../api/index";

const Index = (props) => {
  let [userList, setUserList] = useState([]);
  useEffect(() => {
    ajax_task_queryAllUserState({}).then((res: any) => {
      setUserList(
        res.sort(function (a, b) {
          return a.type.length - b.type.length;
        })
      );
    });
  }, []);
  let last_time = "";
  try {
    last_time = moment(userList[0].updated_at).format("YYYY-MM-DD HH:mm:ss");
  } catch (error) {}
  return (
    <>
      {userList.length ? (
        <div>
          <div>最后更新时间: {last_time}</div>
          {userList.map((item) => {
            let userActiveInfo = JSON.parse(item.userActiveInfo);
            // console.log(item);
            return (
              <div>
                <hr />
                <div style={{ color: "#49b1f5", fontWeight: "bold" }}>
                  {item.type === "cow-game" ? "农场养牛" : ""}
                  {item.type === "STEPS_ACTIVIT" ? "步数活动" : ""} -{" "}
                  {item.mobile}
                </div>
                {item.tk ? (
                  ""
                ) : (
                  <div style={{ color: "red" }}>账号登录信息失效</div>
                )}

                {item.type === "cow-game" ? (
                  <div>
                    <div>当前进度: {userActiveInfo.gameInfo.toastList}</div>
                    {userActiveInfo.gameInfo.sceneList.length ? (
                      <div style={{ color: "red" }}>
                        状态异常: 无法自动喂养 -{" "}
                        {userActiveInfo.gameInfo.sceneList.map(
                          (x) => x.cowState
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                    <div>剩余饲料数量: {userActiveInfo.gameInfo.forage}</div>
                    <div>已经喂养次数: {userActiveInfo.gameInfo.feedTimes}</div>
                    <div>
                      选择的奖品:{" "}
                      {`${userActiveInfo.awardInfo.name} ${userActiveInfo.awardInfo.desc}`}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {item.type === "STEPS_ACTIVIT" ? (
                  <div>
                    <div>红包余额: {userActiveInfo.amount / 1000} 元</div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Index;
