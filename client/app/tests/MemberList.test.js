import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
import { Avatar } from 'react-native-elements';
require('isomorphic-fetch');

import MemberList from '../components/MemberList/MemberList';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing Member List Component', () => {
  const nav = sinon.spy(MemberList.prototype, '_navigateToProfile');

  const wrapper = shallow(<MemberList />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should invoke correct methods when pressing profile pic', () => {
    const navBtn = render.find(Avatar).at(1);
    navBtn.simulate('press');
    expect(nav.callCount).toBe(1);
  });
});
