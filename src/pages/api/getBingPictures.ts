// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getRandomNumberInRange } from "@/utils";
import axios from "./../../utils/fetch";
import type { NextApiRequest, NextApiResponse } from "next";
import { record_add_axios } from "@/utils/apiTools";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    record_add_axios("zxm_blog.api.getBingPictures.pv");
    const _res = await axios.get(
      `https://www.bing.com/HPImageArchive.aspx?format=js&n=7`,
      {}
    );
    let _url = ``;
    const _list = _res?.data?.images || [];
    if (_list.length) {
      const _item = _list[getRandomNumberInRange(0, _list.length - 1)];
      _url = `https://www.bing.com/${_item.url}`;
    }
    res.status(200).json(_url);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
