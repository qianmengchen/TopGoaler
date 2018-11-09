import React, { Component } from 'react';
import { TabNav } from '../Navigators/index';

class App extends Component {
  constructor() {
    super();
    // @see: https://github.com/facebook/react-native/issues/9599
    if (typeof global.self === 'undefined') {
      global.self = global;
    }
  }

  render() {
    return <TabNav />;
  }
}

export default App;
