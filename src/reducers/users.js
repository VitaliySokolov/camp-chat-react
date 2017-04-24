import {
  RECEIVE_CHAT_DATA,
  RECEIVE_ALL_USERS,
  RECEIVE_ALL_MESSAGES
} from '../actions/chatActions';

import {getMaxIndex} from '../utils';

function isUserIn(users, user) {
  return users.findIndex(u => u.username === user.username) < 0
}

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHAT_DATA: {
      const { users } = action.payload;
      return users;
    }
    case RECEIVE_ALL_USERS: {
      const { users } = action.payload;
      const modUsers = users.map((user, index) => {
        return { id: index, username: user.username || user.firstname || `user${index}` }
      });
      return modUsers;
    }

    case 'message':
    case 'join':
      const { user } = action.payload
      if (isUserIn(state, user)) {
        const maxIndex = getMaxIndex(state);
        return [
          ...state, {id: maxIndex + 1, username: user.username}
        ]
      } else {
        return state
      }
    // case RECEIVE_ALL_MESSAGES: {
    //   const { messages } = action.payload;
    //   let userId = 0;
    //   const users = messages.reduce((users, next) => {
    //     if (users.find(v => v === next.user.username)) {
    //       users.push({
    //         id: userId++,
    //         username: next.user.username
    //       })
    //     }
    //   }, [] );
    //   console.log(users);
    //   return state;
    // const modMsg =  messages.map((message, index) => {
    //   return {
    //     id: index,
    //     text: message.msg ? message.msg.msg || message.msg : "",
    //     author: message.user,
    //     time: message.time
    //   }
    // });
    // return modMsg;
    // }
    default:
      return state;
  }
}

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
