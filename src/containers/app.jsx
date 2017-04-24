import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobindr';

import {
  //   Header,
  Navbar,
  //   Sidebar,
  //   Main,
  //   Footer
} from '../components/layout';
import { Authbar, LoginForm, RegisterForm } from '../components/auth';
import Chats from './chats';

import * as userActions from '../actions/userActions.js';


const Home = (props) => (
  <div className="page-wrapper">
    <main className="main main--single">
      Home page
    </main>
  </div>
);

const Login = (props) => (
  <div className="page-wrapper">
    <main className="main main--single">
      <LoginForm {...props} />
    </main>
  </div>
);

const Register = (props) => (
  <div className="page-wrapper">
    <main className="main main--single">
      <RegisterForm {...props} />
    </main>
  </div>
);

const GuardRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isAuthenticated()
      ? (<Chats {...props} />)
      : (<Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />))} />
)

class App extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    // this.isAuthenticated = this.isAuthenticated.bind(this);
    // this.props.userActions.handleLoginFromStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('app did update');
    if (this.isAuthenticated) {
      const { loggedUser } = this.props;
      const token = localStorage.getItem('token');
      if (token !== loggedUser.token) {
        localStorage.setItem('token', loggedUser.token);
        localStorage.setItem('username', loggedUser.name)
      }
    }
  }

  componentDidMount() {
    // console.log('app did mount');
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
          <header className="main-header">
            <div className="header-contents">
              <Navbar />
              <Authbar
                user={this.props.loggedUser}

                logout={logout} />
            </div>
          </header>
          <Route exact path="/" component={Home} />
          <GuardRoute path="/chats" component={Chats}
            isAuthenticated={this.isAuthenticated} />
          {/*<Route path="/chats" component={Chats} />*/}
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
