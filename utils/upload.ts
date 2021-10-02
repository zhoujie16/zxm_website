const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const marked = require("marked");
const axios = require("axios");
const baseUrl = "http://127.0.0.1:7001";

// 递归找到文件夹内所有md文件  输出数组
async function filteFileMdList(fileDirPath) {
  let listArr = [];
  /**
   * 文件遍历方法
   * @param filePath 需要遍历的文件路径
   */
  const fileDisplay = (filePath) => {
    //根据文件路径读取文件，返回文件列表
    try {
      let files = fs.readdirSync(filePath);
      //遍历读取到的文件列表
      for (let i = 0; i < files.length; i++) {
        const filename = files[i];
        //获取当前文件的绝对路径
        let filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        try {
          let stats = fs.statSync(filedir);
          let isFile = stats.isFile(); //是文件
          let isDir = stats.isDirectory(); //是文件夹
          if (isFile) {
            // console.log(filedir);
            let extname = path.extname(filedir);
            if (extname === ".md") {
              listArr.push(filedir);
            }
          }
          if (isDir) {
            fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
          }
        } catch (error) {
          console.warn("获取文件stats失败", error);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };
  fileDisplay(fileDirPath);
  return listArr;
}

// 解析md文件成html文本
async function filteMdToHtml(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  let resText = "";
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  });
  if (matterResult.content) {
    resText = marked(matterResult.content);
    // resText = resText.replace(/[\n\r]/g, '');
  }
  return {
    data: matterResult.data,
    contentHtml: resText,
  };
}

// 保存一个目录里的所有md文件解析到博客数据库
async function saveMd() {
  const C_KEY = "MY_BLOG";
  // 隐藏原来的 S
  // 隐藏原来的 E
  let mdListPath = await filteFileMdList(path.join(__dirname, "./../_posts"));
  console.log("mdListPath", mdListPath);
  for (let i = 0; i < mdListPath.length; i++) {
    const mdPath = mdListPath[i];
    let mdContent = await filteMdToHtml(mdPath);
    let { contentHtml } = mdContent;
    if (contentHtml) {
      let { title, date, categories, password, cid } = mdContent.data;
      // console.log({
      //   title,
      //   date,
      //   categories,
      // contentHtml,
      // });
      if (password) {
        contentHtml = "这里有东西被加密了，暂时无法查看哦";
      }
      let saveRes = await axios.post(`${baseUrl}/website/article/saveMyBlog`, {
        title,
        date,
        cid,
        categories,
        contentHtml,
      });
      if (saveRes.data.stat.code == 0) {
        console.log("保存结果", saveRes.data, title);
      } else {
        console.log("保存失败");
        console.log(saveRes.data);
      }
    }
  }
  console.log("保存成功", mdListPath.length);
}

saveMd();

// console.log(axios);
