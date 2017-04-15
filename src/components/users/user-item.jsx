import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { user } = this.props
    const { name } = user
    return (
      <div>
        {name}
      </div>
    );
  }
}

export default UserItem;
