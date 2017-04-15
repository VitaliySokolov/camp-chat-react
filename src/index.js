import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import App from './containers/app';
import './index.css';
// import { getAllRooms } from './api/mock_server';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
),
  document.getElementById('root')
);
