import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class TextScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>默认行高对比:</Text>
        <Text style={styles.text1}>
          这是用来对比Text组件行高的文字这是用来对比Text组件行高的文字这是用来对比Text组件行高的文字这是用来对比Text组件行高的文字这是用来对比Text组件行高的文字
        </Text>
        <Text> 调整高度 </Text>
        <Text style={styles.text2}>
          这是用来对比Text组件调整行高效果的文字这是用来对比Text组件调整行高效果的文字这是用来对比Text组件调整行高效果的文字这是用来对比Text组件调整行高效果的文字这是用来对比Text组件调整行高效果的文字
        </Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>按钮文字不居中</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText1}>调整按钮文字居中</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    backgroundColor: 'red',
  },
  text2: {
    backgroundColor: 'green',
    fontSize: 14,
    lineHeight: 14,
  },
  button: {
    marginTop: 40,
    marginLeft: 30,
    height: 50,
    width: 130,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    backgroundColor: 'red',
  },
  buttonText1: {
    backgroundColor: 'green',
    marginBottom: 1,
  },
});
