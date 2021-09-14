import { ajax_column_queryWithClient } from "./../api";

export const getPageCommonData = async (store: any) => {
  let mainCategoriesList = await ajax_column_queryWithClient();
  store.dispatch({
    type: "Get_mainCategoriesList",
    payload: mainCategoriesList,
  });
};

// 菜单转为树形结构
export function getCategoriesTreeList(meunList: any) {
  const result_query = meunList.map((x: any) => {
    x.label = x.title;
    x.value = x.id;
    x.text = x.title;
    return x;
  });

  const _menus_f: any = {
    id: 0,
    title: "全部分类",
    label: "全部分类",
    text: "全部分类",
    value: 0,
  };

  const tt = (menu_item: any) => {
    const children = result_query.filter(
      (x: any) => x.parent_id === menu_item.id
    );

    if (children.length > 0) {
      menu_item.children = children;
      children.forEach((x: any) => {
        tt(x);
      });
    }
  };

  tt(_menus_f);
  return _menus_f.children;
}

export const throttle = (func, wait, options) => {
  let timeout, context, args;
  let previous = 0;
  if (!options) options = {};

  const later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function () {
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

export const scrollToDest = (pos, time) => {
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

  let start = null;
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
  const $rightside = document.getElementById("rightside");
  const innerHeight = window.innerHeight + 56;

  // 當滾動條小于 56 的時候
  if (document.body.scrollHeight <= innerHeight) {
    // $rightside.style.cssText = "opacity: 1; transform: translateX(-38px)";
    return;
  }

  // find the scroll direction
  function scrollDirection(currentTop) {
    const result = currentTop > initTop; // true is down & false is up
    initTop = currentTop;
    return result;
  }

  let initTop = 0;
  let isChatShow = true;
  const $header = document.getElementById("page-header");
  const isChatBtnHide = typeof chatBtnHide === "function";
  const isChatBtnShow = typeof chatBtnShow === "function";

  const scrollCollect = () => {
    return throttle(function (e) {
      const currentTop = window.scrollY || document.documentElement.scrollTop;
      const isDown = scrollDirection(currentTop);
      if (currentTop > 56) {
        if (isDown) {
          if ($header.classList.contains("nav-visible"))
            $header.classList.remove("nav-visible");
          if (isChatBtnShow && isChatShow === true) {
            chatBtnHide();
            isChatShow = false;
          }
        } else {
          if (!$header.classList.contains("nav-visible"))
            $header.classList.add("nav-visible");
          if (isChatBtnHide && isChatShow === false) {
            chatBtnShow();
            isChatShow = true;
          }
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

export const getRandomNumImage = () => {
  let imgArr: any = [
    "https://i.loli.net/2021/09/14/S65WOMkKDtwQeRp.png",
    "https://i.loli.net/2021/09/14/fjFNLwPrpsHGnCO.png",
    "https://i.loli.net/2021/09/14/IaWM13KU4PNGAsT.png",
    "https://i.loli.net/2021/09/14/o6dejwu4mbRvDlg.png",
    "https://i.loli.net/2021/09/14/UehMuBgx1NdzWqr.png",
    "https://i.loli.net/2021/09/14/IcehdjWBbosDnCT.png",
    "https://i.loli.net/2021/09/14/qP1igkvAbIKECNc.png",
    "https://i.loli.net/2021/09/14/BUlNzIkXbZd157D.png",
    "https://i.loli.net/2021/09/14/dkiJW2jLMIqhgEz.png",
    "https://i.loli.net/2021/09/14/qaDto9bwB8KlVue.png",
    "https://i.loli.net/2021/09/14/xyacSFulzZOPAif.png",
    "https://i.loli.net/2021/09/14/vipHlgA8C4LQ1Xf.png",
    "https://i.loli.net/2021/09/14/cQUVPEu51NihDJr.png",
    "https://i.loli.net/2021/09/14/ZdcigNP2uWLEz9k.png",
    "https://i.loli.net/2021/09/14/lPesbuqvMw7FxK5.png",
    "https://i.loli.net/2021/09/14/ASEckqlgNjfywrz.png",
    "https://i.loli.net/2021/09/14/L4BgNPxf3cpb5d7.png",
    "https://i.loli.net/2021/09/14/BHjTLbA6DyrIFeN.png",
    "https://i.loli.net/2021/09/14/P2dr7Dhb6f1YslI.png",
    "https://i.loli.net/2021/09/14/AaIM6yi95DjoZY3.png",
    "https://i.loli.net/2021/09/14/s6viDq8SCwpOtAG.png",
    "https://i.loli.net/2021/09/14/vao8SERgLV6IrfP.png",
    "https://i.loli.net/2021/09/14/UZNc9BIf1MLe4GR.png",
    "https://i.loli.net/2021/09/14/m9YCJoervSzjtPU.png",
    "https://i.loli.net/2021/09/14/ZlSbW7V3o2GwXFq.png",
    "https://i.loli.net/2021/09/14/4kqKoVM1YGDax9n.png",
    "https://i.loli.net/2021/09/14/XUeV3sZlAqEbijM.png",
    "https://i.loli.net/2021/09/14/DGqshjKWVC49uHy.png",
    "https://i.loli.net/2021/09/14/428bnlaXuZCdrAW.png",
    "https://i.loli.net/2021/09/14/jNvelxiPM1uZCyc.png",
    "https://i.loli.net/2021/09/14/ODy6QVFe124wNfS.png",
    "https://i.loli.net/2021/09/14/3UZpdwy9P7DtWYJ.png",
    "https://i.loli.net/2021/09/14/xNOb68irogvIaPn.png",
  ];
  return imgArr[randomNum(0, imgArr.length - 1)];
  function randomNum(minNum: any, maxNum: any) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  }
};
