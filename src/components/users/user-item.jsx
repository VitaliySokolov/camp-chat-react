import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { user } = this.props
    const { name } = user
    return (
      <div className="user">
        <div className="user__avatar">
          <img src="/img/anonym.jpg" alt="" className="user-image" />
        </div>
        <div className="user__info-wrapper">
          <div className="user__name">{name}</div>
          <div className="user__last-message">some message 1</div>
        </div>
        <div className="user__last-message-time">1min</div>
      </div>
    );
  }
}

export default UserItem;
