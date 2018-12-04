import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Card } from 'react-native-elements';
import sinon from 'sinon';
require('isomorphic-fetch');

import ChannelMemberView from '../components/ChannelMemberView/ChannelMemberView';
import { eventToComment } from '../components/ChannelMemberView/utils';
import { Event } from '../constants';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

const channel = {
  title: 'test',
  id: 1
};

describe('Testing Channel Memberview Page', () => {
  const goToTaskListPage = sinon.spy(
    ChannelMemberView.prototype,
    '_goToTaskListPage'
  );
  const goToNewTaskPage = sinon.spy(
    ChannelMemberView.prototype,
    '_goToNewTaskPage'
  );
  const goToProposalsPage = sinon.spy(
    ChannelMemberView.prototype,
    '_goToProposalsPage'
  );
  const navigation = {
    navigate: jest.fn(),
    setParams: jest.fn(),
    state: {
      params: {
        channel: {
          title: 'xxx',
          image_url: 'xxx'
        }
      }
    }
  };

  const wrapper = shallow(
    <ChannelMemberView
      navigation={navigation}
      channel={channel}
      userID={1}
      activities={[]}
    />,
    {
      context: { store: mockStore(initialTaskState) }
    }
  );
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('should have 2 Cards for displaying scoreboard and tasks', () => {
    expect(render.find(Card)).toHaveLength(2);
  });

  it('should have 11 Text: title, card info, more, add, and vote task button text', () => {
    expect(render.find('Text')).toHaveLength(7);
  });
  ``;

  it('should have 3 TouchableHighlight for more, add, and vote task buttons', () => {
    expect(render.find('TouchableHighlight')).toHaveLength(3);
  });

  it('should invoke correct methods when pressing more/add/vote buttons', () => {
    wrapper.find('TouchableHighlight').forEach(child => {
      child.simulate('press');
    });

    expect(goToNewTaskPage.calledOnce).toBe(true);
    expect(goToProposalsPage.calledOnce).toBe(true);
    expect(goToTaskListPage.calledOnce).toBe(true);
  });

  it('should be able to load ranking score', () => {
    // ChannelMemberView.prototype.UNSAFE_componentWillMount();
    // console.log(ChannelMemberView.prototype._loadRankingScore())
  });

  it('should correctly map events to comments', () => {
    expect(eventToComment(Event.JOIN)).toEqual('Joined task');
    expect(eventToComment(Event.FINISH)).toEqual('Finished task');
    expect(eventToComment(Event.DROP)).toEqual('Dropped task');
  });
});
