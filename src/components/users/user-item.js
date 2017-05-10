import React, { Component } from 'react';
import autobind from 'autobindr';
import classNames from 'classnames';
import moment from 'moment';
import ReactEmoji from 'react-emoji';

import Avatar from '../avatar';

class UserItem extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    const { user, selectedUser } = this.props
    const { username } = user
    const userClassName = classNames('user', {
      'bg-red': selectedUser && selectedUser.username === user.username
    });
    const lastMessageText = user.lastMessage;
    const lastMessageTime = moment(user.lastMessageTime).fromNow(true);
    return (
      <div className={userClassName}>
        <Avatar user={user} />
        <div className="user__info-wrapper">
          <div className="user__name">{username}</div>
          <div className="user__last-message">{
            ReactEmoji.emojify(
              lastMessageText,
              {attributes: {width: '15px', height: '15px'}}
              )}</div>
        </div>
        {(lastMessageTime !== 'Invalid date') &&
        <div className="user__last-message-time">{lastMessageTime}</div>}
      </div>
    );
  }
}

export default UserItem;
