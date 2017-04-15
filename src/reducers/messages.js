import {
  RECEIVE_CHAT_DATA
} from '../actions/chatActioins';

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHAT_DATA: {
      const { messages } = action.payload;
      return messages
    }
    default:
      return state;
  }
}

export default messagesReducer;

// import { combineReducers } from 'redux';

// export const ADD_MESSAGE = 'ADD_MESSAGE';

// const initialMessagesById = {
//   "msg1": {
//     id: "msg1",
//     authorId: 1,
//     roomId: 1,
//     text: 'Hello'
//   },
//   "msg2": {
//     id: "msg2",
//     authorId: 2,
//     roomId: 1,
//     text: 'Hi'
//   },
//   "msg3": {
//     id: "msg3",
//     authorId: 1,
//     roomId: 2,
//     text: 'How are you?'
//   },
//   "msg4": {
//     id: "msg4",
//     authorId: 1,
//     roomId: 2,
//     text: 'Fine!'
//   },
//   "msg5": {
//     id: "msg5",
//     authorId: 3,
//     roomId: 3,
//     text: 'Anybody???'
//   }
// };

// const initialAllMessages = [
//   "msg1",
//   "msg2",
//   "msg3",
//   "msg4",
//   "msg5"
// ];

// function addMessageEntry(state, action) {
//   return { ...state };
// }

// function messagesById(state = initialMessagesById, action) {
//   switch (action.type) {
//     case ADD_MESSAGE:
//       return addMessageEntry(state, action);

//     default:
//       return state;
//   }
// }

// function addMessageId(state, action) {
//   const { payload } = action;
//   const { messageId } = payload;
//   return state.concat(messageId);
// }

// function allMessages(state = initialAllMessages, action) {
//   switch (action.type) {
//     case ADD_MESSAGE:
//       return addMessageId(state, action);

//     default:
//       return state;
//   }
// }

// const messagesReducer = combineReducers({
//   byId: messagesById,
//   allIds: allMessages
// });

// export default messagesReducer;
