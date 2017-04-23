import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink to="/"
          activeClassName='active'
          exact
          className="nav-link">
          Home
        </NavLink>
        <NavLink to="/chats"
          activeClassName='active'
          className="nav-link">
          Chats
        </NavLink>
      </nav>
    );
  }
}
