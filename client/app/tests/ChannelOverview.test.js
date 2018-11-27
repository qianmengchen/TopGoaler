import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Avatar, Text } from 'react-native-elements';
import sinon from 'sinon';
require('isomorphic-fetch');

import ChannelOverview from '../components/ChannelOverview/ChannelOverview';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

describe('Testing Channel Overview Page', () => {
  const mockGoToChannel = jest.fn();
  const submit = sinon.spy(ChannelOverview.prototype, '_submit');

  const wrapper = shallow(<ChannelOverview goToChannel={mockGoToChannel} />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should have 1 Avatar for channel logo', () => {
    expect(render.find(Avatar)).toHaveLength(1);
  });

  it('should have 3 Text: title, subtitle, description', () => {
    expect(render.find(Text)).toHaveLength(3);
  });

  it('should have 1 TouchableWithoutFeedback for channel logo', () => {
    expect(render.find('TouchableWithoutFeedback')).toHaveLength(1);
  });

  it('should invoke correct methods when pressing submit button', () => {
    const submitBtn = render.find('TouchableHighlight');
    submitBtn.simulate('press');
    expect(submit.callCount).toBe(1);
  });
});
