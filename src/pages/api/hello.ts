// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "./../../utils/fetch";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const aaa = {
      path: req.url,
      query: req.query,
      body: req.body,
      method: req.method,
      headers: req.headers,
      ip: req.socket.remoteAddress,
    };
    res.status(200).json({ success: true, data: aaa });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
