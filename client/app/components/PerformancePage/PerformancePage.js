import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  board,
  title,
  text,
  infoCard,
  leftPart,
  rightPart,
  chart
} from './styles';

class PerformancePage extends Component {
  render() {
    return (
      <View style={board.container}>
        <View style={board.title}>
          <Text style={title.main}>Performance</Text>
        </View>
        <View style={board.infoCard}>
          <View style={infoCard.leftPart}>
            <View style={leftPart.subtitle}>
              <Text style={title.sub}>Task Done</Text>
            </View>
            <View style={leftPart.number}>
              <Text style={text.number}>3</Text>
              <Text style={text.number}>13</Text>
              <Text style={text.number}>42</Text>
            </View>
            <View style={leftPart.period}>
              <Text style={text.period}>Day</Text>
              <Text style={text.period}>Week</Text>
              <Text style={text.period}>Month</Text>
            </View>
          </View>
          <View style={infoCard.rightPart}>
            <View style={rightPart.subtitle}>
              <Text style={title.sub}>Scores</Text>
            </View>
            <View style={rightPart.stats}>
              <Text style={text.stat}>#LeetCoders 1830 10%</Text>
              <Text style={text.stat}>#Bruinrunner 1300 5%</Text>
              <Text style={text.stat}>#Random1 30 70%</Text>
              <Text style={text.stat}>#Random2 460 45%</Text>
            </View>
          </View>
        </View>
        <View style={board.chart} />
      </View>
    );
  }
}

export default PerformancePage;
