import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
require('isomorphic-fetch');

import MemberList from '../components/MemberList/MemberList';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};
const mockUserIds = [1];

describe('Testing Member List Component', () => {
  const wrapper = shallow(<MemberList user_ids={mockUserIds} users={{}} />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
