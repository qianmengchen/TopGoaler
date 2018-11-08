import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../components/App/index';

describe('Testing App component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("NavigationContainer").exists()).toBe(true);
  });
});
