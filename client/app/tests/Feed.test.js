import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Avatar } from 'react-native-elements';
require('isomorphic-fetch');

import Feed from '../components/Feed/Feed';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing Channel List Page', () => {
  const wrapper = shallow(<Feed />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('should have 1 Avatar for profile pic', () => {
    expect(render.find(Avatar)).toHaveLength(1);
  });

  it('should have 4 Text: taskTitle, comment, timestamp, points', () => {
    expect(render.find('Text')).toHaveLength(4);
  });
});
