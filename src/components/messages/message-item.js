import React, { Component } from 'react';
import autobind from 'autobindr';
import classNames from 'classnames';
import moment from 'moment';
import Avatar from '../avatar';
import MultilineText from '../multiline-text';

class MessageItem extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  handleSelectClick(event) {
    // const { selectMessage, unselectMessage,
    //   message, selectedMessage } = this.props;
    // if (selectedMessage !== message) {
    //   selectMessage(message);
    // } else {
    //   unselectMessage(message);
    // }
  }

  componentDidMount() {
    // console.log(this);
    this.node.scrollIntoView();
  }

  render() {
    const {
      loggedUser,
      message,
      selectedMessage } = this.props;
    const { text, time, author } = message;
    const ltime = moment(+time).fromNow();
    const rowClassName = classNames('message-list-row', {
      'message-list-row--self': author.username === loggedUser.name
    })
    const selectionClassName = classNames('message-text', {
      'bg-red': selectedMessage === message,
      'robot': author === 'robot'
    })
    return (
      <div className={rowClassName}
        ref={(node) => this.node = node} onClick={this.handleSelectClick}>
        <Avatar user={author} />
        <div className="message">
          <b>{author.username}</b>
          <div className={selectionClassName}>
            <MultilineText text={text} />
          </div>
          <time className="message-time">{ltime}</time>
        </div>
      </div>
    );
  }
}

export default MessageItem;
