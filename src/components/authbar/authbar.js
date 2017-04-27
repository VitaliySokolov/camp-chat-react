import React, { Component, PropTypes } from 'react';

import AuthLinks from './auth-links';
import AuthInfo from './auth-info';

class Authbar extends Component {
  render() {
    const { isLogged } = this.props.user;
    return (
      <div className="authbar">
        {
          isLogged
            ?
            <AuthInfo
              user={this.props.user}
              logout={this.props.logout} />
            :
            <AuthLinks />
        }
      </div>
    );
  }
}

Authbar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
}

export default Authbar;
