import React, { Component } from 'react';

class RoomNew extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    const { addChatRoom } = this.props
    // console.log('add new room');
    addChatRoom(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <form className="room-new" onSubmit={this.handleSubmit}>
        <input type="text"
          className="room-new__input"
          placeholder="new room..."
          ref={input => this.input = input} />
        <button className="room-new__add">Add</button>
      </form>
    );
  }
}

export default RoomNew;
