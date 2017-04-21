import { loginRhcloud, registerRhcloud } from '../api/api';
import { connectWS } from '../api/websocket';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export const handleLogin = (userInfo) => dispatch => {
  const { username, password } = userInfo
  dispatch({
    type: LOGIN_REQUEST
  });
  loginRhcloud(username, password).then(data => {
    console.log(data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
    //dispatch(handleLoginWS(data));
    connectWS(data);
  }).catch(error => {
    dispatch({
      type: LOGIN_FAIL,
      payload: { error }
    })
  });
}

export const handleLoginFromStorage = () => dispatch => {
  const token = localStorage.getItem('token');
  // console.log([token]);
  if (token) {
    const username = localStorage.getItem('username');
    const payload = { token, user: { username } }
    dispatch({
      type: LOGIN_SUCCESS,
      payload
    });
    connectWS({ token });
  } else {
    dispatch({
      type: 'FAIL_AUTOLOGIN'
    });
  }
}

export const handleRegister = (userInfo) => dispatch => {
  const { username, password, email } = userInfo
  dispatch({
    type: REGISTER_REQUEST
  });
  registerRhcloud(username, password, email).then(data => {
    console.log(data);
    (data !== 'OK') || Promise.reject(data);
    dispatch({
      type: REGISTER_SUCCESS
    });
  }).catch(error => {
    dispatch({
      type: REGISTER_FAIL,
      payload: { error }
    })
  });
}

// const hadleLoginWS = (data) => (dispatch, getState) => {
//   connectWS(data);
// }
