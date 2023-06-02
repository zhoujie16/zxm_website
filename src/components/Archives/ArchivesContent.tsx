import { ArticleType } from "@/types";
import ArticleSortItem from "./ArticleSortItem";
import RecentPostItem from "../Home/RecentPostItem";
import { Pagination } from "antd";

export default function ({ archivesData }: { archivesData: any }) {
  const {
    currentPage,
    items,
    pageSize,
    total,
  }: {
    currentPage: number;
    items: ArticleType[];
    pageSize: number;
    total: number;
  } = archivesData;
  return (
    <>
      {/* <div id="archive"> */}
      <div className="recent-posts" id="recent-posts">
        {items.map((item: ArticleType, i: number) => (
          <RecentPostItem item={item} />
        ))}
        <div className="pagination_wrap">
          <Pagination
            defaultCurrent={currentPage}
            total={total}
            showSizeChanger={false}
            onChange={(page) => {
              window.location.href = `${window.location.pathname}/?page=${page}`;
            }}
          />
        </div>
      </div>
    </>
  );
}
