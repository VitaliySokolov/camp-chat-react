import React, { Component } from 'react';

class MessageNew extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`send msg: "${this.textarea.value}"`);
    this.textarea.value = '';
  }

  render() {
    return (
      <form className="message-input" onSubmit={this.handleSubmit}>
        <textarea name="message_send" id="message_send"
          className="message-input-element" placeholder="Type something..."
          ref={(ta) => this.textarea = ta}></textarea>
        <button className="emoji">
          <img src="img/smile.png" alt=":)" />
        </button>
        <input type="submit" value="Send" className="message-new__submit" />
      </form>
    );
  }
}

export default MessageNew;
