import React, {PureComponent} from 'react';
import {Text, View, Alert, Button} from 'react-native';

export default class AlertScreen extends PureComponent {
  createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  render() {
    return (
      <View>
        <Text> AlertScreen </Text>
        <Button title={'2-Button Alert'} onPress={this.createTwoButtonAlert} />
        <Button
          title={'3-Button Alert'}
          onPress={this.createThreeButtonAlert}
        />
      </View>
    );
  }
}
