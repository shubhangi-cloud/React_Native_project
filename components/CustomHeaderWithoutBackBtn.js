import React,{
    Component
} from 'react';

import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,
    Alert
} from 'react-native';
import { createAppContainer,NavigationBackAction } from 'react-navigation';

const screenWidth = Dimensions.get('window').width;

export function CustomHeaderWithoutBackBtn({title,cnavigation,textLen}){
    return(

<View style = {styles.headerConatiner}>

<Text style={styles.headerTitle}>{title}</Text>

</View>
);
}



const styles = StyleSheet.create({
  headerConatiner: {
    height: 70,
    flexDirection: 'row-reverse',
    backgroundColor: '#DF0700',
},
backBtn: {
    width: 20,
    height:20,
    marginTop:40
},

headerTitle: {fontSize: 17,
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center',
  marginTop:40,
  height: 40,
  flex:1,

}

});
