import React, { Component } from 'react';
import autobind from 'autobindr';
import classNames from 'classnames';
import moment from 'moment';

import Avatar from '../avatar';

class UserItem extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    const { user, selectedUser, lastMessage } = this.props
    const { username } = user
    // console.log(lastMessage);
    const userClassName = classNames('user', {
      'bg-red': selectedUser && selectedUser.username === user.username
    });
    const lastMessageText = (lastMessage) ? lastMessage.text : '';
    const lastMessageTime = (lastMessage)
      ? moment(lastMessage.time).fromNow(true)
      : '';
    return (
      <div className={userClassName}>
        <Avatar user={user} />
        <div className="user__info-wrapper">
          <div className="user__name">{username}</div>
          <div className="user__last-message">{lastMessageText}</div>
        </div>
        <div className="user__last-message-time">{lastMessageTime}</div>
      </div>
    );
  }
}

export default UserItem;
