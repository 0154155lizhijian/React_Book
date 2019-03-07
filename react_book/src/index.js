import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux';
import { counter } from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
// import {del,add,addAsync} from './redux/actions/index'
import thunk from 'redux-thunk'
import "./index.css"

//引入reducer
const store = createStore(counter, compose(applyMiddleware(thunk), composeWithDevTools()));
function listen() {
    ReactDOM.render(
        <Provider store={store}>
            <Index></Index>
        </Provider>
        , document.getElementById('root'));
}
listen()
store.subscribe(listen)


serviceWorker.unregister();
