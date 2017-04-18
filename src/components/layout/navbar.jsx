import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'chats'
    }
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(event) {
    event.preventDefault();
    console.log(`clicked ${event.target.href}`);

    if (event.target.href.match(/\/chats$/)) {
      this.setState({ active: 'chats' });
    } else {
      this.setState({ active: 'home' });
    }
  }
  render() {
    return (
      <nav className="nav-main">
        <Link to="/"
          className={location.pathname === '/' && 'active'}>
          Home
        </Link>
        <Link to="/chats"
          className={location.pathname.startsWith('/chats') && 'active'}>
          Chats
        </Link>
      </nav>
    );
  }
}
