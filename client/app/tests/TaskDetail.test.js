import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
require('isomorphic-fetch');

import TaskDetail from '../components/TaskDetail/TaskDetail';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing Sign In Page', () => {
  const accept = sinon.spy(TaskDetail.prototype, '_accept');
  const unfollow = sinon.spy(TaskDetail.prototype, '_unfollow');
  const done = sinon.spy(TaskDetail.prototype, '_done');

  const wrapper = shallow(<TaskDetail />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('renders when state is set to not available', () => {
    wrapper.setState({ status: 'in-progress' });
    expect(wrapper.state('status')).toBe('in-progress');

    wrapper.setState({ status: 'done' });
    expect(wrapper.state('status')).toBe('done');

    wrapper.setState({ status: 'available' });
    expect(wrapper.state('status')).toBe('available');
  });

  it('should update status state when buttons are pressed', () => {
    wrapper.find('TouchableHighlight').forEach(child => {
      child.simulate('press');
    });

    wrapper.setState({ status: 'in-progress' });
    wrapper.find('TouchableHighlight').forEach(child => {
      child.simulate('press');
    });

    expect(accept.calledOnce).toBe(true);
    expect(done.calledOnce).toBe(true);
    expect(unfollow.calledOnce).toBe(true);
  });
});
