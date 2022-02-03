import { connect } from "react-redux";

const Index = (props: any) => {
  let { mainArticleDetail } = props;
  let author = "";
  let url = "";
  let wkey = "";
  let wkeydict = {
    JUE_JIN: "稀土掘金",
    LG_COURSE_LESSON: "拉勾教育",
  };

  try {
    author = mainArticleDetail.article.author;
    url = mainArticleDetail.article.url;
    wkey = mainArticleDetail.article.wkey;
  } catch (error) {
    console.log(error);
  }
  try {
    if (wkey == "LG_COURSE_LESSON") {
      let a = JSON.parse(mainArticleDetail.article.other1);
      let b = JSON.parse(a.teacherDTOList);
      author = `${b[0].teacherName} | ${b[0].position}`;
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="post-copyright">
      {author ? (
        <div className="post-copyright__author">
          <span className="post-copyright-meta">文章作者:</span>
          <span className="post-copyright-info">{author}</span>
        </div>
      ) : (
        ""
      )}

      {url ? (
        <div className="post-copyright__type">
          <span className="post-copyright-meta">文章链接:</span>
          <span className="post-copyright-info">
            <a href={url}>{url}</a>
          </span>
        </div>
      ) : (
        ""
      )}
      {wkey ? (
        <div className="post-copyright__notice">
          <span className="post-copyright-meta">文章来源:</span>
          <span className="post-copyright-info">{wkeydict[wkey]}</span>
        </div>
      ) : (
        ""
      )}

      <div className="post-copyright__notice">
        <span className="post-copyright-meta">版权声明:</span>
        <span className="post-copyright-info">
          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
        </span>
      </div>
    </div>
  );
};

export default connect((state) => state)(Index);
