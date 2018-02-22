/**
 * Created by Administrator on 2018-02-09.
 */
// // require('./main.css');
// require('./main.scss');
// let $ = require('jquery');
// let moment = require('moment');
// let sub = require('./sub.js');
// let app = document.createElement('div');
// app.innerHTML = '<h1>Hello World</h1>';
// app.appendChild(sub());
// document.body.appendChild(app);
// $('body').append('<p>look at me! now is ' + moment().format() + '</p>');
import './main.scss';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';

let app  = document.createElement('div');
// const myPromise = Promise.resolve(42);
// myPromise.then((number) => {
//     $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
// });
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());