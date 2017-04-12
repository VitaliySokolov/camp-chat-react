import React, { Component } from 'react';
import MessageItem from './message-item';

class MessageList extends Component {
  getMessages() {
    const messages = this.props.messages;
    return (messages) ?
      messages.map(message => (
        <MessageItem key={message.id} message={message} />
      )) : null
  }
  render() {
    return (
      <div>
        {this.getMessages()}
      </div>
    );
  }
}

export default MessageList;
