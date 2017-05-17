import React, { Component } from 'react';

class ChatTitle extends Component {
    render () {
        return (
      <div>
         {this.props.roomTitle}
      </div>
      );
    }
}

export default ChatTitle;
