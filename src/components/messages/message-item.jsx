import React, { Component } from 'react';

class MessageItem extends Component {
  render() {
    const {
      // user,
      message } = this.props;
    const { text, time } = message;
    const ltime = (new Date(time)).toLocaleString();
    console.log(text);
    console.log(message);
    return (
      <div className="message-list-row">
        <img src={"/img/anonym.jpg"} alt="img" className="user-image"/>
        <div className="message">
          <div className="message-text">{text}</div>
          <time>{ltime}</time>
        </div>
      </div>
    );
  }
}

export default MessageItem;
// {user.name}(id: {authorId}):
