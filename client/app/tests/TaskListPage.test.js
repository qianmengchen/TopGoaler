import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
require('isomorphic-fetch');

import TaskListPage from '../components/TaskListPage/TaskListPage';
const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing Task Checklist component', () => {
  const wrapper = shallow(<TaskListPage />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should contain a Text for title', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});
