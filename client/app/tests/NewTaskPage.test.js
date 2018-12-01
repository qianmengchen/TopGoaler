import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Input, Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import sinon from 'sinon';
require('isomorphic-fetch');

import NewTaskPage from '../components/NewTaskPage/NewTaskPage';
const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing New Task Page', () => {
  const updateName = sinon.spy(NewTaskPage.prototype, '_updateName');
  const updateDescription = sinon.spy(
    NewTaskPage.prototype,
    '_updateDescription'
  );
  const updatePeriod = sinon.spy(NewTaskPage.prototype, '_updatePeriod');
  const updatePattern = sinon.spy(NewTaskPage.prototype, '_updatePattern');
  const submit = sinon.spy(NewTaskPage.prototype, '_submit');
  const navigation = { navigate: jest.fn() };

  const wrapper = shallow(<NewTaskPage navigation={navigation} />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should correctly update name and description states on text change', () => {
    render.find(Input).forEach(child => {
      child.simulate('changeText', 'new text');
    });

    expect(updateName.calledOnce).toBe(true);
    expect(updateDescription.calledOnce).toBe(true);
  });

  it('should correctly update period and pattern states on text change', () => {
    wrapper.find(RNPickerSelect).forEach(child => {
      child.simulate('valueChange', 'new value');
    });

    expect(updatePeriod.calledOnce).toBe(true);
    expect(updatePattern.calledOnce).toBe(true);
  });

  it('should invoke correct methods when pressing submit button', () => {
    wrapper.find(Button).forEach(child => {
      child.simulate('press');
    });

    expect(submit.calledOnce).toBe(true);
  });
});
