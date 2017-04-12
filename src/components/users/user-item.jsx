import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    return (
      <div>
        {this.props.user.name}
      </div>
    );
  }
}

export default UserItem;
