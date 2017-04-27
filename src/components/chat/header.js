import React, { Component } from 'react';
import PrivateMessages from './private-messages';
import ChatTitle from './title';
import ChatAccount from './account';

class ChatHeader extends Component {
  render() {
    return (
      <div className="messages-header">
        <PrivateMessages />
        <ChatTitle />
        <ChatAccount />
      </div>
    );
  }
}

export default ChatHeader;
