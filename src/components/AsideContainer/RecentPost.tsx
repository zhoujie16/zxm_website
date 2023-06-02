import { AppConfigType } from "@/types";
import { ajax_article_query } from "@/utils/apiTools";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    ajax_article_query({
      pageSize: 6,
      currentPage: 1,
      category_id: "",
      sort: -1,
    }).then((res) => {
      res?.items?.length && setList(res.items);
    });
  }, []);
  return (
    <>
      <div className="card-widget card-recent-post">
        <div className="item-headline">
          <i className="fas fa-history"></i>
          <span>最新文章</span>
        </div>
        <div className="aside-list">
          {list.map((item: any) => (
            <>
              <div className="aside-list-item">
                <a className="thumbnail" href={`/post/${item._id}`}>
                  <img src={item.images} />
                </a>
                <div className="content">
                  <a className="title" href={`/post/${item._id}`}>
                    {item.title}
                  </a>
                  <time>{dayjs(item.release_time).format("YYYY-MM-DD")}</time>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
