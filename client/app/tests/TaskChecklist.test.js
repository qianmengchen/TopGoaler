import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
require('isomorphic-fetch');

import TaskChecklist from '../components/TaskChecklist/TaskChecklist';
const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

const mockCompleteTask = jest.fn();

describe('Testing Task Checklist component', () => {
  const wrapper = shallow(
    <TaskChecklist
      onGoingTasks={[]}
      finishedTasks={[]}
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
});
