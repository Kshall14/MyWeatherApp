/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherScreen from './Src/Screens/weatherScreen';
import MainMenuScreen from './Src/Screens/mainMenuScreen';
import { WeatherProvider } from './Src/Context/weatherContext';
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

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
 return(
  <WeatherProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main Menu" component={MainMenuScreen} />
          <Stack.Screen name="Weather" component={WeatherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherProvider>
  );
}

export default App;
