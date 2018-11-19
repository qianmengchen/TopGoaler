import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Avatar, Card } from 'react-native-elements';
require('isomorphic-fetch');

import ChannelMemberView from '../components/ChannelMemberView/ChannelMemberView';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing Channel Memberview Page', () => {
  const navigation = { navigate: jest.fn() };

  const wrapper = shallow(<ChannelMemberView navigation={navigation} />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should have 2 Cards for displaying scoreboard and tasks', () => {
    expect(render.find(Card)).toHaveLength(2);
  });

  it('should have 1 Avatar for channel logo', () => {
    expect(render.find(Avatar)).toHaveLength(1);
  });

  it('should have 15 Text: title, card info, more and add task button text', () => {
    expect(render.find('Text')).toHaveLength(15);
  });
  ``;

  it('should have 2 TouchableHighlight for more and add task button text', () => {
    expect(render.find('TouchableHighlight')).toHaveLength(2);
  });
});
