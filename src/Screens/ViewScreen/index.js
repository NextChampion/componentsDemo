import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ViewScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text> ViewScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
