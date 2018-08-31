import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Import this middleware for handling AJAX requests
import ReduxPromise from 'redux-promise';
// Import logger middleware
import createLogger from 'redux-logger';
import reducers from './reducers';

import App from './components/App';
import './styles/index.css';

// This applies middleware to the store
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, createLogger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
