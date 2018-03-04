import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, hashHistory, browserHistory } from 'react-router'
import routes from './Route'; //路由配置
import './css/common.scss'

render((
    <Router routes={routes} history={hashHistory}/>
), document.getElementById('main'));

