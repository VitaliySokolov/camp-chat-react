import React, { Component } from 'react';
import autobind from 'autobindr';
import { withRouter, Redirect } from 'react-router-dom';

class LoginFormWithoutRouter extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    // this.state = { loggedIn: false }
  }

  handleLoginClick(event) {
    const { handleLogin } = this.props;
    const user = {
      username: this.loginInput.value,
      password: this.passInput.value
    };
    console.log(user);
    handleLogin(user);
    event.preventDefault();
    // console.log(this.props.history);
  }

  render() {
    const { isAuthenticated } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/'} }
    if (isAuthenticated()) {
      return <Redirect to={from} />
    }
    return (
      <div className="auth-form-wrapper">
        <div className="signin-wrapper">
          <form noValidate action="#" method="POST" className="signin-form visible" onSubmit={this.handleLoginClick}>
            <div className="form-group">
              <input type="text" name="login" id="login" required placeholder="Email"
                ref={(input) => this.loginInput = input} />
            </div>
            <div className="form-group">
              <input type="password" name="pwd" id="pwd" required placeholder="Password"
                ref={(input) => this.passInput = input} />
            </div>
            <div className="forgot-pwd form-group">
              <a href="#" className="forgot-pwd">Forgot password?</a>
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="button login-button" />
              {/*<button type="button" className="button login-button">Login</button>*/}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const LoginForm = withRouter(LoginFormWithoutRouter);
export { LoginForm }
