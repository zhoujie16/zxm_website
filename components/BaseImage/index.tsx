import { getRandomNumImage } from "../../utils";
import { useEffect, useRef } from "react";

const Index = (props) => {
  let { className, src = getRandomNumImage() } = props;
  let _src = "/assets/imgs/loading.gif";
  const imgDiv = useRef();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        // 观察者
        entries.forEach((item) => {
          // entries 是被监听的元素集合它是一个数组
          if (item.intersectionRatio <= 0) return;
          const { target } = item;
          target.src = src;
          io.unobserve(target);
        });
      },
      {
        threshold: [0.01], // 添加触发时机数组
      }
    );
    io.observe(imgDiv.current);
  }, []);
  return (
    <img
      ref={imgDiv}
      className={className}
      src={_src}
      onError={(e: any) => {
        e.target.src = "/assets/imgs/404.jpg";
      }}
    />
  );
};

export default Index;
