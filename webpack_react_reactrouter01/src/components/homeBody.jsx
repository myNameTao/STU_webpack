'use strict';

import React from 'react';
import { Link } from 'react-router'

export default class HomeBody extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Link to="/HomeBodyList">HomeBodyList</Link>
            </div>
        )
    }
}