import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
import { Input } from 'react-native-elements';
import renderer from 'react-test-renderer';
require('isomorphic-fetch');

import SignUp from '../components/SignUp/SignUp';
import TaskChecklist from '../components/TaskChecklist/TaskChecklist';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
    tasks: ['do frontend', 'do backend', 'do MVP ftw'],
    isFetching: false,
    currentTaskPage: 'ChannelListPage'
  };

describe('Testing Task Checklist component', () => {
  const _submit = jest.fn();
  const navigation = { navigate: jest.fn() };
  const submit = sinon.spy(SignUp.prototype, '_submit');
  const signin = sinon.spy(SignUp.prototype, '_signIn');

  const wrapper = shallow(<TaskChecklist />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should contain a FlatList', () => {
    expect(render.find('FlatList')).toHaveLength(1);
  });
});
