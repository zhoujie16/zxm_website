import TechnicalItemCard from "./TechnicalItemCard";

export default function ({ category_id, allColumn }: any) {
  const list = allColumn.filter((x: any) => x.parent_id == category_id);

  return (
    <>
      <div className="technical_group_wrap">
        {list.map((x: any) => (
          <TechnicalItemCard categoriesItem={x} />
        ))}
      </div>
    </>
  );
}
