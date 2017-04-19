import io from 'socket.io-client';

export const typesWS = [
  'message',
  'join',
  'leave'
]

const socket = io('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');

export const initWS = (store) => {
  typesWS.forEach(type =>
    socket.on(type, (payload) =>
      store.dispatch({ type, payload })));
}

export const emit = (type, payload) =>
  socket.emit(type, payload);

export const send = (payload) => socket.emit(payload);

