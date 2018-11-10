import React, { Component } from 'react';
import { TabNav } from '../Navigators/index';

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

  render() {
    return <TabNav />;
  }
}

export default App;
