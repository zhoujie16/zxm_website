import { record_add_axios } from "@/utils/apiTools";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  record_add_axios("zxm_blog._document.pv");
  return (
    <Html lang="zh-CN">
      <Head>
        <title>周小米的博客</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no,user-scalable=no, minimum-scale=1, maximum-scale=1,viewport-fit=cover"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/styles/index.css" />
        {/* <script src="/libs/spm.js"></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
