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

/**
 * This is the component that will check if an user is logged in and redirect accordingly.
 *
 * @class AuthNav
 * @property {boolean} - A boolean value indicating whether the current user is logged in or not.
 */

class AuthNav extends Component {
  render() {
    return this.props.isLoggedIn ? <TabNav /> : <SignNav />;
  }
}

export default connect(state => state.auth)(AuthNav);
