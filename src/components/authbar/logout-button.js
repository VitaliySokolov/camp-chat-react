import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const LogoutButton = withRouter(props =>
    <button
        className="btn-logout"
        onClick={() => {
            props.logout();
            props.history.goBack();
        }}>
        Logout
    </button>
);

LogoutButton.propTypes = {
    logout: PropTypes.func
};

export default LogoutButton;
