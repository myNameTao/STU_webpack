'use strict';
import React from 'react';
import { hashHistory } from 'react-router'

export default class HomeBodyList extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }

    skip(){
        hashHistory.push('homeBodyList/123/holle homeBodyList_T');
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
                    <li><span onClick={this.skip.bind(this)}>前往homeBodyList_T</span></li>

                </ul>
            </div>
        )
    }
}