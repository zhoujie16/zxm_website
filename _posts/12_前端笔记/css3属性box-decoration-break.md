---
title: css3属性box-decoration-break
date: 2019-03-07 14:20:40
tags:
categories: 前端
column_id: 12
---
这两天接触到一个很有意思的 CSS 属性 -- `box-decoration-break`。下面就一起去一探究竟。

因为 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break) 上关于这个属性，没有中文文档，所以一直在想一个合理贴切的中文翻译。直译一下：

- box -- 盒，可以理解为元素盒模型
- decoration -- 装饰，理解为元素样式
- break -- 断行，参考`word-break` ，理解为断行时候的表现

那么，这个属性可以先理解为，元素在发生断行时其样式的表现形式。

> MDN 上英文释意为：The box-decoration-break CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages。大意是 box-decoration-break 属性规定了一个元素片段在发生折行/断行时，应该如何被渲染。

可选取值只有两个：

```
{
    box-decoration-break: slice;   // 默认取值
    box-decoration-break: clone;
}
```

## 换行示例

这个属性通常作用于内联元素。假设我们存在如下结构，并且给它添加一个边框：

```
<span>ABCDEFGHIJKLMN</span>
span {
    border: 2px solid #999;
}
```

嗯，效果如下，平平无奇：
![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7kz3arvj308y02074c.jpg)

好，接下来就是 break，我们把上面一行的文字断行，样式不变：

```
<span>ABCD <br/>EFG <br/> HI<br/> JKLMN</span>
```

得到如下结果：

![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7mi2kzhj303k07njrg.jpg)

O，可以看到，文字换行的同时，边框也随之变化，头尾两行都有 3 边边框，中间两行只有上下两边边框。如果将 4 行合起来，可以拼成图一，这个是正常的展示效果。

接下来，我们加上本文的主角 `box-decoration-break: clone`：

```
span {
    border: 2px solid #999;
+   box-decoration-break: clone;
}
```

生效后，我们将会得到这样的结果：

![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7mtbftkj303x07g0su.jpg)

## box-decoration-break: clone 使用小结

看到这里，我们已经可以大概理解这个属性的作用了：

**使用了 box-decoration-break: clone 的内联元素，如果存在折行显示，那么每一行都将拥有原本单行的所有完整样式**。

再看个例子加深下理解，存在如下结构，其使用了 `box-decoration-break: clone` 前后两种效果：

```
<span >每一行 <br/>样式 <br/> 都 <br/> 保持<br/> 完整独立</span>
```

![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7n3fjpqj30m80bct9w.jpg)

[CodePen Demo -- box-decoration-break](https://codepen.io/Chokcoco/pen/NJKoNq)点击预览

### box-decoration-break: clone 生效样式影响范围

当然，使用了 `box-decoration-break: clone` 的元素并非对每一个样式都会生效，只会作用于下列样式：

- background
- border
- border-image
- box-shadow
- clip-path
- margin
- padding
- Syntax

## box-decoration-break: clone 实际应用

接下来看看，有没有什么靠谱的实际应用场景。

### box-decoration-break: clone 实现文本选中效果

会有这样的场景，我们希望对一个多行文本中的特定一段文本进行着重展示。这个时候，我们可以通过 `<p>` 嵌套 `<span>` ，对 `<span>` 包裹的文字进行一些特定的展示。

譬如我们有这样一段文案：

```
<p>
The <span>box-decoration-break</span> CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages..Each box fragment is rendered independently with the <span>specified border, padding, and margin wrapping each fragment.</span> The border-radius, border-image, and box-shadow are applied to each <span>fragment independently.</span> 
</p>
```

其中，我们将需要强调的内容通过 `<span>` 标签包裹起来，赋予特定样式并且加上 `box-decoration-break: clone`，这样，无论强调文案是否换行，每一处的强调背景都是一致的：

```
p {
    font-size: 22px;
    line-height: 36px;
}

span {
    background-image: linear-gradient(135deg, deeppink, yellowgreen);
    color: #fff;
    padding: 2px 10px;
    border-radius: 50% 3em 50% 3em;
    box-decoration-break: clone;
}
```

得到如下效果：
![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7nxolstj30m8050gn0.jpg)

如果不加 `box-decoration-break: clone` 呢？那么如果存在换行，效果会大打折扣：

![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7oat7qdj30m804x3zx.jpg)

[CodePen Demo -- text-decoration-break 文本选中效果](https://codepen.io/Chokcoco/pen/rRaLqo)点击预览

### box-decoration-break 每行文字带特定边框

又会有这样的场景，我们希望每一行文案都带有特定的边框样式，像这样：
![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7ooa56jj30m804z75t.jpg)

怎么实现呢？也许可以每一行都是一个 `<p>`，每一行 `<p>` 设定上述样式。**但是如果文本内容不确定，容器的宽度也不确定呢**？

这种场景，使用 `box-decoration-break` 也非常便捷。当然这里有个小技巧，正常而言， `box-decoration-break: clone`只对 `inline` 元素生效，如果我们的文案像是这样包裹在 `<p>` 标签内：

```
<p>
The box-decoration-break CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages..Each box fragment is rendered independently with the specified border, padding, and margin wrapping each fragment. The border-radius, border-image, and box-shadow are applied to each fragment independently. 
</p>
```

要使 `box-decoration-break: clone` 对 `<p>` 生效，可以通过设定 `<p>` 的 `display: inline` 来实现。如此一来，要实现上述效果，我们只需要：

```
p {
    display: inline;
    box-decoration-break: clone;
    background:linear-gradient(110deg, deeppink 0%, deeppink 98%, transparent 98%, transparent 100%);
}

```

无论文本内容或者容器宽度如何变化，都能完美适配：

![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7ppinxcg30m807ohdo.gif)

[CodePen Demo -- box-decoration-break 每行文字带特定边框](https://codepen.io/Chokcoco/pen/gEbMGr?editors=1100)点击预览

### box-decoration-break 结合过渡动画

结合上面的内容，我们还可以考虑将 `box-decoration-break` 与过渡效果或者动画效果结合起来。

譬如，我们希望当我们 hover 文字内容的时候，一些重点需要展示的文字段落能够被强调展示，可能是这样：

![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7qh939pg30jd07ejz0.gif)

[CodePen Demo -- box-decoration-break 过渡动画](https://codepen.io/Chokcoco/pen/ZPGpmd)点击预览

又或者是这样：

![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7r7d3ywg30jd07eh1k.gif)

[CodePen Demo -- box-decoration-break 结合过渡动画](https://codepen.io/Chokcoco/pen/ZPGpmd)点击预览

你可以尝试点进 Demo ，然后去掉 `box-decoration-break: clone` ，会发现效果大打折扣。

## 兼容性

额，按照惯例兼容性应该都不太行。并且 MDN 也给出了这样的提示：

> This is an experimental technology. Check the Browser compatibility table carefully before using this in production.

看看 [Can I Use](https://caniuse.com/#search=box-decoration-break)，其实还好，除了 IE 系列全军覆没，所以可以考虑应用在移动端。即便这个属性不兼容，降级展示对页面不会造成什么影响：
![](http://pic1.zhoujie16.cn/006tKfTcly1g0u7ro8oq6j30m8092abe.jpg)

另外，本文中，给出的代码都是 `box-decoration-break: clone` ，CodePen 自带了 `autoprefixer` 实际中可能需要写成：

```
{
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
}

```

## 最后

国内看到了大漠老师和张鑫旭大大都已经写过这个属性，大家可以对比着看看，加深理解：

- [CSS/CSS3 box-decoration-break属性简介](https://www.zhangxinxu.com/wordpress/2019/01/css-css3-box-decoration-break/)
- [初探box-decoration-break](https://www.w3cplus.com/css3/multi-line-padded-text-css-box-decoration-break.html)

更多精彩 CSS 技术文章汇总在我的 [Github -- iCSS](https://github.com/chokcoco/iCSS) ，持续更新，欢迎点个 star 订阅收藏。

好了，本文到此结束，希望对你有帮助 :)

如果还有什么疑问或者建议，可以多多交流，原创文章，文笔有限，才疏学浅，文中若有不正之处，万望告知。
