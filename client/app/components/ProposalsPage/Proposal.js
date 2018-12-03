import React, { Component } from 'react';
import { Text, View, Slider, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import { frequency, vote } from './styles';

class Proposal extends Component {
  _handleVote() {
    this.props.handleVote(this.state.points);
  }

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
