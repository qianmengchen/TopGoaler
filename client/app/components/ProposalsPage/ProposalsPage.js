import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { list } from './styles';
import Proposal from './Proposal';

class ProposalsPage extends Component {
  _handleVoteFactory = proposal_id => points => {
    this.props.handleVote(this.props.user_id, proposal_id, points);
  };
  render() {
    return (
      <ScrollView contentContainerStyle={list.container}>
        <Text style={list.title}>Task Proposals</Text>

        {this.props.proposals.map(id => {
          return (
            <Proposal
              key={id.id}
              title={id.title}
              subtitle={id.subtitle}
              period={id.period}
              pattern={id.pattern}
              handleVote={this._handleVoteFactory(id.id)}
            />
          );
        })}
      </ScrollView>
    );
  }
}

export default ProposalsPage;
