import React, { Component } from 'react';

class MessageList extends Component {

  render() {
    return (
      <div className="message-list" ref={(node)=> this.listNode = node}>
        {this.props.children}
      </div>
    );
  }
}

export default MessageList;
