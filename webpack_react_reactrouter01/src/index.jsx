import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './components/home'
import HomeHeader from './components/homeHeader'
import HomeBody from './components/homeBody'
import Footer from './components/footer'
import ShoopCar from './components/shoopCar'
import Message from './components/message'
import User from './components/user'

import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <Route path="/HomeHeader" compontent={HomeHeader} />
            <Route path="/HomeBody" compontent={HomeBody} />
            <Route path="/Footer" compontent={Footer} />
        </Route>
        <Route path="/App" component={App}>
            <Route path="/Repos" component={Repos}/>
            <Route path="/About" component={About}/>
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

