import React, { Component } from 'react';

class UserNew extends Component {

  handleSubmit(event) {
    event.preventDefault();
    // console.log('add new user');
  }
  render() {
    return (
      <form className="user-new" onSubmit={this.handleSubmit}>
        <input type="text" className="user-new__input" placeholder="new user..." />
        <button className="user-new__add">Add</button>
      </form>
    );
  }
}

export default UserNew;
