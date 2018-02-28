import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './components/home'
import HomeHeader from './components/homeHeader'
import HomeBody from './components/homeBody'
import HomeBodyList from './components/homeBodyList'
import Footer from './components/footer'
import ShoopCar from './components/shoopCar'
import Message from './components/message'
import User from './components/user'
require('./css/common.scss');


render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <Route path="/HomeHeader" component={HomeHeader} />
            <Route path="/HomeBody" component={HomeBody} >
                <Route path="/HomeBody/HomeBodyList/:id(/:name)" component={HomeBodyList}/>
            </Route>
            <Route path="/Footer" component={Footer} />
        </Route>
        <Route path="/ShoopCar" component={ShoopCar}>

        </Route>
        <Route path="/Message" component={Message}>

        </Route>
        <Route path="/User" component={User}>

        </Route>
        <Route path="*" component={User}>

        </Route>
    </Router>
), document.getElementById('main'));

