async function test() {
  window.allList = [];
  let page = 1;
  let getPage = async () => {
    let url = `https://qaz.shengqianyouhuijuan.cn/app/index.php`;
    const res = await axios({
      method: "get",
      url,
      params: {
        i: "11",
        t: "0",
        v: "1.0.61",
        from: "wxapp",
        c: "entry",
        a: "wxapp",
        do: "class_imglist",
        m: "xz_bq",
        sign: "60aae1a5e7c8d746380ca75c4a1f366b",
        page: page,
        type: "1",
        classid: "0",
        r: "500359",
      },
    });
    // console.log(res.data);
    if (res.data.errno == 0) {
      if (res.data.data.length > 0) {
        console.log(page, res.data.data.length);
        allList = [...allList, ...res.data.data];
        page += 1;
        getPage();
      }
    }
  };
  await getPage();
}

list.map(x=>`${x.simgpath}`)