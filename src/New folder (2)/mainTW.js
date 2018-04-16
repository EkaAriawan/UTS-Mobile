import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Main from './tempatWisata';
import DetDps from './tw/dDps';
import DetBdg from './tw/dBdg';
import DetGyr from './tw/dGyr';
import DetBgl from './tw/dBgl';
import DetKrg from './tw/dKrg';
import DetTbn from './tw/dTbn';
import DetBlg from './tw/dBlg';
import DetJbn from './tw/dJbn';
import DetKlk from './tw/dKlk';

const tempat = require('./img/tempat.png');

const RouteTW = StackNavigator(
  {
    Home: {
      screen: Main,
    },
    dDps: {
      screen: DetDps,
    },
    dBdg: {
      screen: DetBdg,
    },
    dGyr: {
      screen: DetGyr,
    },
    dBgl: {
      screen: DetBgl,
    },
    dKlk: {
      screen: DetKlk,
    },
    dKrg: {
      screen: DetKrg,
    },
    dTbn: {
      screen: DetTbn,
    },
    dBlg: {
      screen: DetBlg,
    },
    dJbn: {
      screen: DetJbn,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class mainTempatWisata extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Tempat Wisata',
    drawerIcon: () => (
    <Image
      source={tempat}
      style={styles.icon}
    />
  ),
  };
  render() {
    return <RouteTW />;
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  }
});
