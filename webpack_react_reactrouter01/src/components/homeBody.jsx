'use strict';

import React from 'react';
import { Link } from 'react-router'
import NavLink from './NavLink'

export default class HomeBody extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <NavLink to="/homeBodyList/123/holle">HomeBodyList</NavLink><br/>
                <NavLink to="/homeBodyList_T/123/holle">homeBodyList_T</NavLink>
                {this.props.children}
            </div>
        )
    }
}