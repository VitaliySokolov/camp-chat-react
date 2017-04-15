import React, { Component } from 'react';

class MessageList extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default MessageList;
