import Config from "@/config";
import Spm from "./spm";

export const throttle = (
  func: Function,
  wait: number,
  options?: { leading?: boolean; trailing?: boolean }
) => {
  let timeout: NodeJS.Timeout | null, context: any, args: IArguments | null;
  let previous = 0;

  if (!options) options = {};

  const later = () => {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function (this: any) {
    const now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  return throttled;
};

export const scrollToDest = (pos: number, time?: number) => {
  if (pos < 0 || time < 0) {
    return;
  }

  const currentPos = window.scrollY || window.screenTop;
  if (currentPos > pos) pos = pos - 70;

  if ("CSS" in window && CSS.supports("scroll-behavior", "smooth")) {
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
    return;
  }

  let start: number | null = null;
  time = time || 500;
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    if (currentPos < pos) {
      const progress = currentTime - start;
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    } else {
      const progress = currentTime - start;
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    }
  });
};
export const scrollFn = function () {
  const $rightside = document.getElementById("rightside") as HTMLElement;
  const innerHeight = window.innerHeight + 56;

  // 當滾動條小于 56 的時候
  if (document.body.scrollHeight <= innerHeight) {
    // $rightside.style.cssText = "opacity: 1; transform: translateX(-38px)";
    return;
  }

  // find the scroll direction
  function scrollDirection(currentTop: number) {
    const result = currentTop > initTop; // true is down & false is up
    initTop = currentTop;
    return result;
  }

  let initTop = 0;
  let isChatShow = true;
  const $header = document.getElementById("page-header") as HTMLElement;
  const isChatBtnHide = typeof chatBtnHide === "function";
  const isChatBtnShow = typeof chatBtnShow === "function";

  const scrollCollect = () => {
    return throttle(function (e: Event) {
      const currentTop = window.scrollY || document.documentElement.scrollTop;
      const isDown = scrollDirection(currentTop);
      if (currentTop > 56) {
        if ($header.classList.contains("nav-visible"))
          $header.classList.remove("nav-visible");
        if (isChatBtnShow && isChatShow === true) {
          chatBtnHide();
          isChatShow = false;
        }
        if (!$header.classList.contains("nav-visible"))
          $header.classList.add("nav-visible");
        if (isChatBtnHide && isChatShow === false) {
          chatBtnShow();
          isChatShow = true;
        }
        $header.classList.add("nav-fixed");
        if (
          // window.getComputedStyle(// $rightside).getPropertyValue("opacity") ===
          "0"
        ) {
          // $rightside.style.cssText = "opacity: 1; transform: translateX(-38px)";
        }
      } else {
        if (currentTop === 0) {
          $header.classList.remove("nav-fixed", "nav-visible");
        }
        // $rightside.style.cssText = "opacity: ''; transform: ''";
      }

      if (document.body.scrollHeight <= innerHeight) {
        // $rightside.style.cssText = "opacity: 1; transform: translateX(-38px)";
      }
    }, 200)();
  };

  window.addEventListener("scroll", scrollCollect);
};

// 判断设备类型  手机还是电脑
export const getDevicetype = () => {
  if (
    navigator.userAgent.match(
      /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
    )
  ) {
    return "mobile";
  } else {
    return "pc";
  }
};

export const getScript = (e: string) => {
  return new Promise((t, o) => {
    const a: any = document.createElement("script");
    (a.src = e),
      (a.async = !0),
      (a.onerror = o),
      (a.onload = a.onreadystatechange =
        function () {
          const e = this.readyState;
          (e && "loaded" !== e && "complete" !== e) ||
            ((a.onload = a.onreadystatechange = null), t());
        }),
      document.head.appendChild(a);
  });
};

// 生成范围内随机数
export const getRandomNumberInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 打点数据
 * @param spm
 * @param data
 */
export const spmLog = (spm: string = "", data: any = {}) => {
  // console.log("打点数据", spm, JSON.stringify(data, null, 1));
  if (!window.location.origin.includes(":3000")) {
    Spm.setEnv("prod");
  }
  Spm.setUrl(`${Config.spmUrl}/s/s`);
  Spm.spm(spm, data, "spm")
};

/**
 * 解析目录
 */
export interface TocItem {
  hLevel: string;
  textContent: string;
  id: string;
  level?: number;
  children?: TocItem[];
}

export const createToc = (dom: HTMLElement): TocItem[] => {
  const TocList = dom.querySelectorAll("h1, h2, h3, h4");
  TocList.forEach((item, i) => item.setAttribute("id", `anchor_${i}`));

  let level = 1;
  const copyArr = Array.from(TocList).map((item: any) => ({
    ...item,
    hLevel: item.nodeName.slice(1),
    textContent: item.textContent as string,
    id: item.id,
  })) as TocItem[];

  const getChildrenByLevel = (
    currentLevelItem: TocItem,
    arr: TocItem[]
  ): TocItem[] | undefined => {
    if (!currentLevelItem) {
      return;
    }
    const minusCurrentLevel = -Number(currentLevelItem.hLevel);
    const children: TocItem[] = [];
    for (const levelItem of arr) {
      if (-Number(levelItem.hLevel) < minusCurrentLevel) {
        children.push(levelItem);
      } else {
        break;
      }
    }
    if (children.length > 0) {
      arr.splice(0, children.length);
    }
    return children;
  };

  const getTree = (result: TocItem[], arr: TocItem[], level: number): void => {
    let currentItem = arr.shift();
    if (currentItem) {
      currentItem.level = level;
      result.push(currentItem);
    }
    while (arr.length > 0) {
      if (!currentItem) {
        return;
      }
      const children = getChildrenByLevel(currentItem, arr);
      if (children?.length == 0) {
        currentItem = arr.shift();
        if (currentItem) {
          currentItem.level = level;
          result.push(currentItem);
        }
        continue;
      }
      currentItem.children = [];
      getTree(currentItem.children, children as TocItem[], level + 1);
    }
  };

  const tree: TocItem[] = [];
  getTree(tree, copyArr, level);

  // console.log("TocList", TocList);
  return tree;
};
