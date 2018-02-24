/**
 * Created by Administrator on 2018-02-09.
 */
import './css/main.scss';
import generateText from './sub';
import $ from 'jquery'

let app  = document.createElement('div');
app.innerHTML = '<h1>Hello World it</h1>';
document.querySelector('#main').appendChild(app);
app.appendChild(generateText());