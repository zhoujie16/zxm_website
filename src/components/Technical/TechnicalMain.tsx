import { Tabs } from "antd";
import ColumnGroup from "./ColumnGroup";

/**
 * 技术专栏
 */
export default function ({ allColumn }: any) {
  const _item = allColumn.filter((x: any) => x.parent_id == "technical");
  const items = _item.map((x: any) => ({
    key: x._id,
    label: x.title,
    children: <ColumnGroup category_id={x.category_id} allColumn={allColumn} />,
  }));

  const onChange = (key: string) => {
    // console.log(key);
  };
  return (
    <>
      <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </>
  );
}
