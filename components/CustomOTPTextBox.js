import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Dimensions,Keyboard,TextInput, Alert} from 'react-native';
import { color, Value } from 'react-native-reanimated';


export function CustomOTPTextBox({customUnderlineColor,inputRef,refNext,refPrev,textVal}){

 return (
   
      <View>
       
        <View style={GlobalStyle.getCustomStyle(customUnderlineColor).SectionStyle}>
          <TextInput
              style={GlobalStyle.getCustomStyle().textBoxStyle}
              placeholder={String(0)}
              placeholderTextColor = '#f5a9a8'
              underlineColorAndroid="transparent"
              keyboardType= 'numeric'
              maxLength = {1}
              clearTextOnFocus = {true}
              ref={(r) => { inputRef && inputRef(r) }}
              onChangeText={refNext} 
              onKeyPress={({ nativeEvent }) => { refPrev;
                // if (nativeEvent.key === 'Backspace') {
                
                //   refPrev;
                // }
              }}
          />
        </View>
      </View>
    );
  }


export default class GlobalStyle {
    static getCustomStyle(underLineColor) {
        return StyleSheet.create({
            SectionStyle: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: .5,
                borderBottomColor: underLineColor,
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                height: 55,
                width: 45,
                marginEnd: 10,
                marginTop: 30,
                marginBottom: 30,
            },
            textBoxStyle: {
                flex: 1 ,
                textAlign: 'center',
                fontSize:30 ,
                color: '#e52c4b'
            }
        });
    }
}