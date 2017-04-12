import React, { Component } from 'react';

class ChatItem extends Component {
  constructor(props) {
    super(props);
    this.onChatClick = this.onChatClick.bind(this);
  }

  onChatClick() {
    this.props.switchChat(this.props.chat.id);
  }

  render() {
    return (
      <div data-id={this.props.chat.id} onClick={this.onChatClick}>
        {this.props.chat.title}
      </div>
    );
  }
}

export default ChatItem;
