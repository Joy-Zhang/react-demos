# React-Demos
ReactJS是一套组件化的前端框架。其基本理念是将一张网页划分为多个组件，小粒度的组件组合成为大粒度的组件，大粒度的组件最终组成应用。

本示例从0开始介绍了ReactJS的基本使用。为了降低入门门槛，入门示例没有使用模块化JS，没有使用ES2015，对于这两者的支持，请参考其他互联网的资料，或者本示例的后边部分。

## 目录
+ 0 - Start：ReactJS的三个核心API，createClass、createElement、render，引入JSX
+ 1 - Props & State：介绍ReactJS组件的核心概念Props和States
+ 2 - Lifecycle：介绍ReactJS组件的生命周期
+ 3 - Modular：ReactJS的模块化实践

## 0 - 开始
ReactJS的文件构成是两个文件，react.js和react-dom.js。其中react.js会注册全局变量React，react-dom.js会注册全局变量ReactDOM。
React是ReactJS的主要对象，其包括两个常用函数，createClass、createElement。ReactDOM只有一个函数，render。

React.createClass用来创建一个React组件，只有一个参数，传入一个对象，返回组件。传入对象的函数会作为组件的各个函数。其中最重要的函数是render，该函数返回组件的虚拟DOM结构。React.createClass也可以传入一个函数，该函数会被作为组件的render函数。
React.createElement用来创建一个React组件的实例，有至少两个参数。第一个参数是组件，可以是通过React.createClass创建的组件，在web环境下也可以是html元素的名称，比如'div'、'input'等。第二个参数是组件实例的属性对象，无属性可以传null，属性会在下一节介绍。从第三个参数开始，都是组件的子组件，可以传入组件实例，也可以传入组件实例的数组。
ReactDOM.render用来将组件实例挂到某个dom节点之下，有两个参数，第一个是组件的实例，第二个目标的dom节点。

在实际编程的过程中，会有形如
```javascript
React.createElement('div', null,
    React.createElement('div', null,
        React.createElement('div'),
        React.createElement('div')
    ),
    React.createElement('div', null),
    React.createElement('div', null)
)
```
这样复杂的啰嗦的情况，ReactJS提供了JSX格式的文件来简化。JSX使用类似HTML的结构来描述React.createElement的层级关系，比如前文的例子，对应的JSX为
```jsx
<div>
    <div>
        <div></div>
        <div></div>
    </div>
    <div></div>
    <div></div>
</div>
```

## 1 - Props & State
React的组件的界面有props与state两种用来绑定的值，props主要是由外部传入，state主要是由内部维护。props和state的变化都会导致组件重新绘制，因此，组件的展现是由props和state单向绑定的。
事件与样式都属于特殊的props。事件是onXXXX的一系列props，可以设为对应事件的回掉函数。样式由style和className两个属性决定，className就是html的class，格式也相同，style可以传入一个对象，对象中是将css的的-分词换成驼峰的键值对。

## 2 - 组件声明周期
在React.createClass中传入的对象可以包括一系列组件生命周期的函数。组件的生命周期按如下顺序执行：

1. getDefaultProps
1. getIntialState
1. componentWillMount
1. componentDidMount
1. componentWillReceiveProps
1. shouldComponentUpdate
1. componentWillUpdate
1. componentDidUpdate
1. componentWillReceiveProps
1. shouldComponentUpdate
1. componentWillUpdate
1. componentDidUpdate
1. componentWillUnmount

其中从9到12是会循环发生的直到组件被卸载（unmount），使用者可以在对应的生命周期函数中实现自己的业务逻辑。其中render是发生在componentWillMount与componentDidMount之间以及componentWillUpdate与componentDidUpdate之间的。

## 3 - 模块化
ReactJS的模块化工作主要有两个部分

+ 将jsx文件转换为js
+ 将js文件模块化

任何对ReactJS的模块化工作只要完成这两个部分即可。

针对前者，主要是通过前端构建工具来实现，比如fis、gulp、grunt、webpack等。针对后者，主要是一些常见js模块化手段，比如AMD（requirejs、esl）、CommonJS（webpack、cortex）等。
之所以webpack被广大人民群众视为开发react的神器，是因为webpack同时解决了这两个问题，简化了开发环境的配置，提高了开发效率。