'use strict';
import React from 'react';

export default class homeBodyList_T extends React.Component{
    constructor(props){
        super(props);
        // this.props.router.setRouteLeaveHook(
        //     this.props.route,
        //     this.routerWillLeave
        // )
    }

    // routerWillLeave() {
    //     return 'You have unsaved information, are you sure you want to leave this page?';
    // }

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