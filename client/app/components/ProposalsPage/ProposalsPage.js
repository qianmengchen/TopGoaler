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

  render() {
    return (
      <ScrollView contentContainerStyle={list.container}>
        <Proposal
          title="Leetcode Daily"
          subtitle="Do a problem from LeetCode everyday"
          period="Daily"
          pattern="Once"
        />
        <Proposal
          title="Leetcode Daily x2"
          subtitle="Do two problem from LeetCode everyday"
          period="Daily"
          pattern="Twice"
        />
      </ScrollView>
    );
  }
}

export default ProposalsPage;