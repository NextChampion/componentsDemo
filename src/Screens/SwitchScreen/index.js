import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';

export default class SwitchScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text> 普通的Switch </Text>
        <Switch style={styles.switch} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switch: {
    // backgroundColor: 'red',
  },
});
