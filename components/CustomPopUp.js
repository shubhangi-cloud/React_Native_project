
import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Platform,
    Keyboard,
    ActivityIndicator,
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export class CustomPopUp extends Component {  
 
   
    render() { 
      console.log("custom pop up");
      return (  
        <View style = { styles.popUpBackgroundViewStyle}>
            <View style = {styles.popUpViewStyle}>
                <View style = {styles.msgTextViewStyle}>
                    <Text style = {{fontSize: 22,fontWeight:'bold',marginBottom:10}}>{this.state.popUpMsgTitle}</Text>
                    <Text style = {{fontSize: 17}}>{this.state.popUpMsgText}</Text>
                </View>
                <View style ={styles.okBtnView} >
                    <View style = {styles.okBtnStyle}>
                        <TouchableOpacity onPress= {() => showAndHidePopUp()}>
                            <Text style = {styles.nextBtnTextStyle}>OK</Text>
                        </TouchableOpacity>
                    </View> 
                </View>   
            </View>
        </View>
      );  
    }  
  }  
    

//***********************************
         /* UI Styles */
//***********************************
const styles = StyleSheet.create({

  popUpBackgroundViewStyle: {
      width: screenWidth,
      height: screenHeight,
      backgroundColor: 'rgba(0,0,0, 0.4)',
      justifyContent: 'center',
      position: 'absolute',
  },
  popUpViewStyle:{
      backgroundColor: 'rgba(255, 255, 255, 1)',
      justifyContent: 'center',
      marginLeft: 30,
      marginRight:30,
      borderRadius: 10,
   },
   msgTextViewStyle: {
       margin:30,
       marginBottom: 10,
       alignItems: 'center'
   },
  okBtnView: {
      margin: 20,
      height:30,
  },
  okBtnStyle: {
      backgroundColor: '#DF0700',
      height: 30,
      justifyContent: 'center',
      width: '100%',
      borderRadius: 5,
  },
  nextBtnView: {
      alignItems: 'center',
      marginTop: 20,
      position: 'absolute',
      bottom: 30,
      left:40,
      right: 40,
      alignSelf: 'center',
  },
  
  nextBtnStyle: {
      backgroundColor: '#DF0700',
      height: 50,
      margin: 30,
      justifyContent: 'center',
      width: '100%',
      borderRadius: 10,
  },
  nextBtnTextStyle: {
      color: '#fff',
      fontSize: 17,
      borderRadius: 10,
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      // fontFamily:'SFProText-Regular',
  },

});