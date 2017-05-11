import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import PrivateMessages from './private-messages';
import ChatTitle from './title';
import PersonAccount from './account';

class ChatHeader extends Component {

  render() {
    const appBarStyle = {
      borderTopRightRadius: "10px",
      backgroundColor: "white",
      color: "black"
    }
    return (
      <div>
      <AppBar
        iconElementLeft={<PrivateMessages {...this.props}/>}
        iconElementRight={<PersonAccount />}
        title={<ChatTitle />}
        titleStyle={{
          textAlign: "center",
          color: "black"
        }}
        style={appBarStyle}
      />
      </div>
    );
  }
}
// className="messages-header"
export default ChatHeader;
