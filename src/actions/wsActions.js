import io from 'socket.io-client';
import { WS_SERVER_URL } from '../config';

export const LOGIN_WS_REQUEST = 'LOGIN_WS_REQUEST';
export const LOGIN_WS_SUCCESS = 'LOGIN_WS_SUCCESS';
export const LOGIN_WS_FAILURE = 'LOGIN_WS_FAILURE';
export const LOGOUT_WS = 'LOGOUT_WS';

export const WS_MESSAGE = 'WS_MESSAGE';
export const WS_MESSAGES = 'WS_MESSAGES';
export const WS_JOIN = 'WS_JOIN';
export const WS_LEAVE = 'WS_LEAVE';
export const WS_ERROR = 'WS_ERROR';
export const WS_MESSAGE_CHANGED = 'WS_MESSAGE_CHANGED';
export const WS_MESSAGE_DELETED = 'WS_MESSAGE_DELETED';

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const typesWS = [
  'message',
  'join',
  'leave',
  'error',
  'messages',
  'message_changed',
  'message_deleted',
]

let socket;

export const connectWsToStore = dispatch => {
  typesWS.forEach(type =>
    socket.on(type, (payload) =>
      dispatch({ type: `WS_${type.toUpperCase()}`, payload })));
}

export const emit = (type, payload) =>
  socket.emit(type, payload);

export const sendMessage = (messageText) => {
  messageText = messageText.trim();
  if (messageText) {
    emit('message', messageText)
  }
}

function loginWsRequest() {
  return {
    type: LOGIN_WS_REQUEST
  }
}

function loginWsSuccess() {
  return {
    type: LOGIN_WS_SUCCESS,
  }
}

function loginWsFailure(error) {
  return {
    type: LOGIN_WS_FAILURE,
    payload: { error }
  }
}

export const logoutWS = () => dispatch => {
  socket.disconnect();
  dispatch({
    type: LOGOUT_WS
  })
}

export const getWsMessages = (cutoff, limitCount) => {
  const filter = {
    cutoff: cutoff || new Date(),
    limitCount: limitCount || 10
  }
  emit('get messages', filter);
}

export const editWsMessage = ({msgId, msgText}) => {
  emit('put message', {msgId, msgText})
}

export const deleteWsMessage = ({msgId}) => {
  emit('delete message', {msgId})
}

export const initWS = (data, store) => dispatch => {
  try {
    dispatch(loginWsRequest());
    socket = io(WS_SERVER_URL);
    socket.on('connect', () => {
      connectWsToStore(dispatch)
      socket.emit('authenticate', { token: data.token })
        .once('authenticated', () => dispatch(
          loginWsSuccess()))
        .once('unauthorized', (msg) => dispatch(
          loginWsFailure("unauthorized: " + JSON.stringify(msg.data))))
        .once('join', () => {
          getWsMessages();
        })
    });
  } catch (error) {
    dispatch(loginWsFailure(error));
  }
}
