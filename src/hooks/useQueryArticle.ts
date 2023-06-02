import { ajax_article_query } from "@/utils/apiTools";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type IProps = {
  category_id?: string;
  sort?: number;
  page: number;
};

export const useQueryArticle = ({ page, category_id, sort = -1 }: IProps) => {
  const [data, setData] = useState<any>({
    items: [],
  });
  async function init() {
    if (page) {
      let recentArticleData: any = await ajax_article_query({
        pageSize: 10,
        currentPage: Number(page),
        category_id,
        sort,
      });
      setData(recentArticleData);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return data;
};
