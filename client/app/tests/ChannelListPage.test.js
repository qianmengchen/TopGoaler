import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
import { Button, SearchBar } from 'react-native-elements';
require('isomorphic-fetch');

import ChannelListPage from '../components/ChannelListPage/ChannelListPage';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing Channel List Page', () => {
  const channels = { map: jest.fn() };
  const navigation = { navigate: jest.fn() };
  const addChannel = sinon.spy(ChannelListPage.prototype, '_addChannel');

  const wrapper = shallow(
    <ChannelListPage channels={channels} navigation={navigation} />,
    {
      context: { store: mockStore(initialTaskState) }
    }
  );
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should have 1 Button to add channel', () => {
    expect(render.find(Button)).toHaveLength(1);
  });

  it('should have 1 SearchBar to filter channels', () => {
    expect(render.find(SearchBar)).toHaveLength(1);
  });

  it('should invoke corresponding methods when add channel button is pressed', () => {
    const addChannelBtn = render.find(Button);
    addChannelBtn.simulate('press');
    expect(addChannel.calledOnce).toBe(true);
  });
});
