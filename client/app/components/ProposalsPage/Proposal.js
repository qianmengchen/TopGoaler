import React, { Component } from 'react';
import { Text, View, Slider, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import { frequency, vote } from './styles';

class Proposal extends Component {
  _handleVote() {
    this.props.handleVote(this.state.points);
  }

  /**
   * @property {number} key - A unique number identifying this proposal.
   * @property {string} title - The title of the new task.
   * @property {string} subtitle - A short description of the new task.
   * @property {number} period - A type encoding indicating the day, week, or month period of a task.
   * @property {number} pattern - A value indicating the numbere of times a user can complete a task within a given period.
   * @property {function} handleVote - A function allowing the user to vote on a specific this task and update the vote count.
   */
  constructor(props) {
    super(props);
    this.state = {
      points: 50
    };
  }

  render() {
    let { title, subtitle, period, pattern } = this.props;

    return (
      <Card title={title}>
        <Text>{subtitle}</Text>

        <View style={frequency.container}>
          <Text>
            Frequency: {pattern} {period}{' '}
          </Text>
        </View>

        <Slider
          step={50}
          minimumValue={50}
          maximumValue={350}
          value={this.state.points}
          onValueChange={value => this.setState({ points: value })}
        />

        <TouchableHighlight
          style={vote.container}
          underlayColor="#aaa"
          onPress={this._handleVote.bind(this)}
        >
          <View>
            <Text style={vote.buttonText}>
              {' '}
              Vote for {this.state.points} points!{' '}
            </Text>
          </View>
        </TouchableHighlight>
      </Card>
    );
  }
}

export default Proposal;
