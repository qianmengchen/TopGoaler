import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { board, text, button } from './styles';
import { constructChannel } from '../../constructors';

class NewChannelPage extends Component {
  _updateName(text) {
    this.setState({ name: text });
  }

  _updateDescription(text) {
    this.setState({ description: text });
  }

  _updateImageUrl(text) {
    this.setState({ image_url: text });
  }

  _errorCheck = () => false;

  _submit() {
    const { name, description, image_url } = this.state;
    const { userId } = this.props;
    const channel = constructChannel(name, description, userId, image_url);
    this.props.addChannel(channel, this.props.userId);
    this.props.navigation.navigate('ChannelListPage');
  }

  /**
   * @property {number} userId - A unique number identifying the user.
   * @property {function} addChannel - A function allowing the user to create a new channel as the creator.
   */

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      image_url: 'http://shortlink.in/themes/v3/styles/img/url-link.png'
    };
  }

  render() {
    return (
      <View style={board.container}>
        <View style={board.title}>
          <Text style={text.title}>New Channel</Text>
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
              ? 'Please enter a valid channel description'
              : null
          }
          containerStyle={board.input}
          value={this.state.description}
          onChangeText={this._updateDescription.bind(this)}
        />
        <Input
          label="Image"
          labelStyle={text.label}
          errorStyle={{ color: 'red' }}
          errorMessage={
            this._errorCheck(this.state.image_url)
              ? 'Please enter a valid url'
              : null
          }
          containerStyle={board.input}
          value={this.state.image_url}
          onChangeText={this._updateImageUrl.bind(this)}
        />
        <View style={board.button}>
          <Button
            title="Create"
            buttonStyle={button.create}
            onPress={this._submit.bind(this)}
          />
        </View>
      </View>
    );
  }
}

export default NewChannelPage;
