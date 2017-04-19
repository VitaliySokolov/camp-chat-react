import * as api from '../api/mock_server'

export const RECEIVE_ROOM_LIST = 'RECEIVE_ROOM_LIST';
export const TOGGLE_CHAT_ROOM = 'TOGGLE_CHAT_ROOM';
export const RECEIVE_CHAT_DATA = 'RECEIVE_CHAT_DATA';
export const ADD_CHAT_ROOM = 'ADD_CHAT_ROOM';
export const ERROR_ROOM_ACTION = 'ERROR_ROOM_ACTION';

const getChatRoom = roomId => dispatch => {
  api.fetchChatRoomData(roomId)
    .then(data =>
      dispatch(
        {
          type: RECEIVE_CHAT_DATA,
          payload: data
        }));
}

export const addChatRoom = (title) => dispatch => {
  api.addNewRoom(title)
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

export const getRoomList = () => dispatch => {
  console.log('in getRoomList');
  api.fetchAllRooms().then(rooms => dispatch({
    type: 'RECEIVE_ROOM_LIST',
    payload: { rooms: [].concat(rooms) }
  }));
}

// const fetchMessages = roomId => dispatch => {
//   dispatch({type: 'REQUEST_MESSAGES'});
//   return fetch(`${server}/messages/${roomId}`)
//     .then(res => res.json())
//     .then(json => dispatch(receiveMessages(roomId, json)));
// }

// export const getAllRooms = () => dispatch = {

// }
