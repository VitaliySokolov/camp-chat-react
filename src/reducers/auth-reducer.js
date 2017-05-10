import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE
} from '../actions/userActions.js';

import { createReducer } from '../utils';

const authInitialState = {
  name: '',
  email: '',
  avatarLink: '',
  logging: false,
  isLogged: false,
  error: '',
  token: '',
  registering: false,
  isRegister: false
}

export default createReducer(authInitialState, {
  [LOGIN_REQUEST]: (state, payload) => ({ ...state, logging: true }),
  [LOGIN_SUCCESS]: (state, { user, token }) => ({
    ...state,
    logging: false,
    isLogged: true,
    name: user.username,
    error: '',
    token
  }),
  [LOGIN_FAILURE]: (state, { error }) => ({
    ...state,
    logging: false,
    isLogged: false,
    error
  }),
  [LOGOUT]: () => authInitialState,
  [REGISTER_REQUEST]: (state) => ({ ...state, registering: true }),
  [REGISTER_SUCCESS]: (state, payload) => ({
    ...state,
    registering: false,
    isRegister: true,
    error: ''
  }),
  [REGISTER_FAILURE]: (state, { error }) => ({
    ...state,
    registering: false,
    isRegister: false,
    error
  }),
});
