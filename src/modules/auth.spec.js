import React from 'react';
import {shallow} from 'enzyme';
import Auth from './auth';

describe('Auth module', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should get token', () => {
    const token = 'some token';
    localStorage.setItem('token', token);
    expect(Auth.getToken()).toBe(token);
  });

  it('should set token', () => {
    const token = 'some token';
    expect(localStorage.getItem('token')).toBeUndefined;
    Auth.login(token);
    expect(localStorage.getItem('token')).toBe(token);
  });

  it('should remove token using logout', () => {
    const token = 'some token';
    localStorage.setItem('token', token);
    Auth.logout();
    expect(localStorage.store['token']).toBeUndefined;
  });

  it('should check logged state', () => {
    Auth.logout();
    expect(Auth.isLoggedIn()).toBeFalsy;
    Auth.login('some token');
    expect(Auth.isLoggedIn()).toBeTruthy;
  });

});
