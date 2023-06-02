/**
 * 相关推荐
 */

import dayjs from "dayjs";

export default function ({ postRelated }: any) {
  const { related = [] } = postRelated;

  return (
    <>
      <div className="relatedPosts">
        <div className="headline">
          <i className="fas fa-thumbs-up fa-fw"></i>
          <span>相关推荐</span>
        </div>
        <div className="relatedPosts-list">
          {related.map((item: any) => (
            <div key={item._id}>
              <a href={`/post/${item._id}`}>
                <img className="cover" src={item.images} />
                <div className="content is-center">
                  <div className="date">
                    <i className="far fa-calendar-alt fa-fw"></i>
                    {dayjs(item.release_time).format("YYYY-MM-DD")}
                  </div>
                  <div className="title">{item.title}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
