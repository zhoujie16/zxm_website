---
title: 关于input属性type=file的及其files对象的深层探究
date: 2019-02-28 10:56:20
tags:
categories: 前端
column_id: 12
---

我们都知道，html5中有个input type=file元素。用该元素可以实现页面上传文件的功能

但一般的做法只是简单的在表单中操作，我来研究一下深层东西

想要了解它，就要知道它的内置对象，files

页面上写一个input，然后选[俩个](https://www.baidu.com/s?wd=%E4%BF%A9%E4%B8%AA&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)图片，打印这个input对象

```javascript

$("input[name='file1']").change( function(e){
    console.log($("input[name='file1']"))
})
```

发现有下列值，在0中，有一个files对象

我们发现input选择的文件被记录到了这个对象中，这个是fileList对象，是一个只读对象，不能修改

因为它不能修改，所以很难实现对已选中多个文件的删除某个文件等操作

里面记录了文件的name，size，type，和修改时间等，可知这个对象只存放了一些文件的信息，相当于是本地文件的索引，并不是把文件放到input中了，上传文件时它会再去找到实际的本地文件

利用这个files对象，我们可以实现很多功能，例如：

#### **一.选择图片未经后端显示预览图片**

##### 方法1：利用window的url工具将文件生成url，再将url赋值给img的src属性，显示出选中图像

顺便提一下，input中控制选中类型加一个accept属性就行了，只会显示设定的文件类型

```html
<input id="file1" type="file"  name="file1" multiple="multiple" accept=".doc，.jpg">
```

```javascript
$('.fbpj-camera').change(function (event) {
  //$('.dianpuzhuangxiu .addmokuai .block .shuoming1 .pic .pic1').children().remove();
  // 根据这个 <input> 获取文件的 HTML5 js 对象
  var files = event.target.files, file;
  if (files && files.length > 0) {
    // 获取目前上传的文件
    file = files[0];
    // 来在控制台看看到底这个对象是什么
    console.log(file);
    // 那么我们可以做一下诸如文件大小校验的动作
    if (file.size > 1024 * 1024 * 2) {
      alert('图片大小不能超过 2MB!');
      return false;
    }
    // !!!!!!
    // 下面是关键的关键，通过这个 file 对象生成一个可用的图像 URL
    // 获取 window 的 URL 工具     
    var URL = window.URL || window.webkitURL;
    // 通过 file 生成目标 url
    var imgURL = URL.createObjectURL(file);
    // 用这个 URL 产生一个 <img> 将其显示出来
    $('.fbpj .container').prev().find("img").attr('src', imgURL);
    // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
    //URL.revokeObjectURL(imgURL);
  }
});
```

##### 方法2：利用html5的FileReader()读取文件（前提是浏览器支持的话）

```javascript
if(window.FileReader) {  
    var fr = new FileReader();  
    // add your code here  
}  
else {  
    alert("Not supported by your browser!");  
}
```

```html
<input type="file" name="file" onchange="showPreview(this)" />  
<img id="portrait" src="" width="70" height="75">
```

```javascript
function showPreview(source) {
  var file = source.files[0];
  if (window.FileReader) {
    var fr = new FileReader();
    fr.onloadend = function (e) {
      document.getElementById("portrait").src = e.target.result;
    };
    fr.readAsDataURL(file);  //也是利用将图片作为url读出
  }
}
```

###### FileReader还有一些其他用法

```html
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta name="author" content="oscar999">
  <title></title>
  <script>
    function handleFiles(files) {
      if (files.length) {
        var file = files[0];
        var reader = new FileReader();
        reader.onload = function () {
          document.getElementById("filecontent").innerHTML = this.result;
        };
        reader.readAsText(file);   //作为字符串读出
      }
    }
  </script>

</head>
<body>

<input type="file" id="file" onchange="handleFiles(this.files)"/>
<div id="filecontent"></div>
</body>
</html>
```

#### **二.文件拖拽的方法保存文件**

关于文件拖拽下面有注释，我主要说一下怎么给用js给input赋值，而不是手动去选文件

因为拖拽的区域只是一个div，无法进行上传操作，所以需要加一个form和input，让拖拽进去的文件进入input中。

取出files后，用$("#file1")[0].files=files;将文件赋值给input，注意赋值的必须是fileList对象，不要试图只放进去一个文件，fileList只读。

然后用h5中的FormData将form转化，提交即可

```html
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <style>
    .container {
      width: 300px;
      height: 300px;
      border: 2px dashed #ddd;
      text-align: center;
      padding: 50px;
    }
  </style>
  <title>
    培训活动列表
  </title>
</head>
<body>
<div class="container">
  拖拽进入
</div>
<form id="form1" method="post" enctype="multipart/form-data">
  <input type="file" name="file1" id="file1" value=""/>
</form>
<script type="text/javascript">
  $('.container').bind('dragenter dragover', ignoreDrag);
  $(".container").on({
    drop: function (e) {
      var flag = true;
      e.preventDefault();
      //jquery的file要去e.originalEvent里面拿，拖拽获取files的方式与input的不同
      var files = e.originalEvent.dataTransfer.files;
      //var files = e.dataTransfer.files;  原生的话这样就可以获取
      for (var i = 0; i < files.length; i++) {
        myFileReader(files[i], function (result, file) {
          if (result) {
            //文件
            console.log(file.name)

          } else {
            //文件夹
            console.log("不要上传文件夹")
            flag = false;
          }
        });
      }
      if (flag) {
        $("#file1")[0].files = files;   //关键：将取到的文件赋值给input，用于ajax提交文件！！！
        var formData = new FormData($("#form1")[0]);
        $.ajax({
          url: "/it/orderManage/saveActivity",
          type: 'POST',
          data: formData,
          // 告诉jQuery不要去处理发送的数据
          processData: false,
          // 告诉jQuery不要去设置Content-Type请求头
          contentType: false,
          async: true,
          success: function (ret) {
            //alert("上传成功")
            if (ret) {
              $("#trainInfoModal").modal("hide");
              layer.alert("保存成功")
              $('#orderTable').bootstrapTable("refresh");
              $("#trainInfoModal input").val("");
              $("#trainInfoModal textarea").val("");

            }
          }
        });
      }
      console.log(files);
    }
  })

  function ignoreDrag(e) {
    e.originalEvent.stopPropagation();
    e.originalEvent.preventDefault();
  }

  function myFileReader(file, callback) {
    if (!window.FileReader) {
      callback(true, file);
      return false;
    }
    var fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = function (e) {
      callback(true, file);
    }
    fr.onerror = function (e) {  //不好判断是否是文件夹，通过上传报错可以判断是文件夹
      callback(false, file);
    }
    return true;
  };
</script>
</body>
</html>
```

后台获取文件还是用MutipartFile[]接收

暂时先总结这么多



---------------------
作者：lianzhang861 
来源：CSDN 
原文：https://blog.csdn.net/lianzhang861/article/details/80283120 
版权声明：本文为博主原创文章，转载请附上博文链接！