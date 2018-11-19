import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
import { Input } from 'react-native-elements';
require('isomorphic-fetch');

import SignUp from '../components/SignUp/SignUp';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initAuthState = {
  isLoggedIn: false,
  username: ''
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
});
