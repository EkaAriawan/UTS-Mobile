import React from 'react';
import { SectionList, ScrollView, StyleSheet, Text, View, Image, SegmentTab, Button, selected } from 'react-native';

const beranda = require('./img/beranda.png');
const kotaIcon = require('./img/1.png');
export default class Beranda extends React.Component {
  static navigationOptions = {
    title: 'Beranda',
    drawerLabel: 'Beranda',
    drawerIcon: () => (
    <Image
      source={beranda}
      style={styles.icon}
    />
  )
  };
  render() {
    return (
      <ScrollView>
        <Text style={{fontWeight : 'bold',fontSize : 33, justifyContent: 'center', alignItems: 'center', paddingLeft:30, paddingTop :60,paddingBottom : 2, }} >Pengeluaran Harian</Text>
        <View style={styles.container}>
        
            <View style={styles.iconContainer}>
              <Image source={kotaIcon} style={styles.icon1} />
            </View>
            <Text style={{fontSize : 20, justifyContent: 'center', alignItems: 'center', paddingLeft:40, paddingTop :28, }} >Pendidikan Teknik Informatika</Text>
            <Text style={{fontWeight : 'bold',fontSize : 23, justifyContent: 'center', alignItems: 'center', paddingLeft:15, paddingTop :5, }} >Universitas Pendidikan Ganesha</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 2,
   paddingTop: 22,
   justifyContent: 'center',
   paddingBottom: 20,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 14,
    // height: 100
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#DCDCDC',
    //borderRadius: 15,
    //borderWidth: 1,
    justifyContent: 'center',
    flex:1,
    //height: 40,
    //width: 30,
    paddingTop :30,
    paddingBottom : 30,
  },
  icon: {
    height: 24,
    width: 24,
  },
});
