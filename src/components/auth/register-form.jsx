import React, { Component } from 'react';
import autobind from 'autobindr';
import { withRouter, Redirect } from 'react-router-dom';

export class RegisterFormWithoutRouter extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  handleRegisterClick(event) {
    event.preventDefault();
    const { handleRegister } = this.props;
    if (this.passInput.value !== this.repassInput.value) {
      new Error('passwords don\'t match');
    }
    const user = {
      username: this.emailInput.value,
      password: this.passInput.value,
      // email: this.email.value
    };
    console.log(user);
    handleRegister(user);
  }

  render() {
    const { isAuthenticated } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/'} }
    if (isAuthenticated()) {
      return <Redirect to={from} />
    }
    return (
      <div className="auth-form-wrapper">
        <div className="signup-wrapper">
          <form noValidate action="#" method="POST" className="signup-form" onSubmit={this.handleRegisterClick}>
            {/*<div className="form-group">
              <input type="text" name="name" id="name" placeholder="Login or Email" ref={(input) => this.nameInput = input} />
            </div>*/}
            {/*<div className="form-group">
              <input type="text" name="lastname" id="lastname" placeholder="Last Name" ref={(input) => this.loginInput = input} />
            </div>*/}
            <div className="form-group">
              <input type="email" name="email" id="email" required placeholder="Email" ref={(input) => this.emailInput = input} />
            </div>
            <div className="form-group">
              <input type="password" name="pwd" id="pwd" required placeholder="Password" ref={(input) => this.passInput = input} />
            </div>
            <div className="form-group">
              <input type="password" name="re-pwd" id="re-pwd" required placeholder="Repeat Password" ref={(input) => this.repassInput = input} />
            </div>
            <div className="form-group">
              <input type="submit" value="Register" className="button register-button"/>
              {/*<button type="button" className="button register-button">Register</button>*/}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const RegisterForm = withRouter(RegisterFormWithoutRouter);
export { RegisterForm }
