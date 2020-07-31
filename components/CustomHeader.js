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

export function CustomHeader({title,cnavigation}){
    return(
<View style = {styles.headerConatiner}>

<Text style={styles.headerTitle}>{title}</Text>

    <View style = {{flex:0.1}}>
        <TouchableOpacity style = {{ width:50, height: 70,marginLeft:10}} onPress={cnavigation}>
            <Image 
                source = { require('../assets/images/back.png')} 
                style = {styles.backBtn} 
            />
        </TouchableOpacity>
    </View>

              
  

      {/* <Text style={styles.headerTitle}>{title}</Text> */}

</View>
);
}



const styles = StyleSheet.create({
  headerConatiner: {
    height: 60,
    flexDirection: 'row-reverse',
    backgroundColor: '#DF0700',
},
backBtn: {
    width: 20,
    height:20,
    marginTop:20
},

headerTitle: {fontSize: 17,
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center',
  marginTop:20,
  height: 40,
  flex:1,
  marginLeft:-40,
}

});
