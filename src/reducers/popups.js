import {
  WS_JOIN,
  WS_LEAVE,
  WS_MESSAGE,
  WS_MESSAGES
} from '../actions/wsActions';

import {
  REQUEST_CLOSE
} from '../actions/popupActions';

import { createReducer } from '../utils';

const popupInitialState = {
  message: '',
  open: false,
}

export default createReducer(popupInitialState, {
  [REQUEST_CLOSE]: state => ({...state,
    open: false, message: ''}),
  [WS_JOIN]: (state, payload) => ({...state,
    open: true,
    message: `${payload.user.username} joined the chat`}),
  [WS_LEAVE]: (state, payload) => ({...state,
    open: true,
    message: `${payload.user.username} left the chat`}),
  [WS_MESSAGE]: (state, payload) => ({...state,
    open: true,
    message: `${payload.user.username} sent a message`
  }),
  [WS_MESSAGES]: (state, payload) => ({...state,
    open: true,
    message: (payload.length !== 0) ?
    `Loading ${payload.length} message(s).` :
    'No more messages'
  })
});
