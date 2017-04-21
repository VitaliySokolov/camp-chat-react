import io from 'socket.io-client';

export const typesWS = [
  'message',
  'join',
  'leave'
]

const socket = io('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');
// todo: read token from localstorage

export const initWS = (store) => {
  typesWS.forEach(type =>
    socket.on(type, (payload) =>
      store.dispatch({ type, payload })));
}

export const emit = (type, payload) =>
  socket.emit(type, payload);

export const connectWS = (data) => {
  // console.log(data.token);
  socket.disconnect()
  socket.connect();
  socket.on('connect', () => {
    console.log('auth in');
    socket.emit('authenticate', {token: data.token});
  });
}
