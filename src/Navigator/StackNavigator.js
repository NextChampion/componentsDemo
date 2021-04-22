import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ViewScreen from '../Screens/ViewScreen';
import TextScreen from '../Screens/TextScreen';
import TextInputScreen from '../Screens/TextInputScreen';
import ScrollViewScreen from '../Screens/ScrollViewScreen';
import SwitchScreen from '../Screens/SwitchScreen';
import AlertScreen from '../Screens/AlertScreen';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="View" component={ViewScreen} />
      <Stack.Screen name="Text" component={TextScreen} />
      <Stack.Screen name="TextInput" component={TextInputScreen} />
      <Stack.Screen name="ScrollView" component={ScrollViewScreen} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Alert" component={AlertScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
