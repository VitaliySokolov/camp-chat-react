import React, { Component } from 'react';

class MessageItem extends Component {
  render() {
    const { user, message } = this.props;
    const { authorId, text } = message;
    return (
      <div className="message-list-row">
        <img src={"/img/anonym.jpg"} alt="img" className="user-image"/>
        <div className="message">
          <div className="message-text">{user.name}(id: {authorId}): {text}</div>
          <time>1h</time>
        </div>
      </div>
    );
  }
}

export default MessageItem;
