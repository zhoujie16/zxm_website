/**
 * 上一篇 下一篇
 */

export default function ({ postRelated }: any) {
  const { prev, next } = postRelated;
  // console.log({ prev, next });
  return (
    <>
      <nav
        className="pagination-post"
        id="pagination"
        style={{ background: "initial" }}
      >
        {prev && (
          <div className="prev-post pull-left" style={{ background: "#000" }}>
            <a href={`/post/${prev._id}`}>
              {prev.images && <img className="cover" src={prev.images} />}
              <div className="pagination-info">
                <div className="label">上一篇</div>
                <div className="prev_info">{prev.title}</div>
              </div>
            </a>
          </div>
        )}

        {next && (
          <div className="next-post pull-right" style={{ background: "#000" }}>
            <a href={`/post/${next._id}`}>
              {next.images && <img className="cover" src={next.images} />}
              <div className="pagination-info">
                <div className="label">下一篇</div>
                <div className="next_info">{next.title}</div>
              </div>
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
