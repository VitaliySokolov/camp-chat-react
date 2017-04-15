import {
  RECEIVE_CHAT_DATA
} from '../actions/chatActioins';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHAT_DATA: {
      const { users } = action.payload;
      return users;
    }
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
