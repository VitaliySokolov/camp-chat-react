import {
  WS_JOIN,
  WS_LEAVE,
  WS_MESSAGE,
  WS_MESSAGES
} from '../actions/wsActions';

// function isUserIn(users, user) {
//   return users.findIndex(u => u.username === user.username) < 0
// }

const initUser = {
  username: '',
  isOnline: false,
  lastMessage: '',
  lastMessageTime: 0,
};

const userReducer = (state = initUser, action) => {
  switch (action.type) {
    case WS_MESSAGE:
    case WS_MESSAGES:
      const message = action.payload;
      const additionalInfo = {}
      if (message.time > state.lastMessageTime) {
        additionalInfo.lastMessage = message.msg;
        additionalInfo.lastMessageTime = message.time;
      }
      return {...state, ...message.user, ...additionalInfo}

    case WS_JOIN:
      return {...state, ...action.payload.user, ...{isOnline: true}}
    case WS_LEAVE:
      return {...state, ...action.payload.user, ...{isOnline: false}}
    default:
      return state
  }
}

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case WS_MESSAGES:
      const messages = action.payload;
      let users = state;
      messages.forEach(message => {
        users = Object.assign({}, users, {
          [message.user.id]: userReducer(
            users[message.user.id],
            {
              type: action.type,
              payload: message
            })
        })
      });
      return {...state, ...users};
    case WS_MESSAGE:
      const message = action.payload;
      return Object.assign({}, state, {
        [message.user.id]: userReducer(state[message.user.id], action)
      });
    case WS_JOIN:
    case WS_LEAVE:
      const info = action.payload;
      return Object.assign({}, state, {
        [info.user.id]: userReducer(state[info.user.id], action)
      });

    default:
      return state;
  }
}

// const usersReducer = (state = [], action) => {
//   switch (action.type) {
//     case RECEIVE_CHAT_DATA: {
//       const { users } = action.payload;
//       return users;
//     }
//     case RECEIVE_ALL_USERS: {
//       const { users } = action.payload;
//       const modUsers = users.map((user, index) => {
//         return { id: index, username: user.username || user.firstname || `user${index}` }
//       });
//       return modUsers;
//     }

//     case WS_JOIN: {
//       const { time, user } = action.payload;
//       return [...state, user];
//     }

//     case 'message':
//     case 'join':
//       const { user } = action.payload
//       if (isUserIn(state, user)) {
//         const maxIndex = getMaxIndex(state);
//         return [
//           ...state, { id: maxIndex + 1, username: user.username }
//         ]
//       } else {
//         return state
//       }
//     // case RECEIVE_ALL_MESSAGES: {
//     //   const { messages } = action.payload;
//     //   let userId = 0;
//     //   const users = messages.reduce((users, next) => {
//     //     if (users.find(v => v === next.user.username)) {
//     //       users.push({
//     //         id: userId++,
//     //         username: next.user.username
//     //       })
//     //     }
//     //   }, [] );
//     //   console.log(users);
//     //   return state;
//     // const modMsg =  messages.map((message, index) => {
//     //   return {
//     //     id: index,
//     //     text: message.msg ? message.msg.msg || message.msg : "",
//     //     author: message.user,
//     //     time: message.time
//     //   }
//     // });
//     // return modMsg;
//     // }
//     default:
//       return state;
//   }
// }

// export default usersReducer;
export default usersReducer;


// import { combineReducers } from 'redux';

// export const ADD_USER = 'ADD_USER';

// const initialUsersById = {
//   "user1": {
//     id: "user1",
//     name: 'John'
//   },
//   "user2": {
//     id: "user2",
//     name: 'Mike'
//   },
//   "user3": {
//     id: "user3",
//     name: 'Mary'
//   }
// }

// const initialAllUsers = [
//   "user1",
//   "user2",
//   "user3"
// ];

// function usersById(state = initialUsersById, action) {
//   switch (action.type) {
//     case ADD_USER:
//       return state;

//     default:
//       return state;
//   }
// }

// function allUsers(state = initialAllUsers, action) {
//   switch (action.type) {
//     case ADD_USER:
//       return state;

//     default:
//       return state;
//   }
// }

// const usersReducer = combineReducers({
//   byId: usersById,
//   allIds: allUsers
// });

// export default usersReducer;
