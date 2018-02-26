'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        };
        this.handleSearch = this.handleSearch.bind(this);//没有在元素标签绑定this，初始化的时候就要绑定
    }

    handleSearch(){
        // let name  = ReactDOM.findDOMNode(this.refs.name).value; //过时的写法
        let name  = this.inputSearch.value;
        // let name  = this.state.value;//受控组件
        if(name === ''){
            return;
        }
        this.props.sendAction(name);
    }
    //受控组件
    inputChange(even){
        this.setState({
            value: even.target.value
        })
    }
    render(){
        return(
            <div>
                {
                    // value={this.state.value} onChange={this.inputChange.bind(this)} 受控组件
                    // ref="name"使用findDOMNode不推荐
                    //ref={input => this.inputSearch = input} 使用非受控组件 defaulrValue指定默认值
                    //单选和多选 defaultChecked

                }
                <input type="text"  ref={input => this.inputSearch = input} placeholder="enter the name you wanna search"/>
                <button onClick={this.handleSearch}>Search</button>
            </div>
        )
    }
}