'use strict';

import React from 'react';
import { Link } from 'react-router'
import NavLink from './NavLink'

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
                    <li><Link to="/HomeHeader" activeStyle={{color:'red'}}>HomeHeader</Link></li>
                    <li><NavLink to="/HomeBody" >HomeBody</NavLink></li>
                    <li><Link to="/Footer" activeClassName="lk-HomeBody">Footer</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}