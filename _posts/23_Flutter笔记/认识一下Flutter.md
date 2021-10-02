---
title: 认识一下Flutter
date: 2019-06-15 00:58:41
tags:
categories: flutter
column_id: 23
---

Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。



我觉的这句话的重点有三个：

- **跨平台：**现在Flutter至少可以跨4种平台，甚至支持嵌入式开发。我们常用的有Linux、Android、IOS，甚至可以在谷歌最新的操作系统上Fuchsia进行运行,经过第三方扩展，甚至可以跑在MacOS和Windows上，到目前为止，Flutter算是支持平台最多的框架了，良好的跨平台性，直接带来的好处就是减少开发成本。
- **原生用户界面：** 它是原生的，让我们的体验更好，性能更好。用官方的话讲就是平滑而自然的滑动效果和平台感知，为您的用户带来全新的体验。（可以看一下图片，这是Flutter的表现）
- **开源免费：**这个不用多说，我们只要学会并使用，这些都是免费的。这对于大公司是非常必要的，有人说你可以用破解版什么的....说明你还是小公司，我们公司的软件全部是正版，就更不用说操作系统和生产环境了，否则各种公司的侵权官司你都解决不了。



### 主流框架的对比

其实说这一块是带有主观性的，很容易遭到攻击，我也不敢保证我说的就完全正确，但是我还是给大家简单介绍一下。

- **Cordova：**个人认为Flutter可以完胜了，因为Cordova还是基于网页技术进行包装，利用插件的形式开发移动应用的，就这一点。无论是性能还是体验，Flutter都可以完胜了。
- **RN（React Native）：**RN的效率由于是将View编译成了原生View,所以效率上要比基于Cordova的HTML5高很多,但是它也有效率问题,RN的渲染机制是基于前端框架的考虑,复杂的UI渲染是需要依赖多个view叠加.比如我们渲染一个复杂的ListView,每一个小的控件,都是一个native的view,然后相互组合叠加.想想此时如果我们的list再需要滑动刷新,会有多少个对象需要渲染.所以也就有了前面所说的RN的列表方案不友好。
- **Flutter：**吸收了前两者的教训之后,在渲染技术上,选择了自己实现(GDI),由于有更好的可控性,使用了新的语言Dart,避免了RN的那种通过桥接器与Javascript通讯导致效率低下的问题,所以在性能方面比RN更高一筹;有经验的开发者可以打开Android手机开发者选项里面的显示边界布局,发现Flutter的布局是一个整体.说明Flutter的渲染没用使用原生控件进行渲染。



### 120fps超高性能

Flutter采用GPU渲染技术，所以性能极高。

Flutter编写的应用是可以达到120fps(每秒传输帧数),这也就是说，它完全可以胜任游戏的制作。而我们常说的RN的性能只能达到60fps，这也算是Flutter的一个超高竞争力吧。官方宣称Flutter甚至会超过原生性能。

如果你想迈入移动游戏领域，学习Flutter也是一个非常好的选择。

### [#](http://jspang.com/posts/2019/01/20/flutter-base.html#flutter生态情况)Flutter生态情况

由于有google这样的超级公司支持和推广，Flutter虽然刚出来没有多久，但是生态还是非常好的，中国也有了大量的Flutter爱好者，那技术胖也是其中之一。

我们先来看一下Flutter的插件情况。由法国人总结了一个Flutter的插件列表，我们可以打开看一下，里边的插件非常丰富。所以小伙伴们完全没有必要为Flutter的生态环境而担忧。

**github地址：**[https://github.com/Solido/awesome-flutter ](https://github.com/Solido/awesome-flutter)



目前阿里集团已经开始使用Flutter来进行开发了，比如我们经常使用的闲鱼，主要模块就是Flutter进行开发的。再给大家一个图片，这些效果都是Flutter进行开发的。

Flutter 的官方网站为我们提供了一个`showcase`,有兴趣的小伙伴可以点击下方链接进行查看。

Showcase地址：[https://github.com/Solido/awesome-flutter ](https://github.com/Solido/awesome-flutter)

小伙伴们，快点上车吧，一起来掌握这门新技能。