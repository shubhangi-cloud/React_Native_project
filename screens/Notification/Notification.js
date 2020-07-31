import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Notification extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#dedede'}}>
        <Text>  Notification screen </Text>
      </View>
    );
  }
}
