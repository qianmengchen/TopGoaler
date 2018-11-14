import React from 'react';
import { shallow } from 'enzyme';
import AppEntry from '../index';

describe('Testing App component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<AppEntry />);
    expect(wrapper.find('Connect(App)').exists()).toBe(true);
  });
});
