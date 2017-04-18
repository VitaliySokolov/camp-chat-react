import React, { Component } from 'react';

class MessageList extends Component {

  render() {
    return (
      <div className="message-list">
        {this.props.children}
      </div>
    );
  }
}

export default MessageList;
