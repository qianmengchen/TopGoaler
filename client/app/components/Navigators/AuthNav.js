import React, { Component } from 'React';
import { SignIn } from '../SignIn/index';
import { SignUp } from '../SignUp/index';
import { createSwitchNavigator } from 'react-navigation';

import TabNav from './TabNav';
import { connect } from 'react-redux';

const SignNav = createSwitchNavigator(
  {
    signUp: SignUp,
    signIn: SignIn
  },
  {
    initialRouteName: 'signIn'
  }
);

class AuthNav extends Component {
  render() {
    return this.props.isLoggedIn ? <TabNav /> : <SignNav />;
  }
}

export default connect(state => state.auth)(AuthNav);
