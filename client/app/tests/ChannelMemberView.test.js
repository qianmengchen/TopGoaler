import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Avatar, Card } from 'react-native-elements';
import sinon from 'sinon';
require('isomorphic-fetch');

import ChannelMemberView from '../components/ChannelMemberView/ChannelMemberView';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

const channel = {
  title: ''
};

describe('Testing Channel Memberview Page', () => {
  const navigation = { navigate: jest.fn() };
  const nav = sinon.spy(ChannelMemberView.prototype, '_goToHomepage');

  const wrapper = shallow(
    <ChannelMemberView
      navigation={navigation}
      channel={channel}
      activities={[]}
    />,
    {
      context: { store: mockStore(initialTaskState) }
    }
  );
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

  it('should have 16 Text: title, card info, more, add, and vote task button text', () => {
    expect(render.find('Text')).toHaveLength(16);
  });
  ``;

  it('should have 3 TouchableHighlight for more, add, and vote task buttons', () => {
    expect(render.find('TouchableHighlight')).toHaveLength(3);
  });

  it('should invoke correct methods when pressing more button', () => {
    const moreBtn = render.find('TouchableHighlight').at(0);
    moreBtn.simulate('press');
    expect(nav.callCount).toBe(1);
  });
});
