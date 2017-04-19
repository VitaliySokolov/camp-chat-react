import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import App from './containers/app';
import './index.css';
// import { addNewRoom } from './api/mock_server';
// import { loginRhcloud, registerRhcloud, getAllUsersRhcloud, getAllMessagesRhcloud } from './api/api';
import { initWS } from './api/websocket';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
initWS(store);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
),
  document.getElementById('root')
);


// addNewRoom('new room');
// registerRhcloud('someone', 'qwerty', 'someone@somewhere.com');
// loginRhcloud('someone', 'qwety').then(data => console.log(data));

//getAllUsersRhcloud().then(data => console.log(data));
//getAllMessagesRhcloud().then(data => console.log(data));
//emit('join', {"user":"username": "someone"});
//emit('message', JSON.stringify({"msg": "test msg","user": {"username": "someone", "password": "qwerty"}, "time": +(new Date)});
//emit('leave', {"username": "someone"});
