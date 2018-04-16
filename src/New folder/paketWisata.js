/*import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import lihatPW from './pw/lihatPW';
import pesanPW from './pw/pesanPW';
import lihatPesanan from './pw/lihatPesanan';

const paket = require('./img/paket.png');

const TabNav = TabNavigator({
  Pemesanan: {
    screen: pesanPW
  },
  Paket_Wisata: {
    screen: lihatPW
  },
  
  Data_Pesanan: {
    screen: lihatPesanan
  }
});

export default class paketWisata extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Paket Wisata',
    drawerIcon: () => (
    <Image
      source={paket}
      style={styles.icon}
    />
  ),
  };
  render() {
    return (
      <TabNav />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  }
});*/

import React from 'react';

const paket = require('./img/paket.png');


import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity, 
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';


class pesanPW extends React.Component {
  static navigationOptions = {
    
    drawerLabel: 'Packing',
    title: 'Daftar Packing',
    drawerIcon: () => (
    <Image
      source={paket}
      style={styles.icon}
    />
  ),
  };
  
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      jumlah:0,
      harga: 0,
      
      activityIndicatorLoading: false,
    };
  }

insertDataIntoMySQL = () => {
  this.setState({ activityIndicatorLoading: true }, () => {
    fetch('https://eka-ariawan.000webhostapp.com/insertPesanan.php',
        {
          method: 'POST',
          headers:
          {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              nama: this.state.nama,
              jumlah: this.state.jumlah,
              harga: this.state.harga,
            }
          )
          }).then((response) => response.json()).then((responseJsonFromServer) => {
            alert(responseJsonFromServer);
            this.setState({ activityIndicatorLoading: false });
          }).catch((error) => {
            console.error(error);
            this.setState({ activityIndicatorLoading: false });
            });
  });
}


  render() {
    
    return (
      
      
      <View style={styles.MainContainer}>
        
        <View style={{ padding: 10, backgroundColor: 'white', width: 280 }}>
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Masukkan Nama Packing"
              underlineColorAndroid="transparent"
              onChangeText={(namaInput) => this.setState({ nama: namaInput })}
            />
            <TextInput
              style={styles.TextInputStyleClass2}
              placeholder="Masukkan Nama Barang"
              underlineColorAndroid="transparent"
              onChangeText={(barangInput) => this.setState({ jumlah: barangInput })}
            />
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Masukkan Nama Packing"
              underlineColorAndroid="transparent"
              onChangeText={(namaInput) => this.setState({ harga: namaInput })}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.TouchableOpacityStyle}
              onPress={this.insertDataIntoMySQL}
            >
              <Text style={styles.TextStyle}>Pesan</Text>
            </TouchableOpacity>
            {
              this.state.activityIndicatorLoading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
            }
       </View>
      </View>
    );
  }
};

  
 
export default StackNavigator({
  
  Home: {
    screen: pesanPW,
  },
});

const styles = StyleSheet.create(
{
  icon: {
    height: 24,
    width: 24
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 30,
  },
  TextInputStyleClass: {
    // textAlign: '',
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#009688',
    borderRadius: 7,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    },
    TextInputStyleClass2: {
    // textAlign: '',
    height: 100,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#009688',
    borderRadius: 7,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign:'left',
    // justifyContent:'flex-start',
    // alignItems: 'flex-start'
    },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#009688',
    marginBottom: 20,
    width: '100%',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
 
});

