import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';
require('isomorphic-fetch');

import ProposalsPage from '../components/ProposalsPage/ProposalsPage';
import Proposal from '../components/ProposalsPage/Proposal';

const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
};

const proposals = [
  {
    id: 1,
    title: 'do 10 hard problems',
    channel_id: '2',
    subtitle: 'this is a proposal',
    period: 0,
    pattern: 1
  },
  {
    id: 2,
    title: 'go to gym',
    channel_id: '3',
    subtitle: 'this is a proposal',
    period: 1,
    pattern: 4
  }
];

describe('Testing Proposals Page', () => {
  const wrapper = shallow(<ProposalsPage proposals={proposals} />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});

describe('Testing Proposal Component', () => {
  const mockHandleVote = jest.fn();
  // const mockHandleVote = ProposalsPage.prototype._handleVoteFactory;
  const handleVote = sinon.spy(Proposal.prototype, '_handleVote');

  const wrapper = shallow(<Proposal handleVote={mockHandleVote} />, {
    context: { store: mockStore(initialTaskState) }
  });
  const render = wrapper.dive();

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('correctly updates point states on value change', () => {
    const slider = wrapper.find('Slider');
    expect(slider.props().value).toBe(50);

    slider.simulate('valueChange', 100);
    expect(wrapper.state('points')).toBe(100);

    // re-render for updated state
    const slider2 = wrapper.find('Slider');
    expect(slider2.props().value).toBe(100);
  });

  it('invokes correct methods when pressing vote button', () => {
    wrapper.find('TouchableHighlight').simulate('press');

    expect(handleVote.calledOnce).toBe(true);
  });
});
