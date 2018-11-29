import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Card, Avatar, Divider } from 'react-native-elements';
import { board, infoCard, leftPart, rightPart, chart } from './styles';

class PerformancePage extends Component {
  render() {
    return (
      <View>
        <View style={board.container}>
            <Text style={board.title}>Performance</Text>
            <View>
                <Card containerStyle={board.infoCard}>

                </Card>
            </View>
        </View>
      </View>
    );
  }
}

export default PerformancePage;