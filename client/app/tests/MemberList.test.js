import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
require('isomorphic-fetch');

import MemberList from '../components/MemberList/MemberList';
import { Avatar } from 'react-native-elements';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};
const mockUserIds = [1];

const mockUsers = [
  {
    id: 1,
    name: 'admin',
    password: 'admin',
    email: 'this is a email@email.com',
    avatar_url: 'http://shortlink.in/themes/v3/styles/img/url-link.png'
  }
];

describe('Testing Member List Component', () => {
  const wrapper = shallow(
    <MemberList user_ids={mockUserIds} users={mockUsers} />,
    {
      context: { store: mockStore(initialTaskState) }
    }
  );
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('generates correct random colors', () => {
    MemberList.prototype._getRandomColor();
  });

  it('contains avatar', () => {
    expect(wrapper.find(Avatar).exists()).toBe(true);
  });
});
