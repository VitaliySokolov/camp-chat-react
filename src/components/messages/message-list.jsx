import React, { Component } from 'react';

class MessageList extends Component {

  componentDidMount() {
    //this.listNode.scrollIntoView(false)
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("msg-list update");
    //this.listNode.scrollIntoView(false)
  }


  render() {
    return (
      <div className="message-list" ref={(node)=> this.listNode = node}>
        {this.props.children}
      </div>
    );
  }
}

export default MessageList;
