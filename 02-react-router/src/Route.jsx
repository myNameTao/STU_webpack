'use strict';

import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, IndexRedirect, browserHistory, hashHistory  } from 'react-router'

const Home = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Home').default)
    }, 'Home')
};
const HomeHeader = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/HomeHeader').default)
    }, 'HomeHeader')
};
const HomeBody = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/HomeBody').default)
    }, 'HomeBody')
};
const HomeBodyList = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/HomeBodyList').default)
    }, 'HomeBodyList')
};
const homeBodyList_T = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/homeBodyList_T').default)
    }, 'homeBodyList_T')
};
const Footer = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Footer').default)
    }, 'Footer')
};
const ShoopCar = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/ShoopCar').default)
    }, 'ShoopCar')
};
const Message = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Message').default)
    }, 'Message')
};
const User = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/User').default)
    }, 'User')
};
const Defalut = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Defalut').default)
    }, 'Defalut')
};

/**
 * (路由根目录组件，显示当前符合条件的组件)
 *
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
    render(){
        return(
            <div>{this.props.children}</div>
        )
    }
}

const RouteConfig = (
    <Router path="/"  history={hashHistory}>
        <IndexRedirect to="/Home" />
        <Route path="/Home" getComponent={Home}>
            <IndexRoute getComponent={Defalut}/>
            <Route path="/HomeHeader" getComponent={HomeHeader} />
            <Route path="/HomeBody" getComponent={HomeBody} >
                {/*<Route path="/HomeBody/:id(/:name)" getComponent={HomeBodyList}/>*/}
                {/*<Redirect from="/homeBodyList/:id(/:name)" to="/homeBodyList_T/:id(/:name)"/>*/}
                <Route path="/homeBodyList/:id(/:name)" getComponent={HomeBodyList}/>
                <Route path="/homeBodyList_T/:id(/:name)" getComponent={homeBodyList_T}/>
            </Route>
            <Route path="/Footer" getComponent={Footer} />
        </Route>
        <Route path="/ShoopCar" getComponent={ShoopCar}/>
        <Route path="/Message" getComponent={Message}/>
        <Route path="/User" getComponent={User}/>
        <Route path="*" getComponent={User}/>
    </Router>
);

export default RouteConfig