import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { board, text, button } from './styles';
import RNPickerSelect from 'react-native-picker-select';

class NewTaskPage extends Component {
  _updateName(text) {
    this.setState({ name: text });
  }

  _updateDescription(text) {
    this.setState({ description: text });
  }

  _errorCheck = () => false;

  _submit() {
    this.props.addChannel(this.state.name, this.props.username);
    this.props.navigation.navigate('ChannelListPage');
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      period: 'Daily',
      pattern: 'Once',
      favColor: '',
      items: [
        {
          label: 'Red',
          value: 'red'
        },
        {
          label: 'Orange',
          value: 'orange'
        },
        {
          label: 'Blue',
          value: 'blue'
        }
      ]
    };
  }

  render() {
    return (
      <View style={board.container}>
        <View style={board.title}>
          <Text style={text.title}>New Task</Text>
        </View>
        <Input
          label="Name"
          labelStyle={text.label}
          errorStyle={{ color: 'red' }}
          errorMessage={
            this._errorCheck(this.state.name)
              ? 'Please enter a valid channel name'
              : null
          }
          containerStyle={board.input}
          value={this.state.name}
          onChangeText={this._updateName.bind(this)}
        />
        <Input
          label="Description"
          labelStyle={text.label}
          errorStyle={{ color: 'red' }}
          errorMessage={
            this._errorCheck(this.state.description)
              ? 'Please enter a valid channel name'
              : null
          }
          containerStyle={board.input}
          value={this.state.description}
          onChangeText={this._updateDescription.bind(this)}
        />
        <View style={board.button}>
          <Button
            title="Create"
            buttonStyle={button.create}
            onPress={this._submit.bind(this)}
          />
        </View>

        <RNPickerSelect
          items={this.state.items}
          placeholder={{}}
          onValueChange={value => {
            this.setState({
              favColor: value
            });
          }}
        >
          <Text>Select your favorite color</Text>
        </RNPickerSelect>
      </View>
    );
  }
}

export default NewTaskPage;
