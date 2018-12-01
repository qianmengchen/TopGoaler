import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Avatar } from 'react-native-elements';
import sinon from 'sinon';
require('isomorphic-fetch');

import ChannelPublicView from '../components/ChannelPublicView/ChannelPublicView';
import { MemberList } from '../components/MemberList/index';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing Channel List Page', () => {
  const mockSubscribe = jest.fn();
  const mockNav = { dispatch: jest.fn() };
  const nav = sinon.spy(ChannelPublicView.prototype, '_goToMemberPage');

  const mockChannel = {
    id: 42,
    title: 'bxzhu_channel',
    creator: 1,
    subtitle: 'bxzhu',
    image_url: 'http://shortlink.in/themes/v3/styles/img/url-link.png'
  };
  const mockUserChannel = [
    {
      user_id: 1,
      channel_id: 1
    }
  ];
  const mockTask = [
    {
      channel_id: 1
    }
  ];
  const mockChannelActivities = [
    {
      create_time: '2018-11-27T14:19:14.000Z',
      task_id: 1,
      user_id: 1,
      event: 2
    }
  ];
  const mockSubscribed_users = [
    {
      user_id: 1
    }
  ];
  const wrapper = shallow(
    <ChannelPublicView
      channel={mockChannel}
      user_channel={mockUserChannel}
      task={mockTask}
      navigation={mockNav}
      subscribe={mockSubscribe}
      channelActivities={mockChannelActivities}
      subscribed_users={mockSubscribed_users}
    />,
    {
      context: { store: mockStore(initialTaskState) }
    }
  );
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should have 1 Avatar for channel logo', () => {
    expect(render.find(Avatar)).toHaveLength(1);
  });

  it('should have 10 Text: title, description, tasks and #, members and #, goals, completed and #, button text', () => {
    expect(render.find('Text')).toHaveLength(10);
  });

  it('should have 1 TouchableHightlight for follow button', () => {
    expect(render.find('TouchableHighlight')).toHaveLength(1);
  });

  it('should have 1 Member List', () => {
    expect(render.find(MemberList)).toHaveLength(1);
  });

  it('should invoke correct methods when pressing follow button', () => {
    const followBtn = render.find('TouchableHighlight');
    followBtn.simulate('press');
    expect(nav.callCount).toBe(1);
  });
});
