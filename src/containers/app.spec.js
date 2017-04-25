import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import AppContainer from './app';
import {
  Header,
  Navbar,
  Sidebar,
  Main,
  Footer
} from '../components/layout';

const middlewares = [];
const mockStore = configureStore(middlewares);
// const storeFake = (state) => {
// 	return {
// 		default: () => {},
// 		subscribe: () => {},
// 		dispatch: () => {},
// 		getState: () => {
// 			return { ...state };
// 		},
// 	};
// };

describe('App container', () => {
  let Component;

  beforeEach(() => {
    const store = mockStore({loggedUser: {name: 'default'}});
    const wrapper = shallow(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
    // console.log(wrapper);
    Component = wrapper.find(AppContainer);
    // console.log(Component);
  });

  it('renders w/o crashing', () => {
    expect(Component.length).toBe(1);
  });

  xit('should contain main layout components', () => {
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
