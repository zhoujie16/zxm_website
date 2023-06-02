import { TocItem, createToc } from "@/utils";
import { useEffect, useState } from "react";

export default function Index() {
  const [tocList, setTocList] = useState<any>([]);
  useEffect(() => {
    try {
      const ele = (document as any).querySelector(".post-content-inner");
      if (ele) {
        const arr = createToc(ele);
        // console.log("目录结构", arr);
        setTocList(arr);
      }
    } catch (error) {
      // console.log(error);
    }
  }, []);
  return (
    <>
      {!!tocList.length && (
        <>
          <div className="card-widget" id="card-toc">
            <div className="item-headline">
              <i className="fas fa-stream"></i>
              <span>目录</span>
              {/* <span className="toc-percentage">12</span> */}
            </div>
            <div className="toc-content is-expand">
              <ol className="toc">
                {tocList.map((item: TocItem, index: number) => {
                  return (
                    <li className="toc-item toc-level-2">
                      <a className="toc-link" data-pjax-state="anchor">
                        <span className="toc-number">{index + 1}. </span>
                        <span className="toc-text">{item.textContent}</span>
                      </a>
                      <ol className="toc-child">
                        {item.children?.map((item: TocItem, index2: number) => (
                          <li className="toc-item toc-level-3">
                            <a className="toc-link" data-pjax-state="">
                              <span className="toc-number"></span>
                              <span className="toc-text">
                                {item.textContent}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ol>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </>
      )}
    </>
  );
}
