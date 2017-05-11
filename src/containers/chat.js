import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Chat from '../components/chat/chat';
import MessageList from '../components/messages/message-list';
import MessageItem from '../components/messages/message-item';
import MessageNew from '../components/messages/message-new';

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
      sortMessages(Object.values(messages)).map(message => (
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

  showMessageNew() {
    //const { roomId } = this.props;
    const roomId = true;
    return (roomId) && (
      <MessageNew />
    );
  }

  render() {
    return (
      <Chat>
        <MessageList
          cutoff={this.props.cutoff}
          noMore={this.props.noMore}>
          {this.getMessages()}
        </MessageList>
        {this.showMessageNew()}
      </Chat>
    )
  }
}

function sortMessages(items) {
  return items.sort((a, b) => (a.time - b.time));
}

function mapStateToProps(state) {
  return {
    messages: state.messages.items,
    cutoff: state.messages.theOldestTime,
    noMore: state.messages.noMore,
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
