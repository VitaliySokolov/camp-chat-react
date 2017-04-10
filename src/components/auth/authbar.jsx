import React, { Component } from 'react';
import Auth from "../../modules/auth";

export class Authbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  render() {
    const btnLogin = (
      <button
        className="btn btn-login">
        Login
      </button>
    );

    const btnRegister = (
      <button
        className="btn btn-register">
        Register
      </button>
    );

    const btnLogout = (
      <button
        className="btn-logout">
        Logout
      </button>
    );

    const children = !Auth.isLoggedIn()
      ? (
        <div>
          {btnLogin}
          {btnRegister}
        </div>
      ) : (
        <div>
          <div className="user-avatar" />
          <div className="user-name" />
          {btnLogout}
        </div>
      );
    return (
      <div>
        {children}
      </div>
    );
  }
}
