import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './app';
import {
  Header,
  Navbar,
  Sidebar,
  Main,
  Footer
} from '../components/layout';

describe('App component', () => {
  it('renders w/o crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });

  it('should contain main layout components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAllMatchingElements([
      <Header/>,
      <Navbar/>,
      <Sidebar/>,
      <Main/>,
      <Footer/>
    ])).toBeTruthy();
  });
});
