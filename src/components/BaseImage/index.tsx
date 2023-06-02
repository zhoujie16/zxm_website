import axios from "axios";
import { useEffect, useRef } from "react";

const Index = (props: { className?: string; src?: string | any }) => {
  let { className, src = "" } = props;
  let _src = "/assets/imgs/loading.gif";
  const imgDiv = useRef<any>();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        // 观察者
        entries.forEach((item) => {
          // entries 是被监听的元素集合它是一个数组
          if (item.intersectionRatio <= 0) return;
          const target: any = item.target;
          if (src) {
            target.src = src;
          } else {
            axios
              .get(`/api/getRandomImage`)
              .then((res) => {
                target.src = res.data || "";
              })
              .catch(() => {
                target.src = "/assets/imgs/404.jpg";
              });
          }

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
