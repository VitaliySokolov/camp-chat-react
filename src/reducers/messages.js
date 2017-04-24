import {
  RECEIVE_CHAT_DATA,
  RECEIVE_ALL_MESSAGES
} from '../actions/chatActions';

import {getMaxIndex} from '../utils';


const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHAT_DATA: {
      const { messages } = action.payload;
      return messages
    }
    case RECEIVE_ALL_MESSAGES: {
      const { messages } = action.payload;
      const modMsg = messages.map((message, index) => {
        return {
          id: index,
          text: message.msg ? message.msg.msg || message.msg : "",
          author: message.user,
          time: message.time
        }
      });
      return modMsg;
    }
    case 'message': {
      const maxIndex = getMaxIndex(state);
      const message = action.payload;
      // console.log(state);
      return [...state, {
        id: maxIndex + 1,
        text: message.msg.msg || message.msg,
        author: message.user,
        time: message.time
      }];
    }
    case 'join': {
      const maxIndex = getMaxIndex(state);
      const message = action.payload;
      return [...state, {
        id: maxIndex + 1,
        text: `${message.user.username} joined chat`,
        author: 'robot',
        time: message.time
      }];
    }
    case 'leave': {
      const maxIndex = getMaxIndex(state);
      const message = action.payload;
      return [...state, {
        id: maxIndex + 1,
        text: `${message.user.username} leaved chat`,
        author: 'robot',
        time: message.time
      }];
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
