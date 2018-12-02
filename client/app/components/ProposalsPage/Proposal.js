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

        {/* <Text>{this.state.points}</Text> */}

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
