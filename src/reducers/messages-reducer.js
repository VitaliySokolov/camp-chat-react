import {
  RECEIVE_CHAT_DATA,
  RECEIVE_ALL_MESSAGES,
  REQUEST_ALL_MESSAGES,
  FAIL_ALL_MESSAGES
} from '../actions/chatActions';

import {
  WS_MESSAGE,
  WS_MESSAGES
} from '../actions/wsActions';

import { getMaxIndex } from '../utils';

const initMessage = {
  text: '',
  author: '',
  time: '',
}

const messageReduser = (state = initMessage, action) => {
  switch (action.type) {
    case WS_MESSAGE:
    case WS_MESSAGES:
      const message = action.payload;
      const modMsg = {
        id: message.id,
        author: message.user,
        text: message.msg,
        time: message.time,
      }
      return {...state, ...modMsg}
    default:
      return state
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHAT_DATA: {
      const { messages } = action.payload;
      return messages
    }
    case RECEIVE_ALL_MESSAGES: {
      const { messages } = action.payload;
      const modMsg = messages.map((message, index) => {
        const text = (typeof message.msg !== 'string') ? "" : message.msg
        return {
          id: index,
          text: text,
          author: message.user,
          time: message.time
        }
      });
      return modMsg;
    }
    case WS_MESSAGES:
      const messages = action.payload;
      if (messages.length === state.length) {
        return state;
      }
      const modMsg = messages.map((message, index) => {
        const text = (typeof message.msg !== 'string') ? "" : message.msg
        return {
          id: message.id || index,
          text: text,
          author: message.user,
          time: message.time
        }
      });
      return modMsg;

    case WS_MESSAGE: {
      const maxIndex = getMaxIndex(state);
      const message = action.payload;
      const text = (typeof message.msg !== 'string') ? "" : message.msg
      // console.log(state);
      return [...state, {
        id: message.id || maxIndex + 1,
        text: text, //message.msg.msg || message.msg.message || message.msg,
        author: message.user,
        time: message.time
      }];
    }
    // case WS_JOIN: {
    //   const maxIndex = getMaxIndex(state);
    //   const message = action.payload;
    //   return [...state, {
    //     id: message.id || maxIndex + 1,
    //     text: `${message.user.username}'s joined the chat`,
    //     author: 'robot',
    //     time: message.time
    //   }];
    // }
    // case WS_LEAVE: {
    //   const maxIndex = getMaxIndex(state);
    //   const message = action.payload;
    //   return [...state, {
    //     id: message.id || maxIndex + 1,
    //     text: `${message.user.username}'s left the chat`,
    //     author: 'robot',
    //     time: message.time
    //   }];
    // }
    default:
      return state;
  }
}

const initialMessages = {
  items: {},
  isFetching: false,
  didInvalidate: false,
  theOldestTime: null,
  noMore: false,
}

const messagesReducer = (state = initialMessages, action) => {
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
    case WS_MESSAGE:
      const message = action.payload;
      const item = {
        [message.id]: messageReduser(state.items[message.id], {
            type: action.type,
            payload: message
          })
      }
      return {...state, items: {...state.items, ...item} };
    case WS_MESSAGES:
      // const items = messages(state.items, action);
      if (action.payload.length === 0) {
        return {...state, noMore: true}
      }
      let items = state.items;
      let oldest = action.payload[0].time;
      action.payload.forEach(message => {
        items = Object.assign({}, items, {
          [message.id]: messageReduser(state.items[message.id], {
            type: action.type,
            payload: message
          })
        })
        if (message.time < oldest) {
          oldest = message.time
        }
      });
      return {
        ...state,
        items,
        isFetching: false,
        didInvalidate: false,
        theOldestTime: oldest
    }

      //   const text = (typeof message.msg !== 'string') ? "" : message.msg
      //   return {
      //     id: message.id || index,
      //     text: text,
      //     author: message.user,
      //     time: message.time
      //   }
      // });


      // const oldest = items.reduce((acc, next) =>
      //   (acc.time < next.time) ? acc : next);
      // console.log(oldest);
      // return (items !== state.items) ?
      //   {
      //     ...state,
      //     items,
      //     isFetching: false,
      //     didInvalidate: false,
      //     theOldestTime: oldest.time,
      //   } : state
    case REQUEST_ALL_MESSAGES:
      return { ...state, isFetching: true }
    case FAIL_ALL_MESSAGES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true,
        error: action.payload['error']
      }
    default:
      return state;
  }
}

export default messagesReducer;
// const messagesByRoom = (state = {}, action) => {
//   switch (action.type) {
//     case RECEIVE_ALL_MESSAGES:
//       return {
//         ...state,
//         [action.roomId]: messages(state[action.roomId], action)
//       }
//   }
// }

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
