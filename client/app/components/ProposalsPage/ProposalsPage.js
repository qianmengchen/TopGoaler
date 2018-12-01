import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { list } from './styles';
import Proposal from './Proposal';

class ProposalsPage extends Component {
  static navigationOptions = () => ({
    title: 'Task Proposals',
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white'
    }
  });

  _handleVoteFactory = proposal_id => points => {
    console.log("if i never reach here i'll quit cs");
    this.props.handleVote(this.props.user_id, proposal_id, points);
  };
  render() {
    return (
      <ScrollView contentContainerStyle={list.container}>
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
