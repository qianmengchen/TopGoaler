import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Profile extends Component {
  render() {
    return (
      <View>
        <Card title="MY PROFILE" image={require('../../images/boy.png')}>
          <Text>
            {' '}
            The Task Tab is now on the '{this.props.currentTaskPage}' page{' '}
          </Text>
        </Card>
      </View>
    );
  }
}

export default Profile;
