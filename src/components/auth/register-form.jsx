import React, { Component } from 'react';

export class RegisterForm extends Component {
  render() {
    return (
      <div className="auth-form-wrapper">
        <div className="signup-wrapper">
          <form action="#" method="POST" className="signup-form">
            <div className="form-group">
              <input type="text" name="firstname" id="firstname" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" required placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" name="pwd" id="pwd" required placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="password" name="re-pwd" id="re-pwd" required placeholder="Repeat Password" />
            </div>
            <div className="form-group">
              <button type="button" className="button register-button">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
