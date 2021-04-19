import React, {PureComponent} from 'react';
import {Text, View, Button, FlatList, StyleSheet} from 'react-native';
import ComponentsList from './LocalData';

export default class HomeScreen extends PureComponent {
  onButtonPress = name => {
    const {navigation} = this.props;
    navigation.navigate(name);
  };

  renderItem = ({item}) => {
    const {name} = item || {};
    return (
      <View style={styles.row}>
        <Text>组件名称:</Text>
        <Button title={name} onPress={() => this.onButtonPress(name)} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}> 组件列表: </Text>
        </View>
        <FlatList data={ComponentsList} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    marginVertical: 5,
    marginLeft: 5,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    paddingHorizontal: 19,
    flexDirection: 'row',
    paddingVertical: 8,
    marginBottom: 3,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
});
