import React, { Component } from 'react';

class RoomList extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default RoomList;
