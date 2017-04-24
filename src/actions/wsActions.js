import io from 'socket.io-client';
import { WS_SERVER_URL } from '../config';

export const LOGIN_WS_REQUEST = 'LOGIN_WS_REQUEST';
export const LOGIN_WS_SUCCESS = 'LOGIN_WS_SUCCESS';
export const LOGIN_WS_FAILURE = 'LOGIN_WS_FAILURE';
export const LOGOUT_WS = 'LOGOUT_WS';

export const typesWS = [
  'message',
  'join',
  'leave'
]

let socket;

export const connectWsToStore = dispatch => {
  typesWS.forEach(type =>
    socket.on(type, (payload) =>
      dispatch({ type, payload })));
}

export const emit = (type, payload) =>
  socket.emit(type, payload);

function loginWsRequest() {
  return {
    type: LOGIN_WS_REQUEST
  }
}

function loginWsSuccess(data) {
  return {
    type: LOGIN_WS_SUCCESS,
    payload: data
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

export const initWS = (data, store) => dispatch => {
  try {
    dispatch(loginWsRequest());
    socket = io(WS_SERVER_URL);
    socket.on('connect', () => {
      connectWsToStore(dispatch)
      socket.emit('authenticate', { token: data.token });
      socket.on('join', (jdata) => {
        const { user } = jdata;
        if (user.username === data.user.username) {
          dispatch(loginWsSuccess(jdata))
        } else {
          dispatch(loginWsFailure('some went wrong'));
        }
      })
    });
  } catch (e) {
    dispatch(loginWsFailure(e));
  }
}
