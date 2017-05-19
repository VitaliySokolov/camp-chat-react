import {
    CHAT_JOIN,
    CHAT_LEAVE,
    MESSAGE,
    MESSAGES
} from '../../shared/socket.io/events';

import {
    CLOSE_POPUP
} from '../actions/popupActions';

import { createReducer } from '../utils';

const popupInitialState = {
    message: '',
    open: false
};

export default createReducer(popupInitialState, {
    [CLOSE_POPUP]: state => ({
        ...state,
        open: false, message: ''
    }),
    [CHAT_JOIN]: (state, payload) => ({
        ...state,
        open: true,
        message: `${payload.user.username} joined the chat`
    }),
    [CHAT_LEAVE]: (state, payload) => ({
        ...state,
        open: true,
        message: `${payload.user.username} left the chat`
    }),
    [MESSAGE]: (state, payload) => ({
        ...state,
        open: true,
        message: `${payload.user.username} sent a message`
    }),
    [MESSAGES]: (state, payload) => ({
        ...state,
        open: true,
        message: payload.length !== 0
            ? `Loaded ${payload.messages.length} message(s).`
            : 'No messages'
    })
});
