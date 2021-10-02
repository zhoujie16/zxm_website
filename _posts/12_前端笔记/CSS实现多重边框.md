---
title: CSS实现多重边框
date: 2017-06-28 22:34:59
tags:
categories: 前端
column_id: 12
---
实现这样的效果 简单

![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkhckr4mj307u0880h8.jpg)
```
.box {
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	background-color: lightskyblue;
	border: 20px solid royalblue;
}
<div class="box">
	box
</div>
```
但要实现这样的效果，不包裹div的前提下，使用outline属性


![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkhddd9hj30a30af0ml.jpg)

```
.box {
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	background-color: lightskyblue;
	border: 20px solid royalblue;
	outline: solid 20px brown;
}
```

但要实现这样的效果 outline 是不行的

![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkheagmjj308g098gld.jpg)

如果使用 outline 只会这样
```
.box {
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	background-color: lightskyblue;
	border: 20px solid royalblue;
	border-radius: 30px;
	outline: solid 20px brown;
}
```

![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkherldtj308t09n0sh.jpg)


但是用阴影 box-shadow 可以做到 就像这样
```
.box {
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	background-color: lightskyblue;
	border: 20px solid royalblue;
	border-radius: 30px;
	box-shadow: 0 0 0 20px brown;
}
```

![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkhfdjbgj3088095gld.jpg)


还能这样

```
.box {
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	background-color: lightskyblue;
	border: 20px solid royalblue;
	border-radius: 30px;
	box-shadow: 0 0 0 20px brown,
				0 0 0 40px salmon,
				0 0 0 60px crimson;
}
```

![Paste_Image.png](http://pic1.zhoujie16.cn/006tNc79ly1g3zkhfosbyj30a30azq2q.jpg)
