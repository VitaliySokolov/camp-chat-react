import React, { Component } from 'react';
import ChatItem from './chat-item';

class ChatList extends Component {

  getChats() {
    const {chats, switchChat} = this.props;
    return (chats) ?
      chats.map(chat => (
        <ChatItem
          key={chat.id}
          chat={chat}
          switchChat={switchChat} />
      )) : null
  }

  render() {
    return (
      <div>
        {this.getChats()}
      </div>
    );
  }
}

export default ChatList;
