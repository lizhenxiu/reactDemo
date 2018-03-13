###
npm run start

###react-router-dom
npm i react-router-dom -S

`Switch 只渲染出第一个与当前访问地址匹配的 <Route> 或 <Redirect>。渲染出第一个匹配的路由`


###语法
1.PureComponent/Component，对于拥有内部state，使用生命周期的函数的组件，我们可以使用二者之一，但是大部分情况下，我更推荐使用PureComponent，因为它提供了更好的性能，同时强制你使用不可变的对象，保持良好的编程习惯。

PureComponent：改变了生命周期方法shouldComponentUpdate，并且它会自动检查组件是否需要重新渲染。这时，只有PureComponent检测到state或者props发生变化时，PureComponent才会调用render方法