import { useQueryArticle } from "@/hooks/useQueryArticle";
import RecentPostItem from "./RecentPostItem";
import { Pagination } from "antd";
import { useEffect } from "react";
import { ArticleType } from "@/types";

/**
 * 首页列表
 */
export default function ({ postsData }: any) {
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
  } = postsData;

  return (
    <>
      <div className="recent-posts" id="recent-posts">
        {items.map((item: any, i: number) => (
          <>
            <RecentPostItem
              item={item}
              key={item._id}
              layout={i % 2 === 0 ? "left" : "right"}
            />
          </>
        ))}

        {/* <nav id="pagination">
          <div className="pagination">
            <span className="page-number current">1</span>
            <a
              className="page-number"
              href="/page/2/#content-inner"
              data-pjax-state=""
            >
              2
            </a>
            <a
              className="extend next"
              rel="next"
              href="/page/2/#content-inner"
              data-pjax-state=""
            >
              <i className="fas fa-chevron-right fa-fw"></i>
            </a>
          </div>
        </nav> */}
        <div className="pagination_wrap">
          <Pagination
            defaultCurrent={currentPage}
            total={total}
            showSizeChanger={false}
            onChange={(page) => {
              (window as any).location.href = `/?page=${page}`;
            }}
          />
        </div>
      </div>
    </>
  );
}
