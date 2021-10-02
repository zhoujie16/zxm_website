---
title: react笔记-组件的生命周期
date: 2018-10-26 23:40:07
tags:
categories: react
---
1. 组件的三个生命周期状态:
	Mount：插入真实 DOM
	Update：被重新渲染
	Unmount：被移出真实 DOM
2. 生命周期流程:
	* 第一次初始化显示: ReactDOM.render(<Xxx/>, containDom)
		constructor()
		componentWillMount() : 将要插入回调
		render() : 用于插入虚拟DOM回调
		componentDidMount() : 已经插入回调
	* 每次更新state: this.setState({})
	    componentWillReceiveProps(): 接收父组件新的属性
	    componentWillUpdate() : 将要更新回调
	    render() : 更新(重新渲染)
	    componentDidUpdate() : 已经更新回调
	* 删除组件: ReactDOM.unmountComponentAtNode(div): 移除组件
		componentWillUnmount() : 组件将要被移除回调
3. 常用的方法
	render(): 必须重写, 返回一个自定义的虚拟DOM
  	constructor(): 初始化状态, 绑定this(可以箭头函数代替)
  	componentDidMount() : 只执行一次, 已经在dom树中, 适合启动/设置一些监听
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>10_ComponentLife</title>
</head>
<body>
<div id="example"></div>

<script type="text/javascript" src="../js/react.development.js"></script>
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<script type="text/javascript" src="../js/babel.min.js"></script>
<script type="text/babel">
  /*
  需求: 自定义组件
    1. 让指定的文本做显示/隐藏的动画
    2. 切换时间为2S
    3. 点击按钮从界面中移除组件界面
   */
  class Fade extends React.Component {

    constructor (props) {
      super(props)
      console.log('constructor(): 创建组件对象')
      this.state = {
        opacity: 1
      }
      this.removeComponent = this.removeComponent.bind(this)
    }

    componentWillMount () {
      console.log('componentWillMount(): 初始化将要挂载')
    }

    componentDidMount () {// 在此方法中启动定时器/绑定监听/发送ajax请求
      console.log('componentDidMount(): 初始化已经挂载')
      // 保存到当前组件对象中
      this.intervalId = setInterval(function () {
        console.log('--------')
        // 得到当前opacity
        let {opacity} = this.state
        // 更新opacity
        opacity -= 0.1
        if(opacity<=0) {
          opacity = 1
        }
        // 更新状态
        this.setState({opacity})
      }.bind(this), 200)
    }

    componentWillUpdate () {
      console.log('componentWillUpdate(): 将要更新')
    }
    componentDidUpdate () {
      console.log('componentDidUpdate(): 已经更新')
    }

    componentWillUnmount () {// 清除定时器/解除监听
      console.log('componentWillUnmount(): 将要被移除')
      clearInterval(this.intervalId)
    }

    removeComponent () {
      ReactDOM.unmountComponentAtNode(document.getElementById('example'))
    }

    render() {
      console.log('render() 渲染组件')
      return (
        <div>
          <h2 style={{opacity:this.state.opacity}}>{this.props.content}</h2>
          <button onClick={this.removeComponent}>不活了</button>
        </div>
      )
    }
  }
  ReactDOM.render(<Fade content="react学不会, 怎么办?"/>, document.getElementById('example'))
</script>
</body>
</html>

```
