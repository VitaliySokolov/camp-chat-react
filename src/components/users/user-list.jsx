import React, { Component } from 'react';

class UserList extends Component {

  render() {
    return (
      <div className="user-list">
        {this.props.children}
      </div>
    );
  }
}

export default UserList;
