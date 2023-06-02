import { ajax_article_queryDetail } from "@/utils/apiTools";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useArticleDetail = (id: string) => {
  const [data, setData] = useState({
    article: {},
  });
  async function init() {
    if (id) {
      let _data: any = await ajax_article_queryDetail({
        id,
      });
      setData(_data);
    }
  }

  useEffect(() => {
    init();
  }, [id]);
  return data;
};
