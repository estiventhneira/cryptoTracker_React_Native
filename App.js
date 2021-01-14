/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';

const App = () => {
  return <NavigationContainer>{<Text>Hola</Text>}</NavigationContainer>;
};

//const styles = StyleSheet.create({});

export default App;
