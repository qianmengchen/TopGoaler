import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
require('isomorphic-fetch');

import AuthNav from '../components/Navigators/AuthNav';
// import TabNav from '../components/Navigators/TabNav';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing AuthNav', () => {
  const wrapper = shallow(<AuthNav />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('renders as expected when logged in', () => {
    const wrapper = shallow(<AuthNav isLoggedIn={true} />, {
      context: { store: mockStore(initialTaskState) }
    });
    const render = wrapper.dive();
    expect(render).toMatchSnapshot();
  });

  // it('has correct icons; needs testing', () => {
  //   // const navigation = {
  //   //   state: {
  //   //     index: 1,
  //   //     routes: [{ routeName: 'Channel', key: 'myroute-123' }]
  //   //   }
  //   // };

  //   const wrapper = shallow(<TabNav routeName={'Channel'} />, {
  //     context: { store: mockStore(initialTaskState) }
  //   });
  //   const render = wrapper.dive();
  //   expect(render).toMatchSnapshot();
  // });
});
