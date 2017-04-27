import React, { PropTypes } from 'react';

import LogoutButton from './logout-button';
import Avatar from '../avatar';

const AuthInfo = (props) => (
  <div className="logged auth-wrapper">
    <Avatar user={props.user} size={40} />
    <div className="user-name"> {props.user.name} </div>
    <LogoutButton logout={props.logout} />
  </div>
);

AuthInfo.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
}

export default AuthInfo;
