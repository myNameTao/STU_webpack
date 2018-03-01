更具官网例子、阮一峰博客学习react-router
    1、知识点有嵌套路由
    2、Link标签选中后的样式：activeStyle activeClassName
    3、传参数 :userName this.props.params.userName取出 (/:userName)这样的方式是可选的参数
    4、{this.props.children || <Defalut/>} 没有访问子路由时访问Default路由，同样也可以使用IndexRoute 这样{this.props.children}
    5、IndexLink 在path='/'，链接直接根路由/，就要使用IndexLink 不要使用Link
        对于根路由来说，activeStyle和activeClassName会失效，或者说总是生效，因为/会匹配任何子路由。而IndexLink组件会使用路径的精确匹配。
        另一种方法是使用Link组件的onlyActiveOnIndex属性，也能达到同样效果。
        实际上，IndexLink就是对Link组件的onlyActiveOnIndex属性的包装。
