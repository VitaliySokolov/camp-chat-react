import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';

const LogoutButton = withRouter(props => {
  return (
    <button
      className="btn-logout"
      onClick={() => { props.logout(); props.history.goBack(); }}>
      Logout
    </button>
  )
});

LogoutButton.propTypes = {
  logout: PropTypes.func
}

export default LogoutButton;
