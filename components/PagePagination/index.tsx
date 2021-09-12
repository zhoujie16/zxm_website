import Link from "next/link";
import { connect } from "react-redux";

const Index = (props: any) => {
  let { pagePaginationData } = props;
  // let totalCount = 101;
  // let pageSize = 10;
  // let curPage = 7;
  // let baseHref = "/home/page/";
  let { totalCount, pageSize, curPage, baseHref } = pagePaginationData;
  // 需要分页的数量
  let paginationNum = Math.ceil(totalCount / pageSize);
  // 组件数据
  let paginationCompData = [];
  for (let i = 0; i < paginationNum; i++) {
    let pageNumber = i + 1;
    let pageHref = baseHref + pageNumber;
    let pageClass = `page-number${curPage === pageNumber ? " current" : ""}`;
    let curType = "NOMAL";
    let d = {
      curType,
      pageNumber,
      pageHref,
      pageClass,
    };
    paginationCompData.push(d);
  }

  if (paginationNum > 5) {
    if (paginationCompData.slice(0, curPage).length > 3) {
      paginationCompData = paginationCompData.map((item: any, i) => {
        if (item.pageNumber <= curPage) {
          if (item.pageNumber > 1 && item.pageNumber < curPage - 1) {
            return {};
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    }
    if (
      paginationCompData.slice(
        curPage - 2 < 0 ? 0 : curPage - 2,
        paginationCompData.length
      ).length > 3
    ) {
      paginationCompData = paginationCompData.map((item: any, i) => {
        if (item.pageNumber >= curPage) {
          if (
            item.pageNumber > curPage + 1 &&
            item.pageNumber <= paginationCompData.length - 1
          ) {
            return {};
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    }
    let paginationCompData_res: any[] = [];
    let arr_l = paginationCompData.slice(0, curPage);
    let arr_r = paginationCompData.slice(curPage, paginationCompData.length);

    let cfn = (arr: any[]) => {
      let _arr: any[] = [];
      arr.forEach((x, i) => {
        if (x.curType) {
          _arr.push(x);
        } else {
          let a = _arr.find((y) => JSON.stringify(y) === "{}");
          if (!a) {
            _arr.push(x);
          }
        }
      });
      return _arr;
    };
    arr_l = cfn(arr_l);
    arr_r = cfn(arr_r);
    paginationCompData = [...arr_l, ...arr_r];
  }

  return (
    <nav id="pagination">
      <div className="pagination">
        {curPage != 1 ? (
          <Link href={{ pathname: baseHref + (Number(curPage) + -1) }}>
            <a className="extend prev" rel="prev">
              <i className="fas fa-chevron-left fa-fw"></i>
            </a>
          </Link>
        ) : (
          ""
        )}

        {paginationCompData.map((item: any) =>
          item.curType ? (
            <Link href={{ pathname: item.pageHref }}>
              <a className={item.pageClass}>{item.pageNumber}</a>
            </Link>
          ) : (
            <span className="space">…</span>
          )
        )}

        {curPage != paginationNum ? (
          <Link href={{ pathname: baseHref + (Number(curPage) + 1) }}>
            <a className="extend next" rel="next">
              <i className="fas fa-chevron-right fa-fw"></i>
            </a>
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default connect((state) => state)(Index);
