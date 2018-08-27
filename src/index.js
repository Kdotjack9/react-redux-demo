import 'babel-polyfill';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import RootContainer from './containers/RootContainer';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <RootContainer/>
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));
