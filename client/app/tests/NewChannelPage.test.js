import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
import { Button, Input } from 'react-native-elements';
require('isomorphic-fetch');

import NewChannelPage from '../components/NewChannelPage/NewChannelPage';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing New Channel Page', () => {
  const mockNavigation = { navigate: jest.fn() };
  const mockAddChannel = jest.fn();
  const submit = sinon.spy(NewChannelPage.prototype, '_submit');

  const wrapper = shallow(
    <NewChannelPage addChannel={mockAddChannel} navigation={mockNavigation} />,
    {
      context: { store: mockStore(initialTaskState) }
    }
  );
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should have 1 Text field to indicate creating a new channel', () => {
    expect(render.find('Text')).toHaveLength(1);
  });

  it('should have 1 Button to create channel', () => {
    expect(render.find(Button)).toHaveLength(1);
  });

  it('should have 2 Input fields for name and description', () => {
    expect(render.find(Input)).toHaveLength(2);
  });

  it('should invoke corresponding methods when create channel button is pressed', () => {
    const createChannelBtn = render.find(Button);
    createChannelBtn.simulate('press');
    expect(submit.calledOnce).toBe(true);
  });

  it('should correctly update name state when text changes', () => {
    const nameField = wrapper.find(Input).at(0);
    expect(nameField.props().value).toBe('');

    nameField.simulate('changeText', 'notadmin');
    expect(wrapper.state('name')).toBe('notadmin');

    // re-render for updated state
    const nameField2 = wrapper.find(Input).at(0);
    expect(nameField2.props().value).toBe('notadmin');
  });

  it('should correctly update description state when text changes', () => {
    const descriptionField = wrapper.find(Input).at(1);
    expect(descriptionField.props().value).toBe('');

    descriptionField.simulate('changeText', 'notadmin');
    expect(wrapper.state('name')).toBe('notadmin');

    // re-render for updated state
    const descriptionField2 = wrapper.find(Input).at(1);
    expect(descriptionField2.props().value).toBe('notadmin');
  });

  it('should give no error messages when errorCheck fails', () => {
    const nameField = wrapper.find(Input).at(0);
    expect(nameField.props().errorMessage).toBe(null);
  });
});
