import { loginRhcloud } from '../api/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

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
  }).catch(error => {
    dispatch({
      type: LOGIN_FAIL,
      error
    })
  });
}

