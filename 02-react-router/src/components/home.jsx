'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'
import Defalut from './Defalut'

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>主页面</h1>
                <ul>
                    {
                        //Link 标签上使用activeStyle 就是选中之后的样式
                        //官网例子中05 <Link {...this.props} activeClassName='active'/> 可以建一个组件，这样就可以统一列表了，不用一个个添加
                    }
                    {/*链接直接根路由/这样的写法，即使没有访问此路由，它也会默认是active*/}
                    {/*<li><Link to="/" activeStyle={{color:'red'}}>Defalut</Link></li>*/}
                    {/*第一种使用IndexLink*/}
                    {/*<li><IndexLink to="/" activeStyle={{color:'red'}}>Defalut</IndexLink></li>*/}
                    {/*第二种是使用Link onlyActiveOnIndex={true}*/}
                    <li><Link to="/" activeStyle={{color:'red'}} onlyActiveOnIndex={true}>Defalut</Link></li>
                    <li><Link to="/HomeHeader" activeStyle={{color:'red'}} >HomeHeader</Link></li>
                    <li><NavLink to="/HomeBody" >HomeBody</NavLink></li>
                    <li><Link to="/Footer" activeClassName="lk-HomeBody">Footer</Link></li>
                </ul>
                {
                    //如果路由配置处使用 <IndexRoute component={Defalut} /> 此处就应该写{ this.props.children }
                }
                {/*{this.props.children  || <Defalut/>}*/}
                {this.props.children }
            </div>
        )
    }
}