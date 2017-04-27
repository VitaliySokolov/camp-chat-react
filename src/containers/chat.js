import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Sidebar from '../components/sidebar/sidebar';
import Chat from '../components/chat/chat';
import RoomList from '../components/rooms/room-list';
import RoomItem from '../components/rooms/room-item';
import RoomNew from '../components/rooms/room-new';
import MessageList from '../components/messages/message-list';
import MessageItem from '../components/messages/message-item';
import MessageNew from '../components/messages/message-new';
import UserList from '../components/users/user-list';
import UserItem from '../components/users/user-item';
// import UserNew from '../components/users/user-new';

import * as chatActions from '../actions/chatActions';


class ChatContainer extends Component {

  componentDidMount() {
    // console.log('in cdm');
    // this.props.chatActions.getRoomList();
    // this.props.chatActions.toggleChatRoom(4);

    // work!!
    // this.props.chatActions.getUserList();
    // this.props.chatActions.getMessageList();
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
    const {
      messages,
      selectedMessage,
      loggedUser
     } = this.props;
    // const getAuthor = (message) => users.find(user => user.id === message.authorId);
    const {
      selectMessage,
      unselectMessage
    } = this.props.chatActions;
    return (messages) ?
      filterMessages(messages).map(message => (
        <MessageItem
          key={message.id}
          message={message}
          loggedUser={loggedUser}
          selectedMessage={selectedMessage}
          unselectMessage={unselectMessage}
          selectMessage={selectMessage} />
      )) : null
    // user={getAuthor(message)}
  }

  getUsers() {
    let selectedUser = null;
    const { users, selectedMessage, messages } = this.props;
    // messages.filter(msg => msg.author.username === user
    const getLastMessage = (user, messages) => {
      return messages.filter(msg => msg.author.username === user.username)
        .reduce((lastMsg, next) =>
          lastMsg.time > next.time ? lastMsg : next, { time: 0 })
    }
    if (selectedMessage) {
      // console.log(selectedMessage.author);
      selectedUser = selectedMessage.author;
    }
    return (users) ?
      users.map(user => (
        <UserItem key={user.id} user={user} selectedUser={selectedUser}
          lastMessage={getLastMessage(user, messages)} />
      )) : null
  }

  showMessageNew() {
    //const { roomId } = this.props;
    const roomId = true;
    return (roomId) && (
      <MessageNew />
    );
  }

  render() {
    const { addChatRoom } = this.props.chatActions;
    return (
      <div className="page-wrapper">
        <input type="checkbox" name="toggle_sb" id="toggle_sb" className="cb-toggle-sb hidden" />
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
        <Chat>
          <MessageList>
            {this.getMessages()}
          </MessageList>
          {this.showMessageNew()}
        </Chat>
      </div>
    )
  }
}

function filterMessages(items, last = 50) {
  return items.sort((a, b) => (a.time > b.time)).slice(items.length - last);
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    users: state.users,
    messages: state.messages.items,
    roomId: state.roomId,
    selectedMessage: state.selectedMessage,
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
)(ChatContainer);
