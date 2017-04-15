import rooms from './rooms.json';
import messages from './messages.json';
import users from './users.json';

// console.log(rooms);

// let messages = [];

const TIMEOUT = 500;

// const filterMessages = roomId => messages.filter(msg => msg.roomId === roomId);

// export default {
//   getRooms: (cb, timeout) => setTimeout(() => cb(rooms), timeout || TIMEOUT),
//   getMessages: (roomId, cb, timeout) => setTimeout(() => cb(filterMessages(roomId)), timeout || TIMEOUT)
// }

export function getAllRooms() {
  return rooms;
}

export const fetchAllRooms = () => {
  return new Promise(res => setTimeout(() => res(rooms), TIMEOUT))
}

export const fetchChatRoomData = roomId =>
  new Promise(
    (resolve, reject) => setTimeout(
      () => {
        try {
          const authorIds = new Set();
          const newMessages = messages.filter(msg => {
            return msg.roomId === roomId
          })
          newMessages.forEach(msg => {
            authorIds.add(msg.authorId)
          });
          // console.log(authorIds);
          const newUsers = users.filter(user => authorIds.has(user.id))
          resolve({
            messages: newMessages,
            users: newUsers
          })
        } catch (error) {
          reject(new Error('Error in fetching room room data: ' + error));
        }
 }, TIMEOUT));

// export const fetchUsers
