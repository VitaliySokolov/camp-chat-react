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
import ChatList from '../components/chats/chat-list';
import MessageList from '../components/messages/message-list';
import UserList from '../components/users/user-list';
import * as chatActions from '../actions/chatActioins';

class App extends Component {

  render() {
    const { chat, chats, users, messages } = this.props;
    const { switchChat } = this.props.chatActions;
    return (
      <div className="App">
        <header>
          {/*<Authbar/>*/}
        </header>
        <aside>
          <ChatList chats={chats} switchChat={switchChat}/>
          {/*<UserList users={users}/>*/}
        </aside>
        <main>
          <MessageList chat={chat} messages={messages}/>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chats: state.chats,
    users: state.users,
    messages: state.messages,
    chat: state.chat
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
