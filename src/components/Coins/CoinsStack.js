import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function CoinsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoinsStack" />
    </Stack.Navigator>
  );
}

export default CoinsStack;
