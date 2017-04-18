import { combineReducers } from 'redux';

import rooms from './rooms';
import messages from './messages';
import users from './users';

import {
  TOGGLE_CHAT_ROOM
} from '../actions/chatActions';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/userActions.js';

const roomId = (state = null, action) => {
  switch (action.type) {
    case TOGGLE_CHAT_ROOM: {
      const { roomId } = action.payload;
      return (state !== roomId) ? roomId : state;
    }
    default:
      return state
  }
}

const userInitialState = {
  name: '',
  email: '',
  avatarLink: '',
  logging: false,
  error: '',
  token: ''
}
const user = (state = userInitialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, logging: true};
    case LOGIN_SUCCESS:
      return {...state, logging: false,
        name: action.payload.user.username,
        email: action.payload.user.email,
        token: action.payload.token
      };
    case LOGIN_FAIL:
      return {...state, logging: false, error: action.payload.error};
    default:
      return state;
  }
}

export default combineReducers({
  roomId,
  user,
  rooms,
  messages,
  users
});


// import { usersReducer } from './users';
// import { messagesReducer } from './messages';
// import chatReducer from './chat';
// import {
//   TOGGLE_CHAT_ROOM,
//   RECEIVE_CHAT_DATA,
//   RECEIVE_ROOM_LIST
// } from '../actions/chatActions';

// const outside_data = {
//   messages: [
//     {
//       id: 1,
//       authorId: 1,
//       roomId: 1,
//       text: 'Hello'
//     },
//     {
//       id: 2,
//       authorId: 2,
//       roomId: 1,
//       text: 'Hi'
//     },
//     {
//       id: 3,
//       authorId: 1,
//       roomId: 2,
//       text: 'How are you?'
//     },
//     {
//       id: 4,
//       authorId: 1,
//       roomId: 2,
//       text: 'Fine!'
//     },
//     {
//       id: 5,
//       authorId: 3,
//       roomId: 3,
//       text: 'Anybody???'
//     }

//   ],
//   users: [
//     {
//       id: 1,
//       name: 'John'
//     }, {
//       id: 2,
//       name: 'Mike'
//     }, {
//       id: 3,
//       name: 'Mary'
//     }]
// }

// const initialState = {
//   room: null,
//   roomId: null,
//   user: null,
//   messages: [],
//   users: [],
//   rooms: []
//   // [
//   //   {
//   //     id: 1,
//   //     title: 'first'
//   //   }, {
//   //     id: 2,
//   //     title: 'second'
//   //   }, {
//   //     id: 3,
//   //     title: 'third'
//   //   }],
// }


// // action type
// const SELECT_CHAT_ROOM = 'SELECT_CHAT_ROOM';

// // action
// const selectRoomRoom = roomId => {
//   return {
//     type: SELECT_CHAT_ROOM,
//     roomId
//   }
// }

// // reducer
// const selectedRoomRoom = (state = "room1", action) => {
//   switch (action.type) {
//     case SELECT_CHAT_ROOM:
//         return action.roomId;

//     default:
//       return state;
//   }
// }