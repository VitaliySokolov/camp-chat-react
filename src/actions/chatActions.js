import _ from 'lodash';

import * as mock_api from '../api/mock_server'
import * as api from '../api/api';

export const RECEIVE_ROOM_LIST = 'RECEIVE_ROOM_LIST';
export const TOGGLE_CHAT_ROOM = 'TOGGLE_CHAT_ROOM';
export const RECEIVE_CHAT_DATA = 'RECEIVE_CHAT_DATA';
export const ADD_CHAT_ROOM = 'ADD_CHAT_ROOM';
export const ERROR_ROOM_ACTION = 'ERROR_ROOM_ACTION';

export const REQUEST_ALL_USERS = 'REQUEST_ALL_USERS';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const FAIL_ALL_USERS = 'FAIL_ALL_USERS';

export const REQUEST_ALL_MESSAGES = 'REQUEST_ALL_MESSAGES';
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const FAIL_ALL_MESSAGES = 'FAIL_ALL_MESSAGES';

export const SELECT_MESSAGE = 'SELECT_MESSAGE';
export const UNSELECT_MESSAGE = 'UNSELECT_MESSAGE';

export const selectMessage = (message) => ({
  type: SELECT_MESSAGE,
  payload: { message }
});

export const unselectMessage = (message) => ({
  type: UNSELECT_MESSAGE,
  payload: { message }
})

export const getRoomList = () => dispatch => {
  // console.log('in getRoomList');
  mock_api.fetchAllRooms().then(rooms => dispatch({
    type: 'RECEIVE_ROOM_LIST',
    payload: { rooms: [].concat(rooms) }
  }));
}

const getChatRoom = roomId => dispatch => {
  mock_api.fetchChatRoomData(roomId)
    .then(data =>
      dispatch(
        {
          type: RECEIVE_CHAT_DATA,
          payload: data
        }));
}

export const toggleChatRoom = roomId => (dispatch, getState) => {
  const { roomId: oldRoomId } = getState();
  if (oldRoomId === roomId)
    return;
  dispatch({
    type: TOGGLE_CHAT_ROOM,
    payload: {
      roomId
    }
  });
  dispatch(getChatRoom(roomId));
}

export const addChatRoom = (title) => dispatch => {
  mock_api.addNewRoom(title)
    .then(data => {
      dispatch({
        type: ADD_CHAT_ROOM,
        payload: data
      });
      dispatch(toggleChatRoom(data.room.id));
    })
    .catch(error => {
      dispatch({
        type: ERROR_ROOM_ACTION,
        payload: error
      })
    });
}

export const getUserList = () => dispatch => {
  dispatch({
    type: REQUEST_ALL_USERS
  });
  api.getAllUsersRhcloud().then(users => {

    dispatch({
      type: RECEIVE_ALL_USERS,
      payload: { users }
    })
  }).catch(error => {
    dispatch({
      type: FAIL_ALL_USERS,
      payload: { error }
    })
  });
}

export const getMessageList = () => dispatch => {
  dispatch({
    type: REQUEST_ALL_MESSAGES
  });
  api.getAllMessagesRhcloud().then(messages => {
    dispatch({
      type: RECEIVE_ALL_MESSAGES,
      payload: { messages }
    });
    const users = messages.map(msg => msg.user).filter((user, index, self) => self.findIndex(u => u.username === user.username) === index)
    dispatch({
      type: RECEIVE_ALL_USERS,
      payload: { users }
    })
  }).catch(error => {
    dispatch({
      type: FAIL_ALL_MESSAGES,
      payload: { error }
    });
  });
}

// const fetchMessages = roomId => dispatch => {
//   dispatch({type: 'REQUEST_MESSAGES'});
//   return fetch(`${server}/messages/${roomId}`)
//     .then(res => res.json())
//     .then(json => dispatch(receiveMessages(roomId, json)));
// }

// export const getAllRooms = () => dispatch = {

// }
