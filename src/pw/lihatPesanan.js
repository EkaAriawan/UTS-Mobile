import React from 'react';
import { View, Text } from 'react-native';

export default class lihatPesanan extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Lihat Pengeluaran</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Belum Terisi</Text>
      </View>
    );
  }
}
