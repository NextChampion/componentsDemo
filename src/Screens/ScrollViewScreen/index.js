import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, ScrollView, RefreshControl} from 'react-native';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

export default class ScrollViewScreen extends PureComponent {
  state = {
    refreshing: false,
  };

  onRefresh = () => {
    this.setState({refreshing: true});
    wait(2000).then(() => this.setState({refreshing: false}));
  };
  render() {
    const {refreshing} = this.state;
    return (
      <View style={styles.container}>
        {/* <Text> ScrollViewScreen </Text> */}
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.onRefresh}
            />
          }>
          <Text>ScrollView</Text>
        </ScrollView>
        <View style={styles.scrollContainer}>
          <ScrollView style={styles.scrollView1}>
            <Text>ScrollView</Text>
          </ScrollView>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView style={styles.scrollView1}>
            <Text>ScrollView11</Text>
            <View style={styles.flexView} />
            <Text>ScrollView22</Text>
          </ScrollView>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView
            style={styles.scrollView1}
            contentContainerStyle={styles.content}>
            <Text>ScrollView11</Text>
            <View style={styles.flexView} />
            <Text>ScrollView22</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 200,
  },
  scrollView: {
    backgroundColor: 'red',
    height: 100,
    // width: 300,
  },
  scrollContainer: {
    height: 100,
    borderWidth: 1,
    // width: 300,
  },
  scrollView1: {
    backgroundColor: 'green',
    height: 100,
    // width: 300,
  },
  flexView: {
    flex: 1,
    backgroundColor: 'blue',
  },
  content: {
    flex: 1,
  },
});
