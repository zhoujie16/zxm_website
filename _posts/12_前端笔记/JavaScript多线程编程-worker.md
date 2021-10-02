---
title: JavaScript多线程编程-worker
date: 2019-03-07 14:03:32
tags:
categories: 前端
column_id: 12
---
> 远离浏览器卡顿，提高用户体验，提升代码运行效率，使用多线程编程方法。

浏览器端JavaScript是以单线程的方式执行的，也就是说JavaScript和UI渲染占用同一个主线程，那就意味着，如果JavaScript进行高负载的数据处理，UI渲染就很有可能被阻断，浏览器就会出现卡顿，降低了用户体验。

为此，JavaScript提供了异步操作，比如定时器(setTimeout、setInterval)事件、Ajax请求、I/O回调等。我们可以把高负载的任务使用异步处理，它们将会被放入浏览器的事件任务队列（event loop）中去，等到JavaScript运行时执行线程空闲时候，事件队列才会按照先进先出的原则被一一执行。

![nodejs引以为荣的异步处理](http://pic1.zhoujie16.cn/squares.svg)

通过类似定时器，回调函数等异步编程方式在平常的工作中已经足够，但是如果做复杂运算，这种方式的不足就逐渐体现出来，比如settimeout拿到的值并不正确，或者页面有复杂运算的时候很容易触发假死状态，异步代码会影响主线程的代码执行，异步终究还是单线程，不能从根本上解决问题。

多线程（Web Worker）就应运而生，它是HTML5标准的一部分，这一规范定义了一套 API，允许一段JavaScript程序运行在主线程之外的另外一个线程中。将一些任务分配给后者运行。在主线程运行的同时，Worker（子）线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢。

## 什么是web worker

![img](http://pic1.zhoujie16.cn/squares.svg)

worker是window对象的一个方法，就是用它来创建多线程。可以通过以下方式来检测你的浏览器是否支持worker

```
if (window.Worker) {…… your code ……}
```

一个worker是使用一个构造函数（Worker()）创建的一个对象，这个构造函数需要传入一个的JavaScript文件，这个文件包含将在工作线程中运行的代码。类似于这样：

```
let myWorker = new Worker('worker.js');
```

主线程和子线程的数据不是共享的，worker通过postMessage() 方法和onmessage事件进行数据通信。主线程和子线程是双向的，都可以发送和监听事件。向一个worker发送消息需要这样做（main.js）：

```
myWorker.postMessage('hello, world'); // 发送
worker.onmessage = function (event) { // 接收
    console.log('Received message ' + event.data);
    doSomething();
}
```

 postMessage所传的数据都是拷贝传递（ArrayBuffer类型除外），所以子线程也是类似传递（worker.js）

```
addEventListener('message', function (e) {
    postMessage('You said: ' + e.data);
}, false);
```

 当子线程运行结束后，使用完毕，为了节省系统资源，可以手动关闭子线程。如果worker没有监听消息，那么当所有任务执行完毕（包括计数器）后，它就会自动关闭。

```
// 在主线程中关闭
worker.terminate();
// 在子线程里线程
close();
Worker也提供了错误处理机制，当出错时会触发error事件。
// 监听 error 事件
worker.addEventListener('error', function (e) {
  console.log('ERROR', e);
});
```

web worker本身很简单，但是它的限制特别多。

## 使用的问题

### 1、同源限制

分配给Worker 线程运行的脚本文件（worker.js），必须与主线程的脚本文件(main.js)同源。这里的同源限制包括协议、域名和端口，不支持本地地址（file://）。这会带来一个问题，我们经常使用CDN来存储js文件，主线程的worker.js的域名指的是html文件所在的域，通过new Worker（url）加载的url属于CDN的域，会带来跨域的问题，实际开发中我们不会吧所有的代码都放在一个文件中让子线程加载，肯定会选择模块化开发。通过工具或库把代码合并到一个文件中，然后把子线程的代码生成一个文件url。
解决方法：
(1)将动态生成的脚本转换成Blob对象。
(2)然后给这个Blob对象创建一个URL。
(3)最后将这个创建好的URL作为地址传给Worker的构造函数。

```
let script = 'console.log("hello world!");'
let workerBlob = new Blob([script], { type: "text/javascript" });
let url = URL.createObjectURL(workerBlob);
let worker = new Worker(url);
```

### 2、访问限制

Worker子线程所在的全局对象，与主线程不在同一个上下文环境，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象，global对象的指向有变更，window需要改写成self，不能执行alert()方法和confirm()等方法，只能读取部分navigator对象内的数据。另外chrome的console.log()倒是可以使用，也支持debugger断点，增加调试的便利性。

### 3、使用异步

Worker子线程中可以使用XMLHttpRequest 对象发出 AJAX 请求，可以使用setTimeout() setInterval()方法，也可使用websocket进行持续链接。也可以通过importScripts(url)加载另外的脚本文件，但是仍然不能跨域。

## 应用场景：

### 1、使用专用线程进行数学运算

Web Worke设计的初衷就是用来做计算耗时任务，大数据的处理，而这种计算放在worker中并不会中断前台用户的操作，避免代码卡顿带来不必要的用户体验。例如处理ajax返回的大批量数据，读取用户上传文件，计算MD5，canvas的位图的过滤，分析视频和声频文件等。worker中除了缺失了DOM和BOM操作能力以外，还是拥有非常强大的js逻辑运算处理的能力的，相当于nodejs一个级别的的运行环境。

### 2、高频的用户交互

高频的用户交互适用于根据用户的输入习惯、历史记录以及缓存等信息来协助用户完成输入的纠错、校正功能等类似场景，用户频繁输入的响应处理同样可以考虑放在web worker中执行。例如，我们可以 做一个像Word一样的应用：当用户打字时，后台立即在词典中进行查找，帮助用户自动纠错等等。

### 3、数据的预取

对于一些有大量数据的前后台交互产品，可以新开一个线程专门用来进行数据的预取和缓冲数据，worker可以用在本地web数据库的行写入和更改，长时间持续的运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断，也有利于随时响应主线程的通信。也可以配合XMLHttpRequest和websocket进行不断开的通信，实现守卫进程。

## 兼容性

![img](http://pic1.zhoujie16.cn/squares.svg)

总体来说，兼容性还是不错的， 移动端可以放心使用，桌面端要求不高的话，也可以使用。

## superWorker

为了更方便快捷的使用web worker，我们封装了一个工具，可以通过模块化的方式编写运行在web worker中的脚本，避免同源策略，减少服务端发送一个额外的url请求，无需了解web worker，就像使用setTimeout一样，快速使用superWorker，提升你的编码效率和运行效率，它有以下优点：
1、原生JS实现，无任何依赖库。
2、简单快速，摈弃繁琐的创建文件、绑定事件，实现无侵入、无感知运行新线程的代码。
3、返回Promise类型的数据，支持链式调用，清晰明了。
4、支持多种方式新建worker，包括匿名函数、函数列表、文本文件、html片段、url、类，方便快捷。
5、gzipped压缩后仅仅 1.2kb。

### 使用教程：

```
import superWorker from 'superWorker'
let worker = superWorker(function (a, b) {
    // 子线程中要运行的代码
    return a + b;
});
worker.start(1, 2).then((r)=>console.log(r)); // 3
```

用法

```
superWorker（code， [type]）
```

参数

```
code：运行的代码， type（非必须）：代码类型，目前支持0、1、2、3、4。

```

### 实现原理：

先进行源代码转文件：

```
let workerBlob = new Blob(code, { type: "text/javascript" });
let url = URL.createObjectURL(workerBlob);

```

对类型拆分，code参数支持传入匿名函数、函数列表、文本文件、url、HTML内嵌标签、类等功能，首先对传入的代码进行分类匹配，字符串化，然后进行拼接运行

```
code = `(${Function.prototype.toString.call(code)})(${exportsObjName})`;

```

 对于传入的方法，分别在主线程中的exports对象进行标记，和worker子线程中的exportsObjName对象中进行赋值。对于ES6 模块化的代码，进行过滤转译。

```
// 处理 \nexport default function xxx(){}  => exports.default = true; exportsObjName.default = function xx(){}
code = code.replace(/^(\s*)export\s+default\s+/m, (s, before) => {
    exports.default = true;
    return `${before}${exportsObjName}.default=`;
});

```

 形成主线程exports和子线程exportsObjName中的方法进行一一对应。

worker主线程与主线程进行通讯则是仍然需要通过postMessage方法和onmessage回调事件来进行，这个我们统一进行了双向绑定，分别对主线程和子线程执行setup。

```
function setup(ctx, pmMethods, callbacks) {
    ctx.addEventListener('message', ({ data }) => {
    // ……
    })
}

```

 在主线程中对worker封装了一些快捷的方法，比如关闭线程：

```
worker.terminate = () => {
    URL.revokeObjectURL(url);
    term.call(this);
};

```

 并把子线程拥有的方法、属性，暴露出来，方便主线程通过传递参数调用。

```
worker.expose = methodName => {
    worker[i] = function () {
        return worker['call'](methodName, [].slice.call(arguments));
    };
};

```

 大致如下图：
![img](http://pic1.zhoujie16.cn/squares.svg)

欢迎小伙伴们使用以及批评指正。有问题多多反馈，多多交流。

## 小结

对于web worker这项新技术，无论在PC还是在移动web，都很实用，腾讯新闻前端组进行了广泛的尝试，Web Worker 的实现为前端程序带来了后台计算的能力，实现了主 UI 线程与复杂计运算线程的分离，从而极大减轻了因计算量大而造成 UI 阻塞而出现的界面渲染卡、掉帧的情况，并且更大程度地利用了终端硬件的性能。superWorker能解决掉事件绑定，同源策略等繁琐的问题，它目前最大的问题在于不兼容IE9，在兼容性要求不是那么严格的地方，尽可能的使用吧！

![img](http://pic1.zhoujie16.cn/squares.svg)
