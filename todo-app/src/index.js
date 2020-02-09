import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import MainReducer from './reducers/mainReducer';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </ Provider>,
    document.querySelector('#root'));
