import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const todoArray = [{item: "Learn Angular" , checkbool: false}, {item: "Work on Capstone Project", checkbool: false}, {item: "Appy for Jobs" ,checkbool: false}]



ReactDOM.render(<App todoArray= {todoArray} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
