import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RoomList from '../components/rooms/room-list';
import RoomItem from '../components/rooms/room-item';
import RoomNew from '../components/rooms/room-new';
import MessageList from '../components/messages/message-list';
import MessageItem from '../components/messages/message-item';
import UserList from '../components/users/user-list';
import UserItem from '../components/users/user-item';
import UserNew from '../components/users/user-new';

import * as chatActions from '../actions/chatActions';


class Chats extends Component {

  componentDidMount() {
    // console.log('in cdm');
    this.props.chatActions.getRoomList();
  }

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

  getMessages() {
    const { messages, users } = this.props;
    const getAuthor = (message) => users.find(user => user.id === message.authorId);
    return (messages) ?
      messages.map(message => (
        <MessageItem key={message.id} message={message} user={getAuthor(message)} />
      )) : null
  }

  getUsers() {
    const { users } = this.props;
    return (users) ?
      users.map(user => (
        <UserItem key={user.id} user={user} />
      )) : null
  }

  render() {
    const { addChatRoom } = this.props.chatActions;
    return (
      <div className="page-wrapper">
        <input type="checkbox" name="toggle_sb" id="toggle_sb" className="cb-toggle-sb hidden" />
        <aside className="sidebar">
          <header className="sidebar__header">
            <label className="sidebar__toggle" htmlFor="toggle_sb">
              <span className="toggle-sign"></span>
            </label>
            <div className="sidebar-search">
              <input name="search" type="search" value=""
                className="sidebar-search__input" placeholder="search..." />
              <button className="sidebar-search__btn">
                <img src="/img/search.png" alt="s" />
              </button>
            </div>
            <div className="sidebar__menu">
              <img src="/img/menu.png" alt="menu" />
            </div>
          </header>
          <div className="rooms-wrapper">
            <RoomList>
              {this.getRooms()}
            </RoomList>
            <RoomNew addChatRoom={addChatRoom} />
          </div>
          <div className="users-wrapper hidden">
            <UserList>
              {this.getUsers()}
            </UserList>
            <UserNew />
          </div>
        </aside>
        <main className="main">
          <div className="messages-header">
          </div>
          <MessageList>
            {this.getMessages()}
          </MessageList>
        </main>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Chats);