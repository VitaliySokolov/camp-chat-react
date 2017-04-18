import React, { Component } from 'react';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick(event) {
    const {handleLogin} = this.props;
    const user = {
      username: this.loginInput.value,
      password: this.passInput.value
    };
    console.log(user);
    handleLogin(user);
    event.preventDefault();
  }

  render() {
    return (
      <div className="auth-form-wrapper">
        <div className="signin-wrapper">
          <form action="#" method="POST" className="signin-form visible" onSubmit={this.handleLoginClick}>
            <div className="form-group">
              <input type="text" name="login" id="login" required placeholder="Login"
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
              <input type="submit" value="Login" className="button login-button"/>
              {/*<button type="button" className="button login-button">Login</button>*/}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
