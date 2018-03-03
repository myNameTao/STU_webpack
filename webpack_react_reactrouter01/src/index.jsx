import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Redirect, IndexRedirect, browserHistory, hashHistory  } from 'react-router'
import Home from './components/home'
import HomeHeader from './components/homeHeader'
import HomeBody from './components/homeBody'
import HomeBodyList from './components/homeBodyList'
import homeBodyList_T from './components/homeBodyList_T'
import Footer from './components/footer'
import ShoopCar from './components/shoopCar'
import Message from './components/message'
import User from './components/user'
import Defalut from './components/Defalut'
require('./css/common.scss');


render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            {/*<IndexRoute component={Defalut}/>*/}
            {/*IndexRedirect访问根路由时重定向到某个子路由去*/}
            <IndexRedirect to="/HomeBody" />
            <Route path="/HomeHeader" component={HomeHeader} />
            <Route path="/HomeBody" component={HomeBody} >
                {/*<Route path="/HomeBody/:id(/:name)" component={HomeBodyList}/>*/}
                {/*<Redirect from="/homeBodyList/:id(/:name)" to="/homeBodyList_T/:id(/:name)"/>*/}
                <Route path="/homeBodyList/:id(/:name)" component={HomeBodyList}/>
                <Route path="/homeBodyList_T/:id(/:name)" component={homeBodyList_T}/>
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

