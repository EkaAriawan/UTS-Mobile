import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetJbn extends React.Component {
  static navigationOptions = {
    title: 'Kabupaten Jembrana',
  };render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
