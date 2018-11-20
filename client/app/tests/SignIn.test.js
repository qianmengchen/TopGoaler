import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
import { Input } from 'react-native-elements';
require('isomorphic-fetch');

import SignIn from '../components/SignIn/SignIn';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initAuthState = {
  isLoggedIn: false,
  username: ''
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
});
