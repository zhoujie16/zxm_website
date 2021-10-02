---
title: react笔记-虚拟DOM与DOM-diff算法
date: 2018-10-26 23:48:28
tags:
categories: react
column_id: 12
---
### 1). 虚拟DOM是什么?


一个虚拟DOM(元素)是一个一般的js对象, 准确的说是一个对象树(倒立的)
虚拟DOM保存了真实DOM的层次关系和一些基本属性，与真实DOM一一对应
如果只是更新虚拟DOM, 页面是不会重绘的


### 2). Virtual DOM 算法的基本步骤


用JS对象树表示DOM树的结构；然后用这个树构建一个真正的DOM树插到文档当中
当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
把差异应用到真实DOM树上，视图就更新了


### 3). 进一步理解


Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。
可以类比 CPU 和硬盘，既然硬盘这么慢，我们就在它们之间加个缓存：既然 DOM 这么慢，我们就在它们 JS 和 DOM 之间加个缓存。CPU（JS）只操作内存（Virtual DOM），最后的时候再把变更写入硬盘（DOM）。


```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>04_component</title>
</head>
<body>
<div id="example"></div>
<br>

<script type="text/javascript" src="../js/react.development.js"></script>
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<script type="text/javascript" src="../js/babel.min.js"></script>
<script type="text/babel">
  /*
  验证:
  虚拟DOM+DOM Diff算法: 最小化页面重绘
  */

  class HelloWorld extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          date: new Date()
      }
    }

    componentDidMount () {
      setInterval(() => {
        this.setState({
            date: new Date()
        })
      }, 1000)
    }

    render () {
      console.log('render()')
      return (
        <p>
          Hello, <input type="text" placeholder="Your name here"/>!&nbsp;
          <span>It is {this.state.date.toTimeString()}</span>
        </p>
      )
    }
  }

  ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('example')
  )
</script>
</body>
</html>

```
