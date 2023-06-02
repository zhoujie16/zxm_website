// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IMG_LIST } from "@/assets/imglist";
import { getRandomNumberInRange } from "@/utils";
import { record_add_axios } from "@/utils/apiTools";

/**
 * 随机一张图片
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    record_add_axios("zxm_blog.api.getRandomImage.pv");
    const data = IMG_LIST[getRandomNumberInRange(0, IMG_LIST.length - 1)];
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
