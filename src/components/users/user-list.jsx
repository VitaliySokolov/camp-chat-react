import React, { Component } from 'react';
import UserItem from './user-item';

class UserList extends Component {
  getUsers() {
    const users = this.props.users;
    return (users) ?
      users.map(user => (
        <UserItem key={user.id} user={user} />
      )) : null
  }
  render() {
    return (
      <div>
        {this.getUsers()}
      </div>
    );
  }
}

export default UserList;
