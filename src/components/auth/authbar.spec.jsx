import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Authbar } from './authbar';
import Auth from "../../modules/auth";

Auth.isLoggedIn = jest.fn();

describe('Authbar Component', () => {
  it('renders component', () => {
    const wrapper = shallow(<Authbar />);
    expect(wrapper.length).toBe(1);
  });

  it('should be login elements and not logout ones when unlogged', () => {
    Auth.isLoggedIn.mockReturnValueOnce(false);
    const wrapper = shallow(<Authbar />);
    expect(wrapper.find('.btn-login').length).toBe(1);
    expect(wrapper.find('.btn-register').length).toBe(1);
    expect(wrapper.find('.btn-logout').length).toBe(0);
  });

  it('should not be logout elements and not login ones when logged', () => {
    Auth.isLoggedIn.mockReturnValueOnce(true);
    const wrapper = shallow(<Authbar />);
    expect(wrapper.find('.btn-logout').length).toBe(1);
    expect(wrapper.find('.btn-login').length).toBe(0);
    expect(wrapper.find('.btn-register').length).toBe(0);
  });
});
