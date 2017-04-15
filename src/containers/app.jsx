import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import {
//   Header,
//   Navbar,
//   Sidebar,
//   Main,
//   Footer
// } from '../components/layout';
import { Authbar } from '../components/auth';

import RoomList from '../components/rooms/room-list';
import RoomItem from '../components/rooms/room-item';
import MessageList from '../components/messages/message-list';
import MessageItem from '../components/messages/message-item';
import UserList from '../components/users/user-list';
import UserItem from '../components/users/user-item';

import * as chatActions from '../actions/chatActioins';

class App extends Component {

  componentDidMount() {
    // console.log('in cdm');
    this.props.chatActions.getRoomList();
  }

  getRooms() {
    const {rooms } = this.props;
    const { toggleChatRoom } = this.props.chatActions;
    return (rooms) ?
      rooms.map(room => (
        <RoomItem
          key={room.id}
          room={room}
          toggleChatRoom={toggleChatRoom} />
      )) : null
  }

  getMessages() {
    const {messages, users} = this.props;
    const getAuthor = (message) => users.find(user => user.id === message.authorId);
    return (messages) ?
      messages.map(message => (
        <MessageItem key={message.id} message={message} user={getAuthor(message)} />
      )) : null
  }

  getUsers() {
    const {users} = this.props;
    return (users) ?
      users.map(user => (
        <UserItem key={user.id} user={user} />
      )) : null
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <Authbar/>
        </header>
        <aside className="sidebar">
          <RoomList>
            {this.getRooms()}
          </RoomList>
          <UserList>
            {this.getUsers()}
          </UserList>
        </aside>
        <main>
          <MessageList>
            {this.getMessages()}
          </MessageList>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    users: state.users,
    messages: state.messages,
    roomId: state.roomId
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
)(App);
