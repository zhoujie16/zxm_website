// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SOUL_LIST } from "@/assets/soulList";
import { getRandomNumberInRange } from "@/utils";
import { record_add_axios } from "@/utils/apiTools";

/**
 * 随机一句话
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    record_add_axios("zxm_blog.api.getSoulText.pv");
    const data =
      SOUL_LIST.RECORDS[
        getRandomNumberInRange(0, SOUL_LIST.RECORDS.length - 1)
      ];
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
