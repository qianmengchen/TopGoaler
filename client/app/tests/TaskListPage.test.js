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

describe('Testing Task List Page', () => {
  const tasks = [
    {
      id: 1,
      title: 'Review course material',
      channel_id: 1,
      point: 1,
      period: 1,
      pattern: 1
    }
  ];
  const mockInclude = { includes: jest.fn() };
  const wrapper = shallow(
    <TaskListPage tasks={tasks} user_task_ids={mockInclude} />,
    {
      context: { store: mockStore(initialTaskState) }
    }
  );
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should contain a Text for title', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});
