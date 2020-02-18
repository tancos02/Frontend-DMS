import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router>
            <App />
        </Router>,
    </Provider>, 
    document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
