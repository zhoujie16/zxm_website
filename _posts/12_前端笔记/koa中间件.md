---
title: koa中间件
date: 2018.09.26 00:39:46
tags:
categories: 前端
---
### 一、什么是 Koa 的中间件

通俗的讲：中间件就是匹配路由之前或者匹配路由完成做的一系列的操作，我们就可以把它叫做中间件。

在 express 中间件（Middleware）是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处理请求-响应循环流程中的中间件，一般被命名为 next 的变量。在 Koa 中中间件和 express 有点类似

##### 中间件的功能包括：

执行任何代码。

修改请求和响应对象。

终结请求-响应循环。

调用堆栈中的下一个中间件。

如果我的 get、post 回调函数中，没有 next 参数，那么就配了。如果想往下匹配的话，那么需要写 next()

### 二、Koa 应用可使用如下几种中间件：

应用级中间件
路由级中间件
错误处理中间件
第三方中间件



#### 1.应用级中间件

```js
//引入 koa模块

var Koa=require('koa');
var router = require('koa-router')();  /*引入是实例化路由** 推荐*/
var app=new Koa();

//Koa中间件
//匹配任何路由  ，如果不写next，这个路由被匹配到了就不会继续向下匹配
/*
 app.use(async (ctx)=>{
    ctx.body='这是一个中间件';
 })
* */

/*匹配路由之前打印日期*/
app.use(async (ctx,next)=>{
    console.log(new Date());
    await next(); /*当前路由匹配完成以后继续向下匹配*/
})

router.get('/',async (ctx)=>{
    ctx.body="首页";
})
router.get('/news',async (ctx)=>{
    ctx.body="新闻列表页面";
})
router.get('/login',async (ctx)=>{
    ctx.body="新闻列表页面";
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3002);

```

#### 2.路由级中间件

```javascript

//引入 koa模块
var Koa=require('koa');
var router = require('koa-router')();  /*引入是实例化路由** 推荐*/
var app=new Koa();

//Koa中间件
//匹配任何路由，如果不写next，这个路由被匹配到了就不会继续向下匹配


router.get('/',async (ctx)=>{
    ctx.body="首页";
})
// 匹配到news路由以后继续向下匹配路由
router.get('/news',async (ctx,next)=>{
    console.log('这是一个新闻1');
    await next();
})

router.get('/news',async (ctx)=>{
    ctx.body='这是一个新闻';
})

router.get('/login',async (ctx)=>{
    ctx.body="新闻列表页面";
})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3002);

```

 #### 3.错误处理中间件

```javascript

//引入 koa模块
var Koa=require('koa');
var router = require('koa-router')();  /*引入是实例化路由** 推荐*/
var app=new Koa();

//Koa中间件
//匹配任何路由  ，如果不写next，这个路由被匹配到了就不会继续向下匹配

//www.域名.com/news
app.use(async (ctx,next)=>{
    console.log('这是一个中间件01');
    next();
    if(ctx.status==404){   /*如果页面找不到*/
        ctx.status = 404;
        ctx.body="这是一个 404 页面"
    }else{
        console.log(ctx.url);
    }
})

router.get('/',async (ctx)=>{

    ctx.body="首页";

})
router.get('/news',async (ctx)=>{
    console.log('这是新闻2');
    ctx.body='这是一个新闻';
})
router.get('/login',async (ctx)=>{
    ctx.body="新闻列表页面";
})



app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3002);

```



#### 4.中间件执行流程：洋葱圈

```

//引入 koa模块

var Koa=require('koa');
var router = require('koa-router')();  /*引入是实例化路由** 推荐*/
var app=new Koa();

//Koa中间件

//匹配任何路由  ，如果不写next，这个路由被匹配到了就不会继续向下匹配

//www.域名.com/news
app.use(async (ctx,next)=>{
    console.log('1、这是第一个中间件01');
    await next();

    console.log('5、匹配路由完成以后又会返回来执行中间件');
})

app.use(async (ctx,next)=>{
    console.log('2、这是第二个中间件02');
    await next();

    console.log('4、匹配路由完成以后又会返回来执行中间件');
})

router.get('/',async (ctx)=>{

    ctx.body="首页";

})
router.get('/news',async (ctx)=>{

    console.log('3、匹配到了news这个路由');
    ctx.body='这是一个新闻';
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3002);

```



