import * as api from '../api/mock_server'

export const RECEIVE_ROOM_LIST = 'RECEIVE_ROOM_LIST';
export const TOGGLE_CHAT_ROOM = 'TOGGLE_CHAT_ROOM';
export const RECEIVE_CHAT_DATA = 'RECEIVE_CHAT_DATA';
export const ADD_CHAT_ROOM = 'ADD_CHAT_ROOM';

const getRoomRoom = roomId => dispatch => {
  api.fetchChatRoomData(roomId)
    .then(data =>
      dispatch(
        {
          type: 'RECEIVE_CHAT_DATA',
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
  dispatch(getRoomRoom(roomId));
}

export const getRoomList = () => dispatch => {
  console.log('in getRoomList');
  api.fetchAllRooms().then(rooms => dispatch({
    type: 'RECEIVE_ROOM_LIST',
    payload: { rooms: rooms }
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
