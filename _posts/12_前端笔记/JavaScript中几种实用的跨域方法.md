---
title: JavaScript中几种实用的跨域方法
date: 2019-03-01 10:26:37
tags:
categories: 前端
column_id: 12
---

这里说的js跨域是指通过js在不同的域之间进行数据传输或通信，比如用ajax向一个不同的域请求数据，或者通过js获取页面中不同域的框架中(iframe)的数据。只要协议、域名、端口有任何一个不同，都被当作是不同的域。

要解决跨域的问题，我们可以使用以下几种方法：

**1、通过jsonp跨域**

script标签是不受同源策略影响的，它可以引入来自任何地方的js文件。 
而jsonp的原理就是，在客户端和服务端定义一个函数，当客户端发起一个请求时，服务端返回一段javascript代码，其中调用了在客户端定义的函数，并将相应的数据作为参数传入该函数。

服务端获取到jsonp_callback传递的函数名jsonp_cb，返回一段对该函数调用的js代码

```javascript
function jsonp_cb(data) {
  console.log(data);
}

function ajax() {
  var url = "http://xx.com/test.php?jsonp_callback=jsonp_cb";
  var script = document.createElement('script');
  // 发送请求
  script.src = url;
  document.head.appendChild(script);
}

ajax()
```

**2、img ping**

img标签也是没有跨域限制的，但它只能用来发送GET请求，且无法获取服务端的响应文本，可以利用它实现一些简单的、单向的跨域通信，例如跟踪用户的点击

```javascript
var img = new Image();
img.onload = function () {
  console.log('done')
  img.onload = null;
  img = null;
}
img.src = "http://xx/xx.gif"
```

**3、使用window.name来进行跨域**

window对象拥有name属性，它有一个特点：相同协议下，在一个页面中，不随URL的改变而改变 
示例代码

```javascript
window.name = 'string' // 字符串，一般允许的最大值为2Mconsole.log(window.name)location = 'http://funteas.com/'
```

此时，在控制台输入window.name，结果依然是”string”

```javascript
window.name // "string"
```

window.name的值只能是字符串，任何其他类型的值都会“转化”为字符串 
例如

```javascript
window.name = function(){}
console.log(window.name)// "function(){}"
```

通过window.name实现跨域也很简单，iframe拥有contentWindow属性，其指向该iframe的window对象的引用，如果在iframe的src指向的页面中设置window.name值，那么就可以通过iframe.contentWindow.name就可以拿到这个值了

```javascript
var url = "http://funteas.com/lab/windowName";
var iframe = document.createElement('iframe')
iframe.onload = function(){    
    var data = iframe.contentWindow.name
    console.log(data)
}
iframe.src = urldocument.body.appendChild(iframe)
```

然而，chrome会提示你跨域了！ 
而我们已经知道window.name不随URL的改变而改版，也就是说，onload时，已经获取到了name，只不过因为不同源，当前页面的脚本无法拿到iframe.contentWindow.name，此时只需要把iframe.src改为同源即可

```javascript
var url = "http://funteas.com/lab/windowName";
var iframe = document.createElement('iframe')
iframe.onload = function(){
    iframe.src = 'favicon.ico';
    var data = iframe.contentWindow.name
    console.log(data)
}
iframe.src = urldocument.body.appendChild(iframe)
```

刷新页面，你会发现iframe不断刷新，这是因为每次onload，iframe的src被修改，然后再次触发onload，从而导致iframe循环刷新，修改下即可

```javascript
var url = "http://funteas.com/lab/windowName";
var iframe = document.createElement('iframe')
var state = true;
iframe.onload = function(){
    if(state === true){
        iframe.src = 'favicon.ico';
        state = false;
    }else if(state === false){
        state = null
        var data = iframe.contentWindow.name
        console.log(data)
    }}
iframe.src = urldocument.body.appendChild(iframe)
```

上面请求的是一个静态页面，而服务端通常需要的是动态数据

```php
echo '<script> window.name = "{\"name\":\"story\"}"</script>';
```

**4、使用HTML5中新引进的window.postMessage方法来跨域传送数据**

postMessage允许不同源之间的脚本进行通信，用法

```javascript
otherWindow.postMessage(message, targetOrigin);
```

- otherWindow 引用窗口 iframe.contentwindow 或 window.open返回的对象
- message 为要传递的数据
- targetOrigin 为目标源

```javascript
// http://127.0.0.1:80
var iframe = document.createElement('iframe')
iframe.onload = function () {
  var popup = iframe.contentWindow
  popup.postMessage("hello", "http://127.0.0.1:5000");
}
iframe.src = 'http://127.0.0.1:5000/lab/postMessage'
document.body.appendChild(iframe)
// 监听返回的
postMessagewindow.addEventListener("message", function (event) {
  if (event.origin !== "http://127.0.0.1:5000") return
  console.log(event.data)
}, false)
// http://127.0.0.1:5000/lab/postMessage
window.addEventListener("message", function (event) {
  // 验证消息来源   
  if (event.origin !== "http://127.0.0.1") return
  console.log(event.source);
  // 消息源 popup    
  console.log(event.origin);
  // 消息源URI https://secure.example.net   
  console.log(event.data);
  // 来自消息源的数据 hello    
  // 返回数据    
  var message = 'world';
  event.source.postMessage(message, event.origin);
}, false);

```

**5、CORS**

CORS（跨域资源共享）是一种跨域访问的机制，可以让AJAX实现跨域访问。它允许一个域上的脚本向另一个域提交跨域 AJAX 请求。实现此功能非常简单，只需由服务器发送一个响应标头即可。

```
Access-Control-Allow-Origin: * // 允许来自任何域的请求Access-Control-Allow-Origin: http://funteas.com/ // 仅允许来自http://funteas.com/的请求
```

当客户端的ajax请求的url为其他域时，对于支持CORS的浏览器，请求头会自动添加Origin，值为当前host

```javascript
var xhr = new XMLHttpRequest();
var url = 'http://bar.other/resources/public-data/';
xhr.open('GET', url, true);xhr.send();
```

CORS默认不发送cookie，如果要发送cookie，需要设置withCredentials

```javascript
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```

同时，服务端也要设置

```
Access-Control-Allow-Credentials: true
```

<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS" target="_blank">查看MDN关于CORS的介绍</a>

