
import {
  RECEIVE_ROOM_LIST,
  ADD_CHAT_ROOM
} from '../actions/chatActions';

const roomsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ROOM_LIST:
      return action.payload.rooms;
    case ADD_CHAT_ROOM:
      return state.concat(action.payload.room)
    default:
      return state;
  }
}

export default roomsReducer;

// const initialRoomsById = {
//   "room1": {
//     id: "room1",
//     title: 'first'
//   },
//   "room2": {
//     id: "room2",
//     title: 'second'
//   },
//   "room3": {
//     id: "room3",
//     title: 'third'
//   }
// };

// const initialAllRooms = [
//   "room1",
//   "room2",
//   "room3"
// ];

// function roomsById(state = initialRoomsById, action) {
//   switch (action.type) {
//     case ADD_CHAT_ROOM:
//       return state;

//     default:
//       return state;
//   }
// }

// function allRooms(state = initialAllRooms, action) {
//   switch (action.type) {
//     case ADD_CHAT_ROOM:
//       return state;

//     default:
//       return state;
//   }
// }

// const roomsReducer = combineReducers({
//   byId: roomsById,
//   allIds: allRooms
// });

// export default roomsReducer;
