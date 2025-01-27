/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherScreen from './Src/Components/WeatherScreen';
import MainMenuScreen from './Src/Components/MainMenuScreen';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator({
  screens:{
    MainMenu:MainMenuScreen,
    Weather:WeatherScreen,
  }
});

function App(): React.JSX.Element {
 return(
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Main Menu" component={MainMenuScreen} />
    <Stack.Screen name="Weather" component={WeatherScreen} />
  </Stack.Navigator>
</NavigationContainer>
  );
}

export default App;
