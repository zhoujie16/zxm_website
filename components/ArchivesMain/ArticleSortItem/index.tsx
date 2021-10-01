import moment from "moment";
import Link from "next/link";
import { getRandomNumImage } from "./../../../utils";
import BaseImage from "./../../../components/BaseImage";

const Index = (props: any) => {
  let { itemInfo } = props;
  let title = "";
  let timeStr = "";
  let id = 0;
  try {
    title = itemInfo.title;
    timeStr = moment(Number(itemInfo.release_time)).format("YYYY-MM-DD");
    id = itemInfo.id;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="article-sort-item">
      {/* <Link
        href={{
          pathname: "/article/[id]",
          query: { id: id },
        }}
      > */}
      <a
        className="article-sort-item-img"
        title={title}
        href={`/article/${id}`}
      >
        <BaseImage alt={title} />
      </a>
      {/* </Link> */}
      <div className="article-sort-item-info">
        <div className="article-sort-item-time">
          <i className="far fa-calendar-alt"></i>
          <time className="post-meta-date-created">{timeStr}</time>
        </div>
        {/* <Link
          href={{
            pathname: "/article/[id]",
            query: { id: id },
          }}
        > */}
        <a
          className="article-sort-item-title"
          title={title}
          href={`/article/${id}`}
        >
          {title}
        </a>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Index;
