import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import * as styles from './styles';
import ChannelIcon from './ChannelIcon';

class ChannelIconList extends Component {
  constructor(props) {
    super(props);

    this.fakeProps = {
      channels: [
        {
          name: 'leetcoder',
          icon: require('../../images/leetcode.jpg')
        },
        {
          name: 'runner',
          icon: require('../../images/run.jpg')
        },
        {
          name: 'GRE',
          icon: require('../../images/GRE.jpg')
        },
        {
          name: 'GRE1',
          icon: require('../../images/GRE.jpg')
        },
        {
          name: 'GRE2',
          icon: require('../../images/GRE.jpg')
        },
        {
          name: 'GRE3',
          icon: require('../../images/GRE.jpg')
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.list.container}>
        <FlatList
          horizontal
          data={this.fakeProps.channels}
          renderItem={ChannelIcon}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

export default ChannelIconList;
