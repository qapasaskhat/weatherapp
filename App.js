import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen1 from './src/screen/Screen1';
import Screen2 from './src/screen/Screen2';
import City from './CityScreen';
import { Provider } from 'react-redux';
import Store from './api/redusers/index';

const AppNavigator = createStackNavigator({
  Home:{
    screen: Screen1,
    navigationOptions: () => ({
      title: `Погода`,
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: `to A`,
    }),
  },
  Weather:{
    screen: Screen2,
    navigationOptions: () => ({
      title: `Погода`,
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: `to A`,
    }),
  },
  City:{
    screen: City,
    navigationOptions: () => ({
      title: `Выберите город`,
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: `to A`,
    }),
  }
},{
  initialRouteName:'City'
});
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={Store}>
      <AppContainer />
    </Provider>
  );
}

