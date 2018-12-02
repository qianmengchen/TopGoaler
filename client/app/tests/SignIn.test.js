import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
import { Input } from 'react-native-elements';
import renderer from 'react-test-renderer';
require('isomorphic-fetch');

import SignIn from '../components/SignIn/SignIn';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initAuthState = {
  isLoggedIn: false,
  username: '',
  password: ''
};

describe('Testing Sign In Page', () => {
  const _submit = jest.fn();
  const navigation = { navigate: jest.fn() };
  const submit = sinon.spy(SignIn.prototype, '_submit');
  const signup = sinon.spy(SignIn.prototype, '_signUp');

  const wrapper = shallow(<SignIn navigation={navigation} submit={_submit} />, {
    context: { store: mockStore(initAuthState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should render 2 TouchableHighlight buttons', () => {
    expect(render.find('TouchableHighlight')).toHaveLength(2);
  });

  it('should invoke corresponding methods when signin and signup buttons are pressed', () => {
    render.find('TouchableHighlight').forEach(child => {
      child.simulate('press');
    });

    expect(submit.calledOnce).toBe(true);
    expect(signup.calledOnce).toBe(true);
  });

  it('should have 2 Input text fields for username and password', () => {
    expect(render.find(Input)).toHaveLength(2);
  });

  it('should have initial username and password be admin', () => {
    let instance = renderer.create(<SignIn />).getInstance();
    expect(instance.state.username).toBe('');
    expect(instance.state.password).toBe('');
  });

  it('should have username dependent on state', () => {
    const userfield = wrapper.find(Input).at(0);
    expect(userfield.props().value).toBe('');

    wrapper.setState({ username: 'notadmin' });

    const userfield2 = wrapper.find(Input).at(0);
    expect(userfield2.props().value).toBe('notadmin');

    // reset
    wrapper.setState({ username: 'admin' });
  });

  it('should correctly update username state when text is changed', () => {
    const userfield = wrapper.find(Input).at(0);
    expect(userfield.props().value).toBe('admin');

    userfield.simulate('changeText', 'notadmin');
    expect(wrapper.state('username')).toBe('notadmin');

    // re-render for updated state
    const userfield2 = wrapper.find(Input).at(0);
    expect(userfield2.props().value).toBe('notadmin');
  });

  it('should have password dependent on state', () => {
    const pwfield = wrapper.find(Input).at(1);
    expect(pwfield.props().value).toBe('');

    wrapper.setState({ password: 'notadmin' });

    const pwfield2 = wrapper.find(Input).at(1);
    expect(pwfield2.props().value).toBe('notadmin');

    // reset
    wrapper.setState({ password: 'admin' });
  });

  it('should correctly update password state when text is changed', () => {
    const pwfield = wrapper.find(Input).at(1);
    expect(pwfield.props().value).toBe('admin');

    pwfield.simulate('changeText', 'notadmin');
    expect(wrapper.state('password')).toBe('notadmin');

    // re-render for updated state
    const pwfield2 = wrapper.find(Input).at(1);
    expect(pwfield2.props().value).toBe('notadmin');
  });
});
