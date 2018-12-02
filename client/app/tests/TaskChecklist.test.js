import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
require('isomorphic-fetch');

import TaskChecklist from '../components/TaskChecklist/TaskChecklist';
import TaskEntry from '../components/TaskChecklist/TaskEntry';
const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

const mockCompleteTask = jest.fn();
const mockTasks = [
  {
    id: 1,
    title: 'Review course material',
    channel_id: 1,
    point: 1,
    period: 1,
    pattern: 1
  }
];

describe('Testing Task Checklist component', () => {
  const wrapper = shallow(
    <TaskChecklist
      onGoingTasks={mockTasks}
      finishedTasks={mockTasks}
      completeTask={mockCompleteTask}
    />,
    {
      context: { store: mockStore(initialTaskState) }
    }
  );
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should contain a FlatList', () => {
    expect(render.find('FlatList')).toHaveLength(1);
  });

  it('has a function for completing task', () => {
    TaskChecklist.prototype._handleCompleteTaskWrap(1);
  });
});

describe('Testing Task Entry component', () => {
  const mockItem = {
    id: 1,
    title: 'Review course material',
    channel_id: 1,
    point: 1,
    period: 1,
    pattern: 1
  };

  const wrapper = shallow(
    <TaskEntry
      onGoingTasks={mockTasks}
      finishedTasks={mockTasks}
      completeTask={mockCompleteTask}
      item={mockItem}
      finished={false}
    />,
    {
      context: { store: mockStore(initialTaskState) }
    }
  );
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('renders as expected when finished is false', () => {
    const wrapper = shallow(
      <TaskEntry
        onGoingTasks={mockTasks}
        finishedTasks={mockTasks}
        completeTask={mockCompleteTask}
        item={mockItem}
        finished={true}
      />,
      {
        context: { store: mockStore(initialTaskState) }
      }
    );
    const render = wrapper.dive();

    expect(render).toMatchSnapshot();
  });
});
