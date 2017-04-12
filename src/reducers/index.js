import { SWITCH_CHAT } from '../actions/chatActioins';

const outside_data = {
  messages: [
    {
      id: 1,
      authorId: 1,
      chatId: 1,
      text: 'Hello'
    },
    {
      id: 2,
      authorId: 2,
      chatId: 1,
      text: 'Hi'
    },
    {
      id: 3,
      authorId: 1,
      chatId: 2,
      text: 'How are you?'
    },
    {
      id: 4,
      authorId: 1,
      chatId: 2,
      text: 'Fine!'
    },
    {
      id: 5,
      authorId: 3,
      chatId: 3,
      text: 'Anybody???'
    }

  ],
  users: [
    {
      id: 1,
      name: 'John'
    }, {
      id: 2,
      name: 'Mike'
    }, {
      id: 3,
      name: 'Mary'
    }]
}

const initialState = {
  chat: null,
  user: null,
  messages: [],
  users: [],
  chats: [
    {
      id: 1,
      title: 'first'
    }, {
      id: 2,
      title: 'second'
    }, {
      id: 3,
      title: 'third'
    }],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_CHAT: {
      const newChat = state.chats.find(chat => chat.id === action.payload);
      const newMessages = outside_data.messages.filter(
        msg => msg.chatId === newChat.id).map(msg => (
          {
            ...msg,
            user: outside_data.users.find(
              user => msg.authorId === user.id)
          }));
      // console.log(newMessages);
      return { ...state, chat: newChat, messages: newMessages }
    }
    default:
      return state;
  }
};
