###
npm run start

###react-router-dom
npm i react-router-dom -S

`Switch 只渲染出第一个与当前访问地址匹配的 <Route> 或 <Redirect>。渲染出第一个匹配的路由`


### 语法
1.PureComponent/Component，对于拥有内部state，使用生命周期的函数的组件，我们可以使用二者之一，但是大部分情况下，我更推荐使用PureComponent，因为它提供了更好的性能，同时强制你使用不可变的对象，保持良好的编程习惯。

PureComponent：改变了生命周期方法shouldComponentUpdate，并且它会自动检查组件是否需要重新渲染。这时，只有PureComponent检测到state或者props发生变化时，PureComponent才会调用render方法


#### 生命周期
实例化
首次实例化

getDefaultProps
getInitialState
componentWillMount
render
componentDidMount
实例化完成后的更新

getInitialState
componentWillMount
render
componentDidMount
存在期
组件已存在时的状态改变

componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
销毁&清理期
componentWillUnmount



#### match对象 
match是一个匹配路径参数的对象，它有一个属性params，里面的内容就是路径参数，除常用的params属性外，它还有url、path、isExact属性