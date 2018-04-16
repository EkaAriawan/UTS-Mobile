import React from 'react';
import { SectionList, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const beranda = require('./img/beranda.png');

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
        <View style={styles.container}>
          <SectionList
            sections={[
              {
                title: 'Tanah Lot',
                data: ['Destinasi pantai di Bali yang pertama adalah Tanah Lot. Tempat wisata ini terletak di Desa Beraban, Tabanan dan hanya terpisah sekitar 24 km dari Pantai Kuta. Keunikan tempat wisata yang satu ini adalah adanya pura yang berada di atas batu karang yang menjorok ke tengah laut.']
              },
              {
                title: 'Pantai Kuta',
                data: ['Kemahsyuran tempat wisata bali yang satu ini tidak perlu diragukan. Tidak hanya turis domestik, turis internasional pun tidak asing dengan Pantai Kuta. Letaknya hanya berjarak 4,5 km dari Bandara Ngurah Rai dan 9 km dari Denpasar.']
              },
              {
                title: 'Pantai Sanur',
                data: ['Selain Tanah Lot dan Kuta, pantai di Pulau Seribu Pura lainnya yang terkenal adalah Pantai Sanur. Lokasinya berada di sebelah timur Denpasar, sehingga banyak orang yang mengejar momen matahari terbit di pantai ini.']
              },
              {
                title: 'Pantai Padang-Padang',
                data: ['Letak pantai yang satu ini memang agak jauh dari Denpasar, namun keindahannya sebanding dengan perjalanan yang ditempuh. Selain tiga pantai yang disebutkan sebelumnya, umumnya pantai-pantai di Bali lainnya lebih banyak dikunjungi wisatawan asing. Pun demikian dengan Pantai Padang-Padang yang disebut-sebut sebagai surga bagi para peselancar. Ombaknya yang cukup tinggi untuk berselancar membuat pantai yang menjadi lokasi film Eat, Pray, Love ini dipenuhi turis berbekal papan selancar.']
              },
              {
                title: 'Pantai Pasir Putih',
                data: ['Anda dapat mencoba pergi ke Pantai Karma. Tidak banyak wisatawan yang berlalu-lalang di sini. Pantai dengan pasir putih dan air laut biru jernih ini berada di dasar tebing dan hanya dapat diakses menggunakan eskalator.']
              },
              {
                title: 'Pantai Lovina',
                data: ['Pantai ini cocok sebagai tempat untuk menikmati matahari terbit dengan latar pegunungan. Anda dapat menyewa kapal dengan kapasitas empat orang dan menyaksikan lumba-lumba liar yang berenang bebas di lautan. Akan tetapi, kemunculan lumba-lumba ini juga dipengaruhi oleh faktor alam.']
              }
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
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
  icon: {
    height: 24,
    width: 24
  }
});
