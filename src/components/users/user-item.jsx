import React, { Component } from 'react';

import Avatar from '../avatar';

class UserItem extends Component {
  render() {
    const { user } = this.props
    const { username } = user
    return (
      <div className="user">
        <Avatar user={user} />
        <div className="user__info-wrapper">
          <div className="user__name">{username}</div>
          <div className="user__last-message">some message 1</div>
        </div>
        <div className="user__last-message-time">1min</div>
      </div>
    );
  }
}

export default UserItem;
