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

  _translate(period, pattern) {
    const map_period_to_string = raw => {
      const period_map = { 0: 'day', 1: 'week', 2: 'month', 3: 'once' };
      return period_map[raw];
    };
    period = map_period_to_string(period);
    return period == 'once'
      ? 'once'
      : (pattern < 10 ? pattern : 'unlimited') + 'time(s) per ' + period;
  }

  render() {
    let { title, subtitle, period, pattern, voted } = this.props;
    let freq = this._translate(period, pattern);

    return (
      <Card title={title}>
        <Text>{subtitle}</Text>

        <View style={frequency.container}>
          <Text>Frequency: {freq}</Text>
        </View>

        {!voted ? (
          <Slider
            step={50}
            minimumValue={50}
            maximumValue={350}
            value={this.state.points}
            onValueChange={value => this.setState({ points: value })}
          />
        ) : null}

        {!voted ? (
          <TouchableHighlight
            style={[vote.container, vote.unvoted]}
            underlayColor="#aaa"
            onPress={this._handleVote.bind(this)}
          >
            <View>
              <Text style={vote.buttonText}>
                Vote for {this.state.points} points!
              </Text>
            </View>
          </TouchableHighlight>
        ) : (
          <View style={[vote.container, vote.voted]}>
            <Text style={vote.buttonText}>
              You voted for {this.props.points} points.
            </Text>
          </View>
        )}
      </Card>
    );
  }
}

export default Proposal;
