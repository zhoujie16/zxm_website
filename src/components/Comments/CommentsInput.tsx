import { Input, Button, message } from "antd";
import { useState } from "react";

const Index = ({ onSubmit }: any) => {
  const { TextArea } = Input;
  const [value, setValue] = useState("");

  const _onSubmit = async () => {
    if (value.trim() === "") {
      message.warning("请输入评论内容");
      return;
    }
    const res = await onSubmit(value);
    if (res) {
      setValue("");
    }
  };

  return (
    <>
      <div className="comments_input_wrap">
        <div className="comments_input">
          <TextArea
            placeholder="欢迎评论"
            value={value}
            onInput={(e: any) => {
              setValue(e.target.value);
            }}
          ></TextArea>
        </div>
        <div className="comments_btns">
          <Button onClick={_onSubmit}>发表评论</Button>
        </div>
      </div>
    </>
  );
};

export default Index;
