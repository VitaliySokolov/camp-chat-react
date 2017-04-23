import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import Auth from "../../modules/auth";
import autobind from 'autobindr';
import Avatar from '../avatar';

const LogoutButton = withRouter(props => {
  return (
    <button
      className="btn-logout"
      onClick={() => { props.handleLogoutClick(); props.history.goBack(); }}>
      Logout
    </button>
  )
});


export class Authbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: true
    };
    autobind(this);
  }

  handleLoginClick(event) {
    console.log('click login');
  }

  handleLogoutClick(event) {
    this.props.logout();
  }

  render() {
    // console.log(this.props.user);
    const children = !this.props.user.name //!Auth.isLoggedIn()
      ? (
        <div className="link-list guest auth-wrapper">
          <NavLink to="/login"
            activeClassName='active'
            className="nav-link">
            Login
          </NavLink>
          <NavLink to="/register"
            activeClassName='active'
            className="nav-link">
            Register
          </NavLink>
        </div>
      ) : (
        <div className="logged auth-wrapper">
          <Avatar user={this.props.user} size={40} />
          {/*<img src="/img/anonym.jpg" alt="ava" className="user-image" />*/}
          <div className="user-name"> {this.props.user.name} </div>
          <LogoutButton handleLogoutClick={this.handleLogoutClick} />
        </div>
      );
    return (
      <div className="authbar">
        {children}
      </div>
    );
  }
}
