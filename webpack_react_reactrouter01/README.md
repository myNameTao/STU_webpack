更具官网例子、阮一峰博客学习react-router
    1、知识点有嵌套路由
    2、Link标签选中后的样式：activeStyle activeClassName
    3、传参数 :userName this.props.params.userName取出 (/:userName)这样的方式是可选的参数
    4、{this.props.children || <Defalut/>} 没有访问子路由时访问Default路由，同样也可以使用IndexRoute 这样{this.props.children}
    5、IndexLink 在path='/'，链接直接根路由/，就要使用IndexLink 不要使用Link
        对于根路由来说，activeStyle和activeClassName会失效，或者说总是生效，因为/会匹配任何子路由。而IndexLink组件会使用路径的精确匹配。
        另一种方法是使用Link组件的onlyActiveOnIndex属性，也能达到同样效果。
        实际上，IndexLink就是对Link组件的onlyActiveOnIndex属性的包装。
    6、browserHistory显示正常的路径，hashHistory路由将通过URL的hash部分（#）切换；
        使用browserHistory需要修改一些
            1、这种情况需要对服务器改造src="bundle.js"=>src="/bundle.js"，不然会找不到文件报404
                注意：在模板html中修改引入的样式文件、打包的js文件
            2、如果使用的是webpack-dev-server 就需要在配置文件中加--history-api-fallback参数
    7、Redirect 组件用于路由的跳转，即用户访问一个路由，会自动跳转到另一个路由。
        注意：重定向了一个新的地址，所以必须有一个对应的新的地址的Route，也就是在写<Redirect />同级要有重定向的<Route />
    8、IndexRedirect访问根路由时重定向到某个子路由去