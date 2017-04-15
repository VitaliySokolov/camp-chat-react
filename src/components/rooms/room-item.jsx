import React, { Component } from 'react';

class RoomItem extends Component {
  constructor(props) {
    super(props);
    this.onRoomClick = this.onRoomClick.bind(this);
  }

  onRoomClick() {
    this.props.toggleChatRoom(this.props.room.id);
  }

  render() {
    return (
      <div data-id={this.props.room.id} onClick={this.onRoomClick}>
        {this.props.room.title}
      </div>
    );
  }
}

export default RoomItem;
