import React, { Component } from 'react';
import { AuthNav } from '../Navigators/index';

class App extends Component {
  constructor() {
    super();

    /*eslint-disable no-undef*/

    // @see: https://github.com/facebook/react-native/issues/9599
    if (typeof global.self === 'undefined') {
      global.self = global;
    }

    /*eslint-enable no-undef*/
  }

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    console.log(this.props.data);
    return <AuthNav />;
  }
}

export default App;
