'use strict';
import React from 'react';

export default class HomeBodyList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ul>
                    <li>id:{this.props.params.id}</li>
                    <li>name:{this.props.params.name}</li>
                    <li>服装</li>
                    <li>服装</li>
                    <li>服装</li>
                    <li>服装</li>
                    <li>服装</li>
                    <li>服装</li>
                </ul>
            </div>
        )
    }
}