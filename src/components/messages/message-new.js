import React, { Component } from 'react';
import {emit} from '../../actions/wsActions';
import autobind from 'autobindr';

class MessageNew extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`send msg: "${this.textarea.value}"`);
    emit('message', this.textarea.value);
    this.textarea.value = '';
  }

  handleChange(event) {
    const txt = event.target.value.trim();
    if (event.ctrlKey && event.which === 13) {
      if (txt !== '') {
        emit('message', txt);
        event.target.value = "";
      }
    }
  }

  handleEmoji(event) {
    event.preventDefault();
    console.log('push emoji');
    this.setState({'showEmojiPicker': true});
  }

  render() {
    return (
      <form className="message-input" onSubmit={this.handleSubmit}>
        <textarea
          name="message_send"
          id="message_send"
          className="message-input-element"
          placeholder="Type something..."
          onKeyDown={this.handleChange}
          ref={(ta) => this.textarea = ta}></textarea>
        <button className="emoji" onClick={this.handleEmoji}>
          {/*<img src="img/smile.png" alt=":)" />*/}
        </button>
        <input type="submit" value="Send" className="message-new__submit" />
      </form>
    );
  }
}

export default MessageNew;
