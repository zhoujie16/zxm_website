import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import UA from "ua-device";
import dayjs from "dayjs";

const Index = ({ commentsItem }: any) => {
  const { content, nick_name, ua } = commentsItem;
  const time = dayjs(commentsItem.created_at).format("YYYY年MM月DD日 HH:mm");

  const _ua = new UA(ua);
  return (
    <>
      <div className="comments_item_wrap">
        <div className="comments_item_l">
          <div className="comments_item_user_icon">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              size={40}
              icon={<UserOutlined />}
            ></Avatar>
          </div>
        </div>
        <div className="comments_item_r">
          <div className="comments_item_user_info">
            <div className="comments_item_user_name">
              <span className="name">{nick_name}</span>
              <span className="os">{_ua.os.name}</span>
              <span className="os">{_ua.os.version.original}</span>
            </div>
            <div className="comments_item_time">{time}</div>
          </div>
          <div className="comments_item_comments">{content}</div>
        </div>
      </div>
    </>
  );
};

export default Index;
