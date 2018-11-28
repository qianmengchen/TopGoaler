import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
import { Input } from 'react-native-elements';
import renderer from 'react-test-renderer';
require('isomorphic-fetch');

import SignUp from '../components/SignUp/SignUp';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initAuthState = {
  isLoggedIn: false,
  username: '',
  password: '',
  email: ''
};

describe('Testing Sign Up Page', () => {
  const _submit = jest.fn();
  const navigation = { navigate: jest.fn() };
  const submit = sinon.spy(SignUp.prototype, '_submit');
  const signin = sinon.spy(SignUp.prototype, '_signIn');

  const wrapper = shallow(<SignUp navigation={navigation} submit={_submit} />, {
    context: { store: mockStore(initAuthState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should render 5 TouchableHighlight buttons (signin, submit, fb, google, twitter)', () => {
    expect(render.find('TouchableHighlight')).toHaveLength(5);
  });

  it('should invoke corresponding methods when signin and signup buttons are pressed', () => {
    render.find('TouchableHighlight').forEach(child => {
      child.simulate('press');
    });

    expect(submit.calledOnce).toBe(true);
    expect(signin.calledOnce).toBe(true);
  });

  it('should have 3 Input text fields for username, password, and email', () => {
    expect(render.find(Input)).toHaveLength(3);
  });

  it('should have initial username and password be admin', () => {
    let instance = renderer.create(<SignUp />).getInstance();
    expect(instance.state.username).toBe('');
    expect(instance.state.password).toBe('');
    expect(instance.state.email).toBe('');
  });

  it('should have username dependent on state', () => {
    const userfield = wrapper.find(Input).at(0);
    expect(userfield.props().value).toBe('');

    wrapper.setState({ username: 'notadmin' });

    const userfield2 = wrapper.find(Input).at(0);
    expect(userfield2.props().value).toBe('notadmin');

    // reset
    wrapper.setState({ username: '' });
  });

  it('should correctly update username state when text is changed', () => {
    const userfield = wrapper.find(Input).at(0);
    expect(userfield.props().value).toBe('');

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
    wrapper.setState({ password: '' });
  });

  it('should correctly update password state when text is changed', () => {
    const pwfield = wrapper.find(Input).at(1);
    expect(pwfield.props().value).toBe('');

    pwfield.simulate('changeText', 'notadmin');
    expect(wrapper.state('password')).toBe('notadmin');

    // re-render for updated state
    const pwfield2 = wrapper.find(Input).at(1);
    expect(pwfield2.props().value).toBe('notadmin');
  });

  it('should have email dependent on state', () => {
    const emailfield = wrapper.find(Input).at(2);
    expect(emailfield.props().value).toBe('');

    wrapper.setState({ email: 'notadmin' });

    const emailfield2 = wrapper.find(Input).at(2);
    expect(emailfield2.props().value).toBe('notadmin');

    // reset
    wrapper.setState({ email: '' });
  });

  it('should correctly update password state when text is changed', () => {
    const emailfield = wrapper.find(Input).at(2);
    expect(emailfield.props().value).toBe('');

    emailfield.simulate('changeText', 'notadmin');
    expect(wrapper.state('email')).toBe('notadmin');

    // re-render for updated state
    const emailfield2 = wrapper.find(Input).at(2);
    expect(emailfield2.props().value).toBe('notadmin');
  });
});
