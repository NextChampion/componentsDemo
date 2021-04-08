import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ViewScreen from '../Screens/ViewScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="View" component={ViewScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
