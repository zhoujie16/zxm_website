import Head from "next/head";
import { useEffect } from "react";
import Config from "./../../config";
const Index = () => {
  useEffect(() => {
    try {
      let pathname = window.location.pathname;
      let [x, b, fid = "", page = 1] = pathname.split("/");
      b == "" ? (b = "home") : "";
      let logData = {
        title: "",
      };
      if (b == "article") {
        logData.title = document.querySelector(".post-title").innerText;
        logData.id = fid;
      } else if (b == "categories") {
        logData.title = document.querySelector("#site-title").innerText;
        logData.page = page;
      } else if (b == "home") {
        logData.title = document.querySelector("#site-title").innerText;
        logData.page = page;
      } else if (b == "archives") {
        logData.title = document.querySelector("#site-title").innerText;
        logData.page = page;
      }
      window.spm(`${Config.blogCode}.${b}.enter`, logData);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Head>
      <title>{Config.blogName}</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <link rel="stylesheet" href="/index.css" />
      <script src="/lib/spm.js"></script>
    </Head>
  );
};

export default Index;
