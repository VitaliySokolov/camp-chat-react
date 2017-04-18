import React, { Component } from 'react';

class RoomList extends Component {
  render() {
    return (
      <div className="room-list">
        {this.props.children}
      </div>
    );
  }
}

export default RoomList;
