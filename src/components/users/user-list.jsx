import React, { Component } from 'react';

class UserList extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default UserList;
