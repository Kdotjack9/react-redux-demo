import 'babel-polyfill';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// conststore = createStore(reducers, composeWithDevTools(
//   applyMiddleware(thunk)
// ));

const app = (
  <div>
    Hello World!
  </div>
);

ReactDOM.render(app, document.getElementById("app"));
