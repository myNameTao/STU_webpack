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
                <NavLink to="/HomeBody/123/holle">HomeBodyList</NavLink>
                {this.props.children}
            </div>
        )
    }
}