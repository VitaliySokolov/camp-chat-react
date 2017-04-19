import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import Auth from "../../modules/auth";

export class Authbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: true
    };
  }

  handleLoginClick(event) {
    console.log('click login');
  }

  render() {
    const btnLogout = (
      <button
        className="btn-logout">
        Logout
      </button>
    );

    console.log(this.props.user);
    const children = !this.props.user.name //!Auth.isLoggedIn()
      ? (
        <div className="link-list guest auth-wrapper">
        <Link to="/login"
          className={location.pathname.startsWith('/login') && 'active'}>
          Login
        </Link>
        <Link to="/register"
          className={location.pathname.startsWith('/register') && 'active'}>
          Register
        </Link>
        </div>
      ) : (
        <div className="logged auth-wrapper">
          <img src="/img/anonym.jpg" alt="ava" className="user-image"  />
          <div className="user-name"> {this.props.user.name} </div>
          {btnLogout}
        </div>
      );
    return (
      <div className="authbar">
        {children}
      </div>
    );
  }
}
