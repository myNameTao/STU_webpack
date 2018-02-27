'use strict';

import React from 'react';
import { Link } from 'react-router'

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>主页面</h1>
                <ul>
                    <li><Link to="/HomeHeader">HomeHeader</Link></li>
                    <li><Link to="/HomeBody">HomeBody</Link></li>
                    <li><Link to="/Footer">Footer</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}