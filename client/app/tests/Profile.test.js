import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
import { Button, Avatar } from 'react-native-elements';
require('isomorphic-fetch');

import Profile from '../components/Profile/Profile';
import {
  userChannelFilter,
  channelGetter,
  taskGetter,
  userTaskFilter
} from '../components/Profile/utils';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

const userInfo = {
  name: 'mock'
};

const navigation = {
  navigate: jest.fn()
};

describe('Testing Channel List Page', () => {
  const mockLogout = jest.fn();
  const logout = sinon.spy(Profile.prototype, '_handleLogout');
  const goToPerformancePage = sinon.spy(
    Profile.prototype,
    '_goToPerformancePage'
  );

  const wrapper = shallow(
    <Profile
      logout={mockLogout}
      userInfo={userInfo}
      userActivities={[]}
      userTasks={[
        {
          id: 1,
          title: 'Review course material',
          channel_id: 1,
          point: 1,
          period: 1,
          pattern: 1
        }
      ]}
      navigation={navigation}
    />,
    {
      context: { store: mockStore(initialTaskState) }
    }
  );
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should have 1 Avatar for profile pic', () => {
    expect(render.find(Avatar)).toHaveLength(1);
  });

  it('should have 2 Buttons: summary and logout', () => {
    expect(render.find(Button)).toHaveLength(2);
  });

  it('should invoke correct methods when pressing logout', () => {
    render.find(Button).forEach(child => {
      child.simulate('press');
    });

    expect(logout.calledOnce).toBe(true);
    expect(goToPerformancePage.calledOnce).toBe(true);
  });

  it('should push tasks into the correct array', () => {
    const wrapper = shallow(
      <Profile
        logout={mockLogout}
        userInfo={userInfo}
        userActivities={[]}
        userTasks={[
          {
            id: 1,
            title: 'Review course material',
            channel_id: 1,
            point: 1,
            period: 1,
            pattern: null
          }
        ]}
        navigation={navigation}
      />,
      {
        context: { store: mockStore(initialTaskState) }
      }
    );
    const render = wrapper.dive();
    expect(render).toMatchSnapshot();
  });

  it('util functions should return correct results', () => {
    expect(userChannelFilter(1)({ user_id: 1 })).toBe(true);
    expect(userChannelFilter(1)({ user_id: 2 })).toBe(false);

    expect(userTaskFilter(1)({ user_id: 1 })).toBe(true);
    expect(userTaskFilter(1)({ user_id: 2 })).toBe(false);

    // not sure what to expect
    channelGetter(
      [{ user_id: 1, channel_id: 1 }],
      [
        {
          id: 1,
          title: 'CS130',
          creator: 1,
          subtitle: 'admin title',
          image_url: 'http://shortlink.in/themes/v3/styles/img/url-link.png'
        }
      ]
    );
    taskGetter(
      [{ task_id: 1, user_id: 1 }],
      [
        {
          id: 1,
          title: 'Review course material',
          channel_id: 1,
          point: 1,
          period: 1,
          pattern: 1
        }
      ]
    );
  });
});
