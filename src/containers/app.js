import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobindr';

import Header from '../components/header/header';
import Home from '../components/home/home';
import ChatContainer from './chat';
import Login from '../components/login/login';
import Register from '../components/register/register';

import * as userActions from '../actions/userActions.js';

const GuardRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isAuthenticated()
      ? (<ChatContainer {...props} />)
      : (<Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />))} />
)

class App extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentDidMount() {
    this.props.userActions.loginFromStorage()
  }


  isAuthenticated() {
    return !!this.props.loggedUser.name
  }

  render() {
    const {
      handleLogin,
      handleRegister,
      logout
    } = this.props.userActions;
    return (
      <Router>
        <div className="App">
          <Header
            user={this.props.loggedUser}
            logout={logout} />
          <Route exact path="/" component={Home} />
          <GuardRoute path="/chats" component={ChatContainer}
            isAuthenticated={this.isAuthenticated} />
          <Route path="/login" component={
            () => (
              <Login
                handleLogin={handleLogin}
                isAuthenticated={this.isAuthenticated} />)} />
          <Route path="/register" component={
            () => (<Register
              handleRegister={handleRegister}
              isAuthenticated={this.isAuthenticated} />)} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedUser: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
