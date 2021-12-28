const axios = require("axios");
const fs = require("fs");
const path = require("path");

let listArr = [];

const save = async (txt) => {
  fs.writeFile("input.json", txt, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("数据写入成功！");
  });
};

// 重命名
const copyAndReName = async (pathName) => {
  let bname = path.basename(pathName);
  const filteName = (name, tname) => {
    let arr = name.split(".");
    let res = `${arr[0]}${tname}`;
    return res;
  };
  let resName = "";
  if (bname.includes(".jpg")) {
    resName = filteName(bname, ".jpg");
  } else if (bname.includes(".JPG")) {
    resName = filteName(bname, ".jpg");
  } else if (bname.includes(".png")) {
    resName = filteName(bname, ".png");
  } else if (bname.includes(".jpeg")) {
    resName = filteName(bname, ".jpg");
  } else {
    console.log(bname);
  }
  let newPath = path.join(__dirname, "./test/" + resName);
  fs.rename(pathName, newPath, () => {});
};

const fileDisplay = async (filePath) => {
  try {
    let files = fs.readdirSync(filePath);
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
          copyAndReName(filedir);
        }
        if (isDir) {
          fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
      } catch (error) {
        console.warn("获取文件stats失败", error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

async function readTest() {
  let arr = [];
  let filePath = "/Users/zhoujie/Documents/GitProject/zhoujie/upic/b1";
  try {
    let files = fs.readdirSync(filePath);
    for (let i = 0; i < files.length; i++) {
      const filename = files[i];
      //获取当前文件的绝对路径
      let filedir = path.join(filePath, filename);
      //根据文件路径获取文件信息，返回一个fs.Stats对象
      let bname = path.basename(filedir);
      arr.push(bname);
    }
    save(JSON.stringify(arr));
  } catch (error) {
    console.log(error);
  }
}

// fileDisplay("/Users/zhoujie/Pictures/朋友圈壁纸");
readTest();
