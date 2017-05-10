import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Sidebar from '../components/sidebar/sidebar';
import RoomList from '../components/rooms/room-list';
import RoomItem from '../components/rooms/room-item';
import RoomNew from '../components/rooms/room-new';
import UserList from '../components/users/user-list';
import UserItem from '../components/users/user-item';
// import UserNew from '../components/users/user-new';

import * as chatActions from '../actions/chatActions';


class SidebarContainer extends Component {
  getRooms() {
    const { rooms } = this.props;
    const { toggleChatRoom } = this.props.chatActions;
    return (rooms) ?
      rooms.map(room => (
        <RoomItem
          key={room.id}
          room={room}
          toggleChatRoom={toggleChatRoom} />
      )) : null
  }

  getUsers() {
    let selectedUser = null;
    const { users, selectedMessage } = this.props;
    if (selectedMessage) {
      // console.log(selectedMessage.author);
      selectedUser = selectedMessage.author;
    }
    return (users) ?
      Object.keys(users).map(id => (
        <UserItem
          key={id}
          user={users[id]}
          selectedUser={selectedUser}
        />
      )) : null;
  }

  render() {
    const { addChatRoom } = this.props.chatActions;
    return (
      <Sidebar>
        <div className="rooms-wrapper hidden">
          <RoomList>
            {this.getRooms()}
          </RoomList>
          <RoomNew addChatRoom={addChatRoom} />
        </div>
        <div className="users-wrapper">
          <UserList>
            {this.getUsers()}
          </UserList>
          {/*<UserNew />*/}
        </div>
      </Sidebar>
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    users: state.users,
    roomId: state.roomId,
    loggedUser: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chatActions: bindActionCreators(chatActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
