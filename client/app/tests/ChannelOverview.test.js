import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Avatar, Text } from 'react-native-elements';
require('isomorphic-fetch');

import ChannelOverview from '../components/ChannelOverview/ChannelOverview';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const _goToChannel = jest.fn();
const _subscribe = jest.fn();

const ch = {
  id: 42,
  title: 'bxzhu_channel',
  creator: 1,
  subtitle: 'bxzhu',
  image_url: 'http://shortlink.in/themes/v3/styles/img/url-link.png'
};

const user_channel = [];
const task = [];

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing Channel Overview Page', () => {
  const wrapper = shallow(
    <ChannelOverview
      key={0}
      channel={ch}
      goToChannel={() => _goToChannel()}
      subscribe={() => _subscribe()}
      user_channel={user_channel}
      task={task}
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

  it('should have 3 Text: title, subtitle, description', () => {
    expect(render.find(Text)).toHaveLength(3);
  });

  it('should have 1 TouchableWithoutFeedback for channel logo', () => {
    expect(render.find('TouchableWithoutFeedback')).toHaveLength(1);
  });

  it('should invoke correct methods when pressing submit button', () => {
    const submitBtn = render.find('TouchableHighlight');
    submitBtn.simulate('press');
    expect(_goToChannel).toHaveBeenCalledTimes(1);
  });
});
