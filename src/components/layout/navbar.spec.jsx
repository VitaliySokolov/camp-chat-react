import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Navbar } from './navbar';
import { Authbar } from '../auth';

describe('Navbar Layout Component', () => {
  it('should render Navbar', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.length).toBe(1);
  });

  xit('should contain Authbar', () => {
    const wrapper = shallow(<Navbar/>);
    expect(wrapper.containsMatchingElement(<Authbar />)).toBe(true);
  });
});
