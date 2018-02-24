/**
 *程序入口
 */
import React from 'react';
import ReactDOM,{render} from 'react-dom';
import Main from './components/main';

class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        //JSX here!
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                </section>
            </div>
        )
    }
};

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);