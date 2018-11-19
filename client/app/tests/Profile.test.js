import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Button, Avatar, Icon } from 'react-native-elements';
require('isomorphic-fetch');

import Profile from '../components/Profile/Profile';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing Channel List Page', () => {
  const logout = jest.fn();

  const wrapper = shallow(<Profile logout={logout} />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should have 1 Avatar for profile pic', () => {
    expect(render.find(Avatar)).toHaveLength(1);
  });

  it('should have 2 Icons: favorite and share', () => {
    expect(render.find(Icon)).toHaveLength(2);
  });

  it('should have 2 Buttons: summary and logout', () => {
    expect(render.find(Button)).toHaveLength(2);
  });
});
