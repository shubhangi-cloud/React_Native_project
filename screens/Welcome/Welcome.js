import React,{Component} from 'react';
import {View,Text, ImageBackground,Dimensions,StyleSheet,TouchableOpacity} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Welcome extends Component {
  render() {
    return(
      <View style={{flex: 1,backgroundColor: '#DF0000'}}>
        <View style={styles.imageViewStyle}>
          <ImageBackground source = {{ uri: 'https://images.unsplash.com/photo-1536928994169-e339332d0b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}
            style={{ height: screenHeight/2}}
            resizeMode={'cover'}
            borderBottomLeftRadius={screenWidth*0.5}
            >
            <View style={styles.welcomeViewStyle}>
              <Text style={styles.welcomeTextStyle}> Welcome </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Register')}>
            <View style={styles.btnViewStyle}>
                <Text style={styles.btnTextStyle}> Register </Text>
            </View> 
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Login')}>
            <View style={styles.btnViewStyle}>  
                <Text style={styles.btnTextStyle}> Login </Text>
            </View> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles=StyleSheet.create(
  {
    imageViewStyle:{
      height: screenHeight/2,
      borderBottomLeftRadius:screenWidth*0.5,
      backgroundColor:'#fff',
    },
    btnViewStyle: {
      justifyContent:"center",
      alignItems:'center',
      marginTop: 40,
      width: screenWidth*0.60,
      borderRadius: 10,
      height: 50,
      backgroundColor:'#fff',
      borderColor: '#808080',
      borderWidth:1,
    },
    btnTextStyle: {
      fontSize:16,
      fontWeight:'bold',
    },
    welcomeTextStyle: {
      fontSize:25,
      fontWeight:'bold',
      color:'#DF0000',
      marginBottom:30,
    },
    welcomeViewStyle: {
      flex:1,
      justifyContent:"flex-end",
      alignItems:'center',
      borderBottomLeftRadius:screenWidth*0.35,
      marginBottom:30,
      borderColor: '#DF0000',
      borderBottomWidth:2,
    },
  })