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
    const { room } = this.props;
    const { title } = room;
    return (
      <div className="room" onClick={this.onRoomClick}>
        <div className="room__creator-avatar">
          <img src={'/img/anonym.jpg'} alt="ava" className="user-image" />
        </div>
        <div className="room__info-wrapper">
          <div className="room-title">
            {title}
          </div>
          <div className="room__last-message">Some text</div>

        </div>
        <time className="room__last-message-time">1h</time>
      </div>
    );
  }
}

export default RoomItem;
