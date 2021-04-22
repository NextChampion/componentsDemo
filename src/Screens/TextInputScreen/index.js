import React, {PureComponent} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default class TextInputScreen extends PureComponent {
  render() {
    return (
      <View style={styles.contaier}>
        <Text>普通输入框, Android有固定的高度</Text>
        <TextInput placeholder="TextInput" style={styles.textInput} />
        <Text style={styles.text}>双平台一致:</Text>
        <TextInput value="TextInput" style={styles.textInput1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contaier: {
    flex: 1,
  },
  textInput: {
    backgroundColor: 'red',
  },
  text: {
    marginTop: 10,
  },
  textInput1: {
    backgroundColor: 'red',
    height: 50,
  },
});
