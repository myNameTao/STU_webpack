'use strict';
import React from 'react';
import Search from './search';
import Plist from './plist';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {keyword: ""};
        //this.refreshKeyword = this.refreshKeyword.bind(this);//在元素标签绑定this了，初始化的时候就可以不需要绑定this了
    }
    refreshKeyword(name) {
        this.setState({keyword: name});
    }
    render(){
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search sendAction={this.refreshKeyword.bind(this)}/>
                </section>
                <Plist keyword={this.state.keyword}/>
            </div>
        )
    }
}
