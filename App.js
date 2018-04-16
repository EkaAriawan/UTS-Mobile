import React from 'react';
// import { StyleSheet, Button, View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Beranda from './src/main';
import mainTempatWisata from './src/mainTW';
import paketWisata from './src/paketWisata';

const RootStack = DrawerNavigator(
  {
    Beranda: {
      screen: Beranda,
    },
    paketWisata: {
      screen: paketWisata,
    },
    mainTempatWisata: {
      screen: mainTempatWisata,
    },
    
  },
  {
    initialRouteName: 'Beranda',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
