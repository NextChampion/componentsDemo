import React, {PureComponent} from 'react';
import {Text, View, Button} from 'react-native';

export default class HomeScreen extends PureComponent {
  onButtonPress = () => {
    const {navigation} = this.props;
    navigation.navigate('View');
    console.log('onButtonPress', this.props);
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button title="View" onPress={this.onButtonPress} />
      </View>
    );
  }
}
