import React, { Component } from 'react';

class MessageItem extends Component {
  render() {
    const { user, message } = this.props;
    const { authorId, text } = message;
    return (
      <div>
        {user.name}(id: {authorId}):  {text}
      </div>
    );
  }
}

export default MessageItem;
