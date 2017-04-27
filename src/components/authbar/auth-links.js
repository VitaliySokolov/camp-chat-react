import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthLinks = (props) => (
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
);

export default AuthLinks;
