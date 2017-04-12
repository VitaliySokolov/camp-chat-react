import React, { Component } from 'react';

class MessageItem extends Component {
  render() {
    const { user, text } = this.props.message
    return (
      <div>
        {user.name}: {text}
      </div>
    );
  }
}

export default MessageItem;
